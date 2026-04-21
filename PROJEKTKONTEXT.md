# Projektkontext — dynvon.com.website

> Diese Datei wird automatisch am Ende jedes Claude-Turns aktualisiert
> (Stop-Hook in `.claude/settings.local.json`). Hier landet der aktuelle
> Projektstand, damit bei Kontextverlust (neue Session, Auto-Compact)
> immer klar ist, wo wir stehen.

## Stand
- **Datum:** 2026-04-21
- **Branch:** `claude/review-project-status-ZBd2O` (clean)
- **Working Tree:** clean (no uncommitted changes)

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
1. `c16bb12` fix: resolve merge conflict markers in IndustryFocus.tsx
2. `110fd79` Merge remote-tracking branch 'origin/main' into claude/review-project-status-ZBd2O
3. `0b5eff4` fix: remove konkrete Branchen-Vorschläge aus IndustryFocus-Platzhalter
4. `d5b5023` chore: auto-update PROJEKTKONTEXT.md
5. `314f829` chore: auto-update PROJEKTKONTEXT.md
6. `25f01ad` feat: IndustryFocus-Sektion auf Startseite (#10)
7. `59bbcc7` Merge remote-tracking branch 'origin/main' into claude/review-project-status-ZBd2O
8. `ea8fbea` feat: add IndustryFocus-Sektion auf Startseite mit Link zu /reinigung
9. `a738042` chore: auto-update PROJEKTKONTEXT.md
10. `05bc88d` chore: auto-update PROJEKTKONTEXT.md

## Aktuell in Arbeit
- **Letzter Task:** IndustryFocus-Card ("Ihre Branche fehlt?") überarbeitet — offenere Formulierung ohne spezifische Branchen-Auflistung, gemergt in main (`34eb3b4`).
- **Uncommitted:** keine.

## Offene Punkte / nächste Schritte
1. **Vercel-Deploy validieren:** neue IndustryFocus-Sektion live auf dynvon.com überprüfen (PageRank-Transfer zu /reinigung).
2. **GBP-Beiträge posten:** 4 fertige Beiträge 1x/Woche hochladen (Status-Signal für Google-Cache-Übergang).
3. **Infografiken:** Mahnwesen, E-Rechnungspflicht, Arbeitszeiterfassung in Canva/Code (Umlaute garantiert).
4. **GBP-Beiträge 5–7:** (1) Einsatzplanung 10+ MA, (2) Subunternehmer-Prüfung, (3) Tariftreue & Lohnzuschläge.
5. **Domain-Autorität:** LinkedIn-Profil-URL auf dynvon.com prüfen, wöchentlich GSC "Indexierung beantragen", externe Backlinks.
6. **Conversion:** GA4 + Google Calendar-Events für `/reinigung`-Leads tracken.
7. **Blog-Longtails:** 3–5 fokussierte Posts (Zeiterfassung Handwerk, Rechnungserstellung, etc.).

## Wichtige Entscheidungen / Konventionen
- **"Ich" vs. "Wir":** Solo-Freelancer bleibt "Ich" überall (persönliches Portrait, direkter Draht = USP). Agenturen schreiben alle "wir" — dein "ich" ist Differenzierung.
- **IndustryFocus-Sektion:** neue Komponente zwischen Services und CaseStudies auf Home, thematisch klar, erweiterbar, SEO-friendly (H2 + strukturierter Content). Card ohne spezifische Branchen-Listenelemente.
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
