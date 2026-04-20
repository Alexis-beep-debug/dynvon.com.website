# Pitch-Deck — Buchhaltungsautomatisierung für Reinigungsunternehmen

> Slide-by-Slide-Entwurf für ein Sales-Deck / Kunden-Angebot. Inhalt
> angelehnt an den Buchhaltung-Track auf `/reinigung`. Stil folgt
> `BRAND.md` (Sie-Form, direkt, zahlenbasiert, keine Floskeln).
>
> Pro Slide: **Titel** · **Subtitel/Hook** · **Inhalt** · **Speaker Notes**.
> Slides sind bewusst sparsam — Zahlen > Text > Bullets.

---

## Slide 1 — Cover

**Titel:** Buchhaltung in Minuten statt Tagen
**Subtitel:** Automatisierung für Gebäudereinigungsunternehmen
**Fußzeile:** Alexis Bethke-Pittadakis · dynvon · Nürnberg
**Visual:** Triangle-Logo + dynvon-Wordmark, Accent-Gradient-Akzent

**Speaker Notes:** Kurze Begrüßung, Name, Positionierung. "Heute zeige ich Ihnen in ~30 Minuten, wie Ihre Buchhaltung sich selbst erledigt."

---

## Slide 2 — Wer ich bin

**Titel:** Automation Engineer für kleine Unternehmen
**Inhalt:**
- Alexis Bethke-Pittadakis, Python-Entwickler aus Nürnberg
- Spezialisiert auf Geschäftsprozess-Automatisierung
- 15+ erfolgreich umgesetzte Projekte
- **Nicht** No-Code (Zapier/Make) — sondern robuste, eigene Systeme

**Speaker Notes:** Vertrauen aufbauen. Abgrenzung zu generischen No-Code-Anbietern betonen — das ist das Kaufargument für KMU, die etwas Verlässliches wollen.

---

## Slide 3 — Kennen Sie das?

**Titel:** Vier Baustellen, die Zeit fressen
**Inhalt (4 Karten im Grid):**
1. **Rechnungen schreiben raubt Zeit** — jeden Monat stundenlang klicken und prüfen
2. **Zahlungseingänge prüfen nervt** — ins Konto schauen, abgleichen, abhaken
3. **Mahnungen gehen unter** — überfällige Rechnungen bleiben liegen
4. **Steuerberater wartet ewig** — Belege sortieren, Exports erstellen

**Speaker Notes:** Fragen Sie den Kunden: "Was davon kennen Sie?" — lassen Sie ihn nicken. Schmerz bewusst machen, bevor die Lösung kommt.

---

## Slide 4 — Was das wirklich kostet

**Titel:** Der Preis manueller Buchhaltung
**Inhalt (3 Zahlen groß):**
- **10+ h/Woche** — Buchhaltungsaufwand für ein mittleres Reinigungsunternehmen
- **30-40 %** — nicht pünktlich gezahlte Rechnungen ohne Mahn-System
- **~2.000 €/Jahr** — zusätzliche Steuerberater-Kosten durch chaotische Unterlagen

**Speaker Notes:** Zahlen konkret machen. Rechnen Sie vor: 10h × 4 Wochen × Stundensatz → das ist der Opportunity-Cost-Knaller.

---

## Slide 5 — Die Vision

**Titel:** So könnte Ihr Monat aussehen
**Inhalt (Story in 4 Schritten):**
- Auftrag erledigt → Rechnung geht automatisch raus
- Geld kommt an → automatisch verbucht
- Kunde zahlt nicht → automatische Mahnung geht raus
- Monatsende → Steuerberater-Paket auf Knopfdruck

**Tagline:** Buchhaltung in Minuten statt Tagen

**Speaker Notes:** Bild malen. Kein Tech-Jargon — der Kunde soll sich vorstellen, wie sein Wochenende wieder frei ist.

---

## Slide 6 — System 1: Automatische Rechnungsstellung

**Titel:** Auftrag erledigt → Rechnung fertig
**Inhalt (Flow-Diagramm):**
```
Auftrag erledigt → Rechnung erstellt → E-Mail an Kunden → Archiviert
```
**Was es tut:**
- Rechnung aus dem Angebot generieren
- Korrekte fortlaufende Nummerierung
- Versand per E-Mail im CI-Layout
- Revisionssichere Ablage (GoBD)

**Speaker Notes:** Betonen: "Sie machen nichts mehr — der Kunde bekommt die Rechnung, bevor Sie sich überhaupt dran erinnern."

