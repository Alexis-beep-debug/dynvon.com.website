# Projektkontext — dynvon.com.website

> Diese Datei wird automatisch am Ende jedes Claude-Turns aktualisiert
> (Stop-Hook in `.claude/settings.local.json`). Hier landet der aktuelle
> Projektstand, damit bei Kontextverlust (neue Session, Auto-Compact)
> immer klar ist, wo wir stehen.

## Stand
- **Datum:** 2026-04-20
- **Branch:** `claude/review-project-status-ZBd2O`
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
1. `502be80` chore: auto-update PROJEKTKONTEXT.md
2. `ea94e66` docs: add BRAND.md — design tokens, components, voice & tone
3. `3dbfd5a` chore: auto-update PROJEKTKONTEXT.md
4. `3207d3f` chore: auto-update PROJEKTKONTEXT.md
5. `97d7405` Merge remote-tracking branch 'origin/main' into claude/review-project-status-ZBd2O
6. `34bb78d` chore: auto-update PROJEKTKONTEXT.md
7. `1294c72` feat(reinigung): add topic chooser (Angebote vs Buchhaltung)
8. `7b70091` chore: auto-update PROJEKTKONTEXT.md
9. `a1e13f1` Reinigung-Hero auf Buchhaltung + Projektkontext-Tracking (#2)
10. `47e5457` chore: auto-update PROJEKTKONTEXT.md

## Aktuell in Arbeit
- **Task:** BRAND.md erstellt + gepusht (`ea94e66`), Stop-Hook in `settings.local.json` konfiguriert; Working Tree clean
- **Nächster Schritt:** Frage offensichtlich ob BRAND.md auf `main` gemergt werden soll oder weitere Arbeit ansteht

## Offene Punkte / nächste Schritte
- BRAND.md auf `main` mergen und Vercel-Deployment triggern (stabilere GitHub-URLs)
- Topic-Chooser live verifizieren (Mobile + Desktop, beide Tracks, CTA-Links)
- Ggf. weitere Kampagnen-Varianten oder UI-Optimierungen für `/reinigung` basierend auf Live-Tests

## Wichtige Entscheidungen / Konventionen
- Hero-Pattern auf `/reinigung`: knappe Headline nach Schema `<Thema> in <Zeit> statt <längere Zeit>`, gefolgt von Subtitle + 3 Stats + CTA
- Topic-Chooser: Toggle zwischen "Angebote" (Incoming Invoices) und "Buchhaltung" (Outgoing) mit visuellen Unterschieden
- ProposalFlowchart auf `/reinigung` immer DE (`forceLocale="de"`)
- Sprache persistiert über Seitenwechsel via LanguageContext
- Stop-Hook dokumentiert Projekt-Stand automatisch — committet und pusht PROJEKTKONTEXT.md am Ende jedes Turns
