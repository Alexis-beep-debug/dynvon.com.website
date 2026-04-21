# Projektkontext — dynvon.com.website

> Diese Datei wird automatisch am Ende jedes Claude-Turns aktualisiert
> (Stop-Hook in `.claude/settings.local.json`). Hier landet der aktuelle
> Projektstand, damit bei Kontextverlust (neue Session, Auto-Compact)
> immer klar ist, wo wir stehen.

## Stand
- **Datum:** 2026-04-21
- **Branch:** `main`
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
1. `3f80a29` chore: auto-update PROJEKTKONTEXT.md
2. `938e1c5` chore: auto-update PROJEKTKONTEXT.md
3. `e06f5f5` chore: auto-update PROJEKTKONTEXT.md
4. `6d779a1` Merge remote-tracking branch 'origin/main' into claude/review-project-status-ZBd2O
5. `18b341c` feat(seo): DE-first metadata, /reinigung-spezifische SEO, JSON-LD, sitemap, OG-Images
6. `25c263f` chore: auto-update PROJEKTKONTEXT.md
7. `f58e706` chore: auto-update PROJEKTKONTEXT.md
8. `8368ba6` docs: add PITCH-BUCHHALTUNG.md (#5)
9. `4a836ee` Merge remote-tracking branch 'origin/main' into claude/review-project-status-ZBd2O
10. `da5adfa` chore: auto-update PROJEKTKONTEXT.md

## Aktuell in Arbeit
- **Task:** Google Search Console Verifizierung & Sitemap-Indexierung durchstarten
- **Session-Kontext:** Domain über Cloudflare Auto-Flow verifiziert; nächste Schritte: (1) Sitemap (`sitemap.xml`) einreichen, (2) Startseite indexieren, (3) `/reinigung` indexieren

## Offene Punkte / nächste Schritte
1. **Google Search Console:** Sitemap über GSC-Dashboard einreichen (`https://www.dynvon.com/sitemap.xml`), dann Indexierung für `/` und `/reinigung` anfordern
2. **Rich-Results-Test:** https://search.google.com/test/rich-results → `/reinigung` prüfen (Service + ProfessionalService)
3. **Social-Preview:** https://www.opengraph.xyz/ → `/reinigung` OG-Image-Rendering testen
4. **Optional:** Body-Text H1/H2 von `/reinigung` mit Keywords "Gebäudereinigung", "Nürnberg" erweitern
5. **Topic-Chooser + ProposalFlowchart auf `/reinigung`** nach Deploy testen (Mobile + Desktop)

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
- Google Search Console: Domain-Verifizierung bevorzugt (TXT-Record) für kompletten Scope aller Subdomains/Varianten
- Cloudflare API-Integration für automatisierte DNS-Verwaltung bei GSC-Verifizierung
