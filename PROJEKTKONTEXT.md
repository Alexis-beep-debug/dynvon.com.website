# Projektkontext — dynvon.com.website

> Diese Datei wird automatisch am Ende jedes Claude-Turns aktualisiert
> (Stop-Hook in `.claude/settings.local.json`). Hier landet der aktuelle
> Projektstand, damit bei Kontextverlust (neue Session, Auto-Compact)
> immer klar ist, wo wir stehen.

## Stand
- **Datum:** 2026-04-21
- **Branch:** `claude/review-project-status-ZBd2O`
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
1. `e166f42` chore: auto-update PROJEKTKONTEXT.md
2. `93e7d1e` chore: auto-update PROJEKTKONTEXT.md
3. `40f62f5` fix: remove duplicate Hausverwaltungen entry from merge
4. `5d25b90` Merge remote-tracking branch 'origin/main' into claude/review-project-status-ZBd2O
5. `e617086` fix(industry-focus): remove stats from cards (nicht aussagekräftig)
6. `df0afcb` chore: auto-update PROJEKTKONTEXT.md
7. `975ee9b` feat(industry-focus): Hausverwaltungen als eigene Card (#14)
8. `b3b31cc` fix: remove 'z.B. Hausverwaltungen' from placeholder (now own card)
9. `ffb7185` Merge remote-tracking branch 'origin/main' into claude/review-project-status-ZBd2O
10. `c8dabb3` feat(industry-focus): Hausverwaltungen als eigene Card hinzufügen

## Aktuell in Arbeit
- **Task:** Datenschutz & Analytics-Audit mit IP-Anonymisierung. Tracking-Skript (`https://email-outreach-dynvon-production.up.railway.app/analytics/script.js`) auf jeder Seite; Datenschutzerklärung fehlerhaft (behauptet "keine Cookies", dokumentiert Calendly statt Google Calendar). Entscheidung: **Option 1 — IP anonymisieren + Datenschutz erweitern** (konservativ & rechtlich sauber). Backend-Fix steht aus (nicht hier, sondern in `email-outreach-dynvon-production`).
- **Nächste Schritte:** (1) Datenschutz reparieren: Abschnitt 4 Reichweitenanmessung + ehrliche IP-Beschreibung, Abschnitt 5 Google Calendar, (2) Opt-out-Hinweis hinzufügen (`notrack`-Flag), (3) Backend-Snippet für IP-Anonymisierung liefern.
- **Uncommitted:** keine (working tree clean).

## Offene Punkte / nächste Schritte
1. **Datenschutz-Rectification (URGENT):** Abschnitte 4–5 reparieren: Reichweitenanmessung korrekt dokumentieren, Google Calendar statt Calendly, Opt-out-Anleitung hinzufügen.
2. **IP-Anonymisierung Backend:** SHA256-Hash oder letztes Oktett=0 im Analytics-Backend implementieren (Zieldatum: 24–48h nach heute).
3. **`layout.tsx` Tracking-Skript:** Kurzzeitig auskommentieren oder mit `notrack`-Flag vom localStorage-Prüfung abhängig machen (nach Backend-Fix wieder einschalten).
4. **Vercel-Deploy validieren:** 3 Cards im IndustryFocus live überprüfen (Reinigung, Hausverwaltung, Placeholder).
5. **GBP-Beiträge:** 4 fertige Beiträge 1x/Woche posten (Status-Signal für Google).
6. **Infografiken:** Mahnwesen, E-Rechnungspflicht, Arbeitszeiterfassung (Umlaute garantiert).
7. **Domain-Autorität:** LinkedIn-Profil-URL auf dynvon.com, GSC Indexierungsanfragen, externe Backlinks.
8. **Blog-Longtails:** 3–5 fokussierte Posts (Zeiterfassung Handwerk, Rechnungserstellung, etc.).
9. **Weitere Branchen:** Steuerberater, Onlineshops evaluieren (hoher Automation-Nutzen); `/steuerberater` analog `/reinigung`.

## Wichtige Entscheidungen / Konventionen
- **"Ich" vs. "Wir":** Solo-Freelancer bleibt "Ich" überall (persönliches Portrait, direkter Draht = USP). Agenturen schreiben alle "wir" — dein "ich" ist Differenzierung.
- **IndustryFocus-Sektion:** neue Komponente zwischen Services und CaseStudies auf Home, thematisch klar, erweiterbar, SEO-friendly (H2 + strukturierter Content). 3 Cards: Gebäudereinigung (ohne Stats), Hausverwaltungen (ohne Stats), Placeholder für weitere Branchen.
- **Nav-Strategie:** (aktuell) ein Branche → direkter Link "Reinigung" (nicht Dropdown). Bei 2+ Branchen später zu "Branchen"-Dropdown wechseln.
- **Hero-Pattern auf /reinigung:** Headline Schema `<Thema> in <Zeit> statt <längere Zeit>`, 3 Stats (10h / 100% / 0), CTA.
- **Topic-Chooser:** Toggle zwischen "Angebote" (Incoming) und "Buchhaltung" (Outgoing) mit visuellen Unterschieden, immer DE.
- **ProposalFlowchart auf /reinigung:** `forceLocale="de"` (keine Sprachänderung).
- **Sprache:** persistiert via LanguageContext, DE-first Standard überall, EN hinzuklickbar.
- **Datenschutz-Anforderung:** Alle Tracking-Scripts müssen in Datenschutzerklärung korrekt dokumentiert sein (Consent oder ausdrückliche Rezension erforderlich); fehlende/falsche Dokumentation ist abmahnfähig.
- **IP-Anonymisierung:** cookieless Tracking mit sessionStorage-ID + anonymisierter IP (letztes Oktett=0 ODER SHA256-Hash); Rechtsgrundlage Art. 6 (1) lit. f DSGVO (berechtigtes Interesse). Kein Cookie-Banner nötig nach Anonymisierung.
- **Stop-Hook:** dokumentiert Projektstand automatisch, committet + pusht PROJEKTKONTEXT.md am Ende jedes Turns (nur diese Datei).
- **BRAND.md:** zentral für Design-Tokens, Komponenten-Konventionen, Voice & Tone.
- **PITCH-BUCHHALTUNG.md:** Sales-Deck-Dokumentation (17 Folien: Cover → Problem → Kosten → Vision → 3 Systeme → Fallstudie → Integration → Preise → CTA → FAQ).
- **SEO-Standards:** `<html lang="de">`, strukturierte Daten (JSON-LD LocalBusiness + Service), Title 50-60 Zeichen, GSC Domain-Verifizierung, Cloudflare API für DNS.
- **Google Business Profil:** 5/5 Sterne, Beiträge 1x/Wo (Value-First, Infografiken, Direktlink-CTA).
- **AI-Bilder:** Canva/Code-Rendering bevorzugt (garantierte Umlaute/Fachbegriffe).
- **Domain-Autorität:** externe Backlinks (Branchenverzeichnisse), BLP, GBP-Traffic — Google-Cache-Lag 1–4 Wochen normal.
- **Branchen-Roadmap:** Steuerberater, Onlineshops sind höchstpassend (hoher Admin-Overhead, Python/API-Affinity, KMU-Größe); Zeitarbeit, Fitnessstudios, Immomakler zweite Reihe.