---

## Slide 7 — System 2: Zahlungsverfolgung auf Autopilot

**Titel:** Geld kommt — und wird automatisch zugeordnet
**Inhalt (Flow):**
```
Kontobewegung → Abgleich → Rechnung verbucht → Offene Posten aktuell
```
**Was es tut:**
- Banking-API liest Kontobewegungen
- Zahlungen automatisch Rechnungen zuordnen
- Dashboard: "Wer schuldet mir noch wieviel?"
- Benachrichtigung bei großen Eingängen

**Speaker Notes:** Besonders wertvoll für Betriebe mit 50+ Rechnungen/Monat. Ersetzt das manuelle "Abhaken in Lexoffice".

---

## Slide 8 — System 3: Automatisches Mahnwesen

**Titel:** Überfällige Rechnungen mahnen sich selbst
**Inhalt (Flow):**
```
Fällig-Datum → Freundliche Erinnerung → 1. Mahnung → 2. Mahnung
```
**Was es tut:**
- Erinnerung 3 Tage vor Fälligkeit (freundlich)
- Mahnung nach 14 / 30 Tagen (gestuft)
- Eskalation an Sie erst ab 2. Mahnung
- Ton: professionell, kundenerhaltend

**Speaker Notes:** "Nicht nur mehr Geld pünktlich reinkommt — auch weniger unangenehme Telefonate für Sie."

---

## Slide 9 — Fallstudie: Reinigungsunternehmen

**Titel:** Wie es in der Praxis läuft
**Inhalt (Vorher/Nachher-Tabelle):**

| | Vorher | Nachher |
|---|---|---|
| Rechnungs-Zeitaufwand | 8h/Woche | 0h (automatisch) |
| Mahnungen | Unregelmäßig, oft vergessen | 100 % pünktlich |
| Zahlungseingang Ø | 42 Tage | 21 Tage |
| Steuerberater-Übergabe | 4h/Monat | 0 min (Auto-Export) |

**Speaker Notes:** Echte Zahlen von echten Kunden (sofern DSGVO-konform anonymisiert). Wenn noch kein Kunde — als realistisches Beispiel kennzeichnen.

---

## Slide 10 — Ergebnisse

**Titel:** Was Sie konkret bekommen
**Inhalt (3 Stats groß):**
- **10 h** — gesparte Zeit pro Woche (vorher: am Wochenende)
- **100 %** — pünktliche Zahlungsquote (vorher: 60-70 %)
- **0** — vergessene Mahnungen (vorher: regelmäßig)

**Unten:** Break-even in der Regel < 3 Monate

**Speaker Notes:** Die 3 zentralen Versprechen. Gleiche Zahlen wie auf `/reinigung` — konsistent mit Ihrer Online-Präsenz.

---

## Slide 11 — Wie Ihre Tools integriert werden

**Titel:** Funktioniert mit dem, was Sie schon haben
**Inhalt (Logo-Leiste + Kurztext):**
- **Buchhaltung:** Lexoffice, sevDesk, DATEV
- **Banking:** FinTS / PSD2-APIs (fast alle deutschen Banken)
- **E-Mail:** Brevo, SMTP
- **Datenbank:** PostgreSQL, Airtable
- **Hosting:** Railway (Deutschland/EU)

**Untertitel:** Keine neue Software nötig — wir integrieren um Ihre bestehende Umgebung herum.

**Speaker Notes:** Häufiger Einwand: "Ich will nicht alles umstellen." Direkt abräumen.

---

## Slide 12 — So arbeiten wir zusammen

**Titel:** 4 Phasen — fester Rahmen
**Inhalt (Timeline):**
1. **Kennenlernen** — 30 Min kostenlos, Erstgespräch
2. **Analyse** — 1-2 Wochen, Prozesse aufnehmen, Festpreis-Angebot
3. **Entwicklung** — 2-4 Wochen, iterativ mit Ihnen
4. **Go-live + Schulung** — Übergabe, Dokumentation
5. **Support** — laufend, monatlicher Wartungsvertrag

**Speaker Notes:** Klarheit statt Agentur-Nebel. Festpreis-Signal nach Phase 2 — nimmt Kostenangst.

---

## Slide 13 — Investition

**Titel:** Transparent statt Pi-mal-Daumen
**Inhalt (2 Spalten):**

