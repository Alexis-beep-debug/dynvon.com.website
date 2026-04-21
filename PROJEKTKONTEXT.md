# Projektkontext — dynvon.com.website

> Diese Datei wird automatisch am Ende jedes Claude-Turns aktualisiert
> (Stop-Hook in `.claude/settings.local.json`). Hier landet der aktuelle
> Projektstand, damit bei Kontextverlust (neue Session, Auto-Compact)
> immer klar ist, wo wir stehen.

## Stand
- **Datum:** 2026-04-21
- **Branch:** `claude/review-project-status-ZBd2O` (lokal) / `main` (remote)
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
1. `f58e706` chore: auto-update PROJEKTKONTEXT.md
2. `4a836ee` Merge remote-tracking branch 'origin/main' into claude/review-project-status-ZBd2O
3. `da5adfa` chore: auto-update PROJEKTKONTEXT.md
4. `7eedf72` docs: add PITCH-BUCHHALTUNG.md — sales deck outline
5. `1ecdbe8` chore: auto-update PROJEKTKONTEXT.md
6. `a156f46` chore: auto-update PROJEKTKONTEXT.md
7. `1a211a8` docs: add BRAND.md (#4)
8. `3f8f976` Merge remote-tracking branch 'origin/main' into claude/review-project-status-ZBd2O
9. `27a2eb7` chore: auto-update PROJEKTKONTEXT.md
10. `502be80` chore: auto-update PROJEKTKONTEXT.md

## Aktuell in Arbeit
- **Task:** SEO-Analyse & Google-Preview-Fix für `/reinigung` — identifiziert: `lang="en"`, EN-first Metadata, fehlende `sitemap.ts`, fehlende `robots.ts`, keine JSON-LD
- **Status:** Konkreter 6-Punkte-Fix-Plan erstellt (lang→de, eigenes `/reinigung/layout.tsx`, sitemap+robots, JSON-LD, OG-Image, Keywords)

## Offene Punkte / nächste Schritte
1. **SEO-Fixes umsetzen (Punkte 1–5):** `lang="de"` in `layout.tsx`, `/reinigung/layout.tsx` mit gezielten Metadaten, `sitemap.ts` + `robots.ts`, JSON-LD (LocalBusiness + Service), OG-Image
2. **Keyword-Optimierung (Punkt 6):** Body-Text H1/H2, alt-Tags, sichtbare Keywords — koordiniert umsetzen, keine Stopfung
3. **Topic-Chooser + ProposalFlowchart auf `/reinigung` testen** (Mobile + Desktop)
4. **Deploy-Status und Live-Performance überprüfen**

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
