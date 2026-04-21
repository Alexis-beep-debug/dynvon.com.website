# Handoff — Backend IP-Anonymisierung (Analytics)

> Ausstehender Task für das **Analytics-Backend-Repo**
> (`email-outreach-dynvon-production`) — NICHT dieses Website-Repo.
> Voraussetzung, damit die neu dokumentierte Reichweitenmessung
> in `src/app/datenschutz/page.tsx` (Abschnitt 5) rechtlich deckungsgleich ist.

## Kontext

Die Website `dynvon.com` lädt ein selbst gebautes Analytics-Skript von
`https://email-outreach-dynvon-production.up.railway.app/analytics/script.js`.
Das Skript erfasst Pageviews, Clicks, eine zufällige Session-ID (sessionStorage),
User-Agent und IP-Adresse. Aktuell wird die IP-Adresse **ungehasht** in der DB
gespeichert — das ist DSGVO-problematisch.

Die Datenschutzerklärung (Abschnitt 5, commit `8dba35d`) sagt bereits aus:
**"IP-Adresse, anonymisiert vor der Speicherung (letztes Oktett auf 0 gesetzt,
z. B. 192.168.178.0)"**. Diese Aussage muss das Backend halten.

## Was zu tun ist (Backend-Repo)

### 1. Helper-Funktion `anonymize_ip()`

```python
def anonymize_ip(ip: str) -> str:
    """IPv4: letztes Oktett auf 0. IPv6: letzte 80 Bit auf 0."""
    if not ip:
        return ""
    if ":" in ip:  # IPv6
        parts = ip.split(":")
        return ":".join(parts[:3]) + "::"
    if "." in ip:  # IPv4
        octets = ip.split(".")
        if len(octets) == 4:
            return f"{octets[0]}.{octets[1]}.{octets[2]}.0"
    return ""
```

### 2. Einsatz im Analytics-Endpoint

**FastAPI** (falls FastAPI genutzt wird):
```python
from fastapi import Request

@app.post("/analytics/event")
async def track_event(request: Request, ...):
    # Bei Railway/Cloudflare steht die echte Client-IP im X-Forwarded-For-Header:
    forwarded = request.headers.get("x-forwarded-for", "")
    raw_ip = (
        forwarded.split(",")[0].strip()
        if forwarded
        else (request.client.host if request.client else "")
    )
    ip_anonymized = anonymize_ip(raw_ip)
    # Ab hier nur noch ip_anonymized in die DB schreiben!
```

**Flask-Variante:**
```python
from flask import request
raw_ip = request.headers.get(
    "X-Forwarded-For", request.remote_addr or ""
).split(",")[0].strip()
ip_anonymized = anonymize_ip(raw_ip)
```

### 3. Bestehende IPs in der DB aufräumen (einmalig)

Die bereits gespeicherten, ungehashten IPs müssen auch anonymisiert werden,
sonst bleibt die DSGVO-Lücke für Alt-Daten bestehen.

```sql
-- PostgreSQL, für IPv4 (als text gespeichert)
UPDATE analytics_events
SET ip_address = regexp_replace(ip_address, '\.\d+$', '.0')
WHERE ip_address LIKE '%.%.%.%';

-- Falls auch IPv6 in derselben Spalte:
UPDATE analytics_events
SET ip_address = regexp_replace(ip_address, '(:[^:]+){5}$', '::')
WHERE ip_address LIKE '%:%:%';
```

**Vor dem Ausführen:**
- Datenbank-Backup machen
- Auf einer Kopie testen
- Aktuellen Zeilen-Count notieren zum Vergleich

## Test-Checkliste nach Deploy

- [ ] Neuer Analytics-Event landet mit IP wie `192.168.178.0` (nicht `192.168.178.42`) in der DB
- [ ] IPv6-Fall testen (wenn relevant)
- [ ] Alt-Bestand via SQL-Update bereinigt
- [ ] `X-Forwarded-For`-Header wird korrekt gelesen (wichtig bei Railway/Cloudflare)
- [ ] Opt-out funktioniert: mit `localStorage.setItem('notrack','1')` im Browser sollte kein Event mehr im Backend ankommen
- [ ] In der Datenschutzerklärung (Website) auf `/datenschutz` den Opt-out-Button klicken und prüfen, dass der Schalter wirkt

## Status

- **Datum Handoff:** 2026-04-21
- **Datenschutz Website:** ✅ bereits live (commit `00a2e22`)
- **Backend-Fix:** ⏳ offen
- **Risiko bis Fix deployed:** ungehashte IPs werden weiter gespeichert. Rechtliche Lücke.

## Nach erfolgreichem Deploy

In `PROJEKTKONTEXT.md` den Punkt "Backend IP-Anonymisierung" aus "Offene Punkte"
entfernen. Optional diese `HANDOFF-ANALYTICS-IP.md`-Datei löschen oder in ein
`docs/archiv/`-Verzeichnis verschieben.