**Einmalig — Entwicklung:**
- Umfang: 3 Systeme (Rechnungen, Zahlungen, Mahnungen)
- Festpreis nach Analyse (typisch: 4.900 € - 9.900 €)
- Inkl. Schulung + Dokumentation

**Laufend — Betrieb & Support:**
- Hosting: ab 29 €/Monat
- Wartung & kleine Anpassungen: ab 99 €/Monat
- SLA: Antwort binnen 24h

**ROI-Rechnung unten:**
10 h/Woche × 4 Wochen × 50 €/h Opportunity Cost = **2.000 €/Monat zurück**

**Speaker Notes:** Preise anpassen an den konkreten Kunden/Umfang. ROI-Rechnung aus der Diskussion personalisieren.

---

## Slide 14 — Warum ich

**Titel:** Warum nicht No-Code?
**Inhalt (2 Spalten Vergleich):**

| No-Code (Zapier/Make) | dynvon |
|---|---|
| Pro Zap: 20-100 €/Monat | Einmalig, dann nur Hosting |
| Kaputt bei API-Änderung | Überwacht + gewartet |
| Datenschutz: US-Server | EU / Deutschland |
| "Funktioniert meistens" | Läuft 24/7 zuverlässig |

**Speaker Notes:** Entscheidende Abgrenzung. Wer schonmal mit Zapier gekämpft hat, nickt hier.

---

## Slide 15 — Der nächste Schritt

**Titel:** Kostenloses 30-Min-Gespräch
**Inhalt:**
- **Link:** calendar.app.google/qJnC2hS15NJ1XxVcA
- **QR-Code:** (beim Druck einfügen — generieren aus obiger URL)
- **E-Mail:** alexis@dynvon.com

**Subtitel:** Keine Kosten, kein Risiko — nur ein ehrliches Gespräch über Ihre Möglichkeiten.

**Speaker Notes:** Immer dieselbe Landing-Formulierung wie auf der Website — Wiedererkennungswert.

---

## Slide 16 (Backup) — Häufige Fragen

**Titel:** Was Kunden typischerweise fragen
**Inhalt (Q&A):**

**"Wir nutzen schon Lexoffice — brauchen wir das überhaupt?"**
→ Ideal sogar. Lexoffice bleibt, ich automatisiere drum herum (Bank-Abgleich, Mahnungen, Steuerberater-Export).

**"Datenschutz? Wo liegen die Daten?"**
→ DSGVO-konform, Server in Deutschland/EU, AV-Vertrag selbstverständlich.

**"Was, wenn sich etwas ändert (neue Bank, neues Tool)?"**
→ Im Wartungsvertrag inkludiert. Anpassung in der Regel binnen 1-2 Wochen.

**"Wie lange dauert der Go-live?"**
→ Von Unterschrift bis produktiv: 3-6 Wochen, je nach Umfang.

**"Was passiert, wenn Sie mal nicht erreichbar sind?"**
→ Dokumentation + Backup-Partner. Ihr System läuft auch ohne mich weiter.

**Speaker Notes:** Nur zeigen, wenn Fragen kommen. Jede Antwort in 1-2 Sätzen halten.

---

## Slide 17 (Backup) — Mini-Demo (optional)

**Titel:** Live — so funktioniert's
**Inhalt:** Echter Screen-Share oder Video-Clip (30s)
- Rechnung wird in Lexoffice erstellt
- E-Mail geht automatisch raus
- Kunde zahlt (simuliert)
- System markiert Rechnung als bezahlt
- Dashboard aktualisiert sich

**Speaker Notes:** Nur bei technisch interessiertem Kunden oder auf Nachfrage. Der Effekt ist hoch — aber nicht vor CFOs/Inhabern zwingend nötig.

---

## Anhang: Design-Hinweise

- Folien im dynvon-Look: Off-White (`#f8f9fb`) als Background, Accent-Indigo (`#4f46e5`) sparsam, Stat-Highlight-Gradient (Indigo → Purple `#7c3aed`) nur auf Key-Numbers
- Typografie: Inter, `font-bold tracking-tight` für Titel
- Max. 6 Textzeilen pro Slide — Zahlen groß, Prosa minimal
- Immer eine Slide-Nummer + "dynvon · Buchhaltungsautomatisierung" in der Fußzeile
- Alle Werte und Patterns: siehe `BRAND.md`

## Datei-Version

Optional: dieses Dokument als Google-Slides / Keynote / PowerPoint umsetzen. Empfohlen: Google Slides (einfachster Versand per Link).
