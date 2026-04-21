# Projektkontext — dynvon.com.website

> Diese Datei wird automatisch am Ende jedes Claude-Turns aktualisiert
> (Stop-Hook in `.claude/settings.local.json`). Hier landet der aktuelle
> Projektstand, damit bei Kontextverlust (neue Session, Auto-Compact)
> immer klar ist, wo wir stehen.

## Stand
- **Datum:** 2026-04-21
- **Branch:** `main`
- **Status:** clean (keine uncommitted changes)

## Projekt-Basics
- **Stack:** Next.js 16.2.1 + React 19.2 + Tailwind v4, TypeScript
- **Zweck:** Firmen-/Landingpage für dynvon (Business Process Automation, Alexis Bethke-Pittadakis, Nürnberg)
- **Routen:**
  - `/` — Home (Hero, Services, **IndustryFocus**, CaseStudies, Contact)
  - `/reinigung` — Kampagnen-Landingpage für Gebäudereinigungsunternehmen (fokussiert auf Buchhaltung + Topic-Chooser)
  - `/blog` + `/blog/[slug]` — Blog (Daten in `src/lib/blogData.ts`)
  - `/impressum`, `/datenschutz` — Rechtliches
- **i18n:** DE/EN via `src/lib/LanguageContext` + `src/lib/i18n.ts`; persistiert über Seitenwechsel (DE-first)
- **Wichtig (AGENTS.md):** Next.js 16 hat Breaking Changes ggü. älteren Versionen — vor Code-Änderungen in `node_modules/next/dist/docs/` nachsehen

## Letzte Arbeit (neueste 10 Commits)
1. `4a6da4d` Merge remote-tracking branch 'origin/main' into claude/review-project-status-ZBd2O (Backend-IP-Anonymisierung Handoff)
2. `1ad285c` docs: add HANDOFF-ANALYTICS-IP.md for backend IP-Anonymisierung (Python-Snippets, SQL-Cleanup)
3. `5c0caf3` chore: auto-update PROJEKTKONTEXT.md
4. `00a2e22` fix(datenschutz): Reichweitenmessung dokumentieren + Opt-out (#16)
5. `cafe777` Merge remote-tracking branch 'origin/main' in claude/review-project-status-ZBd2O
6. `8dba35d` fix(datenschutz): Reichweitenmessung ehrlich dokumentieren
7. `a7dfbc3` chore: auto-update PROJEKTKONTEXT.md
8. `e166f42` chore: auto-update PROJEKTKONTEXT.md
9. `93e7d1e` chore: auto-update PROJEKTKONTEXT.md
10. `ecb209f` fix(industry-focus): Stats aus Cards entfernen (#15)

## Aktuell in Arbeit
- **Task:** Frontend: Datenschutz & Analytics-Audit abgeschlossen + gemergt. Tracking-Skript läuft; Datenschutzerklärung repariert (Abschn. 4–5 dokumentiert); `HANDOFF-ANALYTICS-IP.md` bereitgestellt.
- **Nächste Schritte:** Backend-IP-Anonymisierung in `email-outreach-dynvon-production` deployen — siehe `HANDOFF-ANALYTICS-IP.md` für Code-Snippets + Test-Checklist.
- **Uncommitted:** keine (working tree clean).

## Offene Punkte / nächste Schritte
1. **Backend IP-Anonymisierung (URGENT):** Details + Code-Snippets in `HANDOFF-ANALYTICS-IP.md`. Zieldatum: 24–48h.
2. **Vercel-Deploy validieren:** Website live nach Merge überprüfen (IndustryFocus-Cards, Tracking).
3. **GBP-Beiträge:** 4 fertige Beiträge 1x/Woche posten (Status-Signal für Google).
4. **Infografiken:** Mahnwesen, E-Rechnungspflicht, Arbeitszeiterfassung (Umlaute garantiert).
5. **Domain-Autorität:** LinkedIn-Profil auf dynvon.com, GSC Indexierung, externe Backlinks.
6. **Blog-Longtails:** 3–5 fokussierte Posts (Zeiterfassung, Rechnungserstellung, etc.).
7. **Weitere Branchen:** Steuerberater, Onlineshops evaluieren; `/steuerberater` analog `/reinigung`.

## Wichtige Entscheidungen / Konventionen
- **"Ich" vs. "Wir":** Solo-Freelancer bleibt "Ich" überall (persönliches Portrait = USP). Agenturen schreiben "wir".
- **IndustryFocus-Sektion:** neue Komponente (Home: Services + IndustryFocus + CaseStudies), 3 Cards ohne Stats (nicht aussagekräftig).
- **Nav-Strategie:** aktuell: direkter Link "Reinigung" (bei 2+ Branchen später Dropdown).
- **Hero-Pattern /reinigung:** `<Thema> in <Zeit> statt <längere Zeit>`, 3 Stats, CTA.
- **Topic-Chooser:** Toggle "Angebote" ↔ "Buchhaltung", immer DE.
- **ProposalFlowchart /reinigung:** `forceLocale="de"` (keine Sprachänderung).
- **Sprache:** persistiert via LanguageContext, DE-first überall, EN hinzuklickbar.
- **Datenschutz-Anforderung:** Alle Tracking-Scripts korrekt dokumentiert (Consent oder ausdrückliche Rezension); fehlende/falsche Dokumentation ist abmahnfähig.
- **IP-Anonymisierung:** cookieless Tracking mit sessionStorage-ID + anonymisierter IP (letztes Oktett=0 ODER SHA256); Rechtsgrundlage Art. 6 (1) lit. f DSGVO. Kein Cookie-Banner nötig.
- **Stop-Hook:** dokumentiert Projektstand automatisch, committet + pusht PROJEKTKONTEXT.md (nur diese Datei).
- **BRAND.md:** zentral für Design-Tokens, Komponenten-Konventionen, Voice & Tone.
- **PITCH-BUCHHALTUNG.md:** Sales-Deck-Dokumentation (17 Folien).
- **SEO-Standards:** `<html lang="de">`, strukturierte Daten (JSON-LD LocalBusiness), Title 50-60 Zeichen, GSC, Cloudflare DNS.
- **Google Business Profil:** 5/5 Sterne, Beiträge 1x/Wo (Value-First, Infografiken, Direktlink-CTA).
- **AI-Bilder:** Canva/Code-Rendering bevorzugt (garantierte Umlaute/Fachbegriffe).
- **Domain-Autorität:** externe Backlinks, BLP, GBP-Traffic — Google-Cache-Lag 1–4 Wochen normal.
- **Branchen-Roadmap:** Steuerberater, Onlineshops höchstpassend (hoher Admin-Overhead, Python/API-Affinity); Zeitarbeit, Fitnessstudios, Immomakler zweite Reihe.
