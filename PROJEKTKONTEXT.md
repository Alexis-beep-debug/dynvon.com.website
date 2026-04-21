# Projektkontext — dynvon.com.website

> Diese Datei wird automatisch am Ende jedes Claude-Turns aktualisiert
> (Stop-Hook in `.claude/settings.local.json`). Hier landet der aktuelle
> Projektstand, damit bei Kontextverlust (neue Session, Auto-Compact)
> immer klar ist, wo wir stehen.

## Stand
- **Datum:** 2025-04-21
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
1. `b3b31cc` fix: remove 'z.B. Hausverwaltungen' from placeholder (now own card)
2. `ffb7185` Merge remote-tracking branch 'origin/main' into claude/review-project-status-ZBd2O
3. `c8dabb3` feat(industry-focus): Hausverwaltungen als eigene Card hinzufügen
4. `c6aa440` chore: auto-update PROJEKTKONTEXT.md
5. `81ebd44` feat(industry-focus): Hausverwaltungen als Beispiel (#13)
6. `04462fc` Merge remote-tracking branch 'origin/main' in branch
7. `1c89e22` feat(industry-focus): Hausverwaltungen als Beispiel-Branche in Placeholder-Card
8. `cd2162c` chore: auto-update PROJEKTKONTEXT.md
9. `cf1eb02` fix(industry-focus): remove explanatory text from placeholder card (#12)
10. `83a0515` fix: resolve merge conflict markers in IndustryFocus.tsx

## Aktuell in Arbeit
- **Letzter Task:** IndustryFocus mit 3 Cards: (1) Gebäudereinigungsunternehmen (10h/100%/0), (2) Hausverwaltungen (6h/100%/0 Platzhalter), (3) Ihre Branche fehlt? Mergebase `ffb7185` gegen main. Vercel-Deploy live.
- **Uncommitted:** keine (working tree clean).

## Offene Punkte / nächste Schritte
1. **Vercel-Deploy validieren:** 3 Cards im IndustryFocus (Reinigung, Hausverwaltung, Placeholder) live überprüfen.
2. **GBP-Beiträge posten:** 4 fertige Beiträge 1x/Woche hochladen (Status-Signal für Google-Cache-Übergang).
3. **Infografiken:** Mahnwesen, E-Rechnungspflicht, Arbeitszeiterfassung in Canva/Code (Umlaute garantiert).
4. **GBP-Beiträge 5–7:** (1) Einsatzplanung 10+ MA, (2) Subunternehmer-Prüfung, (3) Tariftreue & Lohnzuschläge.
5. **Domain-Autorität:** LinkedIn-Profil-URL auf dynvon.com prüfen, wöchentlich GSC "Indexierung beantragen", externe Backlinks.
6. **Conversion:** GA4 + Google Calendar-Events für `/reinigung`-Leads tracken.
7. **Blog-Longtails:** 3–5 fokussierte Posts (Zeiterfassung Handwerk, Rechnungserstellung, etc.).
8. **Weitere Branchen-Use-Cases:** Steuerberater, Onlineshops evaluieren (hoher Automation-Nutzen, KMU-affin); ggf. `/steuerberater` etc. analog `/reinigung` ausbauen.

## Wichtige Entscheidungen / Konventionen
- **"Ich" vs. "Wir":** Solo-Freelancer bleibt "Ich" überall (persönliches Portrait, direkter Draht = USP). Agenturen schreiben alle "wir" — dein "ich" ist Differenzierung.
- **IndustryFocus-Sektion:** neue Komponente zwischen Services und CaseStudies auf Home, thematisch klar, erweiterbar, SEO-friendly (H2 + strukturierter Content). 3 Cards: Gebäudereinigung (Live-Stats), Hausverwaltungen (Platzhalter), Placeholder für weitere Branchen.
- **Nav-Strategie:** (aktuell) ein Branche → direkter Link "Reinigung" (nicht Dropdown). Bei 2+ Branchen später zu "Branchen"-Dropdown wechseln.
- **Hero-Pattern auf /reinigung:** Headline Schema `<Thema> in <Zeit> statt <längere Zeit>`, 3 Stats (10h / 100% / 0), CTA.
- **Topic-Chooser:** Toggle zwischen "Angebote" (Incoming) und "Buchhaltung" (Outgoing) mit visuellen Unterschieden, immer DE.
- **ProposalFlowchart auf /reinigung:** `forceLocale="de"` (keine Sprachänderung).
- **Sprache:** persistiert via LanguageContext, DE-first Standard überall, EN hinzuklickbar.
- **Stop-Hook:** dokumentiert Projektstand automatisch, committet + pusht PROJEKTKONTEXT.md am Ende jedes Turns (nur diese Datei).
- **BRAND.md:** zentral für Design-Tokens, Komponenten-Konventionen, Voice & Tone.
- **PITCH-BUCHHALTUNG.md:** Sales-Deck-Dokumentation (17 Folien: Cover → Problem → Kosten → Vision → 3 Systeme → Fallstudie → Integration → Preise → CTA → FAQ).
- **SEO-Standards:** `<html lang="de">`, strukturierte Daten (JSON-LD LocalBusiness + Service), Title 50-60 Zeichen, GSC Domain-Verifizierung, Cloudflare API für DNS.
- **Google Business Profil:** 5/5 Sterne, Beiträge 1x/Wo (Value-First, Infografiken, Direktlink-CTA).
- **AI-Bilder:** Canva/Code-Rendering bevorzugt (garantierte Umlaute/Fachbegriffe).
- **Domain-Autorität:** externe Backlinks (Branchenverzeichnisse), BLP, GBP-Traffic — Google-Cache-Lag 1–4 Wochen normal.
- **Branchen-Roadmap:** Steuerberater, Onlineshops sind höchstpassend (hoher Admin-Overhead, Python/API-Affinity, KMU-Größe); Zeitarbeit, Fitnessstudios, Immomakler zweite Reihe.
