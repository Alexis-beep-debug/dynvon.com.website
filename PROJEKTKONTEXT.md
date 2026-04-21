# Projektkontext — dynvon.com.website

> Diese Datei wird automatisch am Ende jedes Claude-Turns aktualisiert
> (Stop-Hook in `.claude/settings.local.json`). Hier landet der aktuelle
> Projektstand, damit bei Kontextverlust (neue Session, Auto-Compact)
> immer klar ist, wo wir stehen.

## Stand
- **Datum:** 2026-04-21
- **Branch:** `main` (remote merged)
- **Working Tree:** clean

## Projekt-Basics
- **Stack:** Next.js 16.2.1 + React 19.2 + Tailwind v4, TypeScript
- **Zweck:** Firmen-/Landingpage für dynvon (Business Process Automation, Alexis Bethke-Pittadakis, Nürnberg)
- **Routen:**
  - `/` — Home (Hero, Services, About, CaseStudies, Contact)
  - `/reinigung` — Kampagnen-Landingpage für Gebäudereinigungsunternehmen (fokussiert auf Buchhaltung + Topic-Chooser)
  - `/blog` + `/blog/[slug]` — Blog (Daten in `src/lib/blogData.ts`)
  - `/impressum`, `/datenschutz` — Rechtliches
- **i18n:** DE/EN via `src/lib/LanguageContext` + `src/lib/i18n.ts`; persistiert über Seitenwechsel
- **Wichtig (AGENTS.md):** Next.js 16 hat Breaking Changes ggü. älteren Versionen — vor Code-Änderungen in `node_modules/next/dist/docs/` nachsehen

## Letzte Arbeit (neueste 10 Commits)
1. `6d779a1` Merge remote-tracking branch 'origin/main' into claude/review-project-status-ZBd2O
2. `18b341c` feat(seo): DE-first metadata, /reinigung-spezifische SEO, JSON-LD, sitemap, OG-Images
3. `25c263f` chore: auto-update PROJEKTKONTEXT.md
4. `f58e706` chore: auto-update PROJEKTKONTEXT.md
5. `8368ba6` docs: add PITCH-BUCHHALTUNG.md (#5)
6. `4a836ee` Merge remote-tracking branch 'origin/main' into claude/review-project-status-ZBd2O
7. `da5adfa` chore: auto-update PROJEKTKONTEXT.md
8. `7eedf72` docs: add PITCH-BUCHHALTUNG.md — sales deck outline
9. `1ecdbe8` chore: auto-update PROJEKTKONTEXT.md
10. `a156f46` chore: auto-update PROJEKTKONTEXT.md

## Aktuell in Arbeit
- **Task:** SEO-Fixes komplett implementiert und gemergt — PR `be09ef5` merged nach `main`. Vercel deployt jetzt. Post-Deploy-Tasks: Google Search Console verifizieren, sitemap.xml einreichen, Rich-Results prüfen
- **Status:** Warten auf Deploy; danach optional: Keyword-Optimierung (Punkt 6 des Plans — gezielte Keywords wie "Gebäudereinigung", "Nürnberg" im Body-Text von `/reinigung`)

## Offene Punkte / nächste Schritte
1. **Google Search Console:** Property verifizieren, `sitemap.xml` einreichen, Neu-Indexierung für `/` und `/reinigung` anfordern
2. **Rich-Results-Test:** https://search.google.com/test/rich-results → `/reinigung` eingeben, Service + ProfessionalService prüfen
3. **Social-Preview:** https://www.opengraph.xyz/ → `/reinigung` eingeben, OG-Image muss rendern
4. **Optional — Punkt 6:** Body-Text H1/H2 von `/reinigung` mit Keywords "Gebäudereinigung", "Nürnberg", konkrete Service-Begriffe erweitern
5. **Topic-Chooser + ProposalFlowchart auf `/reinigung` testen** (Mobile + Desktop nach Deploy)

## Wichtige Entscheidungen / Konventionen
- Hero-Pattern auf `/reinigung`: knappe Headline nach Schema `<Thema> in <Zeit> statt <längere Zeit>`, gefolgt von Subtitle + 3 Stats + CTA
- Topic-Chooser: Toggle zwischen "Angebote" (Incoming Invoices) und "Buchhaltung" (Outgoing) mit visuellen Unterschieden
- ProposalFlowchart auf `/reinigung` immer DE (`forceLocale="de"`)
- Sprache persistiert über Seitenwechsel via LanguageContext
- Stop-Hook dokumentiert Projekt-Stand automatisch — committet und pusht PROJEKTKONTEXT.md am Ende jedes Turns
- BRAND.md zentral für Design-Tokens, Komponenten-Konventionen und Voice & Tone
- PITCH-BUCHHALTUNG.md zentrale Sales-Deck-Dokumentation (17 Folien: Cover → Wer ich bin → Problem → Kosten → Vision → 3 Systeme → Fallstudie → Integration → Preise → Warum-ich → CTA → FAQ + Backup-Slides)
- `<html lang="de">` mit DE-first Metadata in `layout.tsx` für korrekte Google-Preview und SEO
- Strukturierte Daten (JSON-LD LocalBusiness + Service) für reichhaltigere Google-Kacheln und lokale Suche
