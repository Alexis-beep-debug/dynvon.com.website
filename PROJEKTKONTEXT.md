# Projektkontext — dynvon.com.website

> Diese Datei wird automatisch am Ende jedes Claude-Turns aktualisiert
> (Stop-Hook in `.claude/settings.local.json`). Hier landet der aktuelle
> Projektstand, damit bei Kontextverlust (neue Session, Auto-Compact)
> immer klar ist, wo wir stehen.

## Stand
- **Datum:** 2025-04-20
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
1. `97d7405` Merge remote-tracking branch 'origin/main' into claude/review-project-status
2. `34bb78d` chore: auto-update PROJEKTKONTEXT.md
3. `1294c72` feat(reinigung): add topic chooser (Angebote vs Buchhaltung)
4. `7b70091` chore: auto-update PROJEKTKONTEXT.md
5. `a1e13f1` Reinigung-Hero auf Buchhaltung + Projektkontext-Tracking (#2)
6. `47e5457` chore: auto-update PROJEKTKONTEXT.md
7. `cce762b` chore: update PROJEKTKONTEXT.md
8. `c978030` chore: update PROJEKTKONTEXT.md via stop hook
9. `1bdbe92` chore: update PROJEKTKONTEXT.md via stop hook
10. `60d7e34` feat: refocus /reinigung hero to Buchhaltung + add project context file

## Aktuell in Arbeit
- Task: Topic-Chooser (Angebote vs Buchhaltung) für `/reinigung` implementiert und auf `main` gemergt.
- Status: Working Tree clean; Vercel-Deployment läuft.

## Offene Punkte / nächste Schritte
- Vercel-Deployment prüfen und Topic-Chooser live verifizieren.
- Ggf. weitere Kampagnen-Varianten oder UI-Optimierungen für `/reinigung`.

## Wichtige Entscheidungen / Konventionen
- Hero-Pattern auf `/reinigung`: knappe Headline nach Schema `<Thema> in <Zeit> statt <längere Zeit>`, gefolgt von Subtitle + 3 Stats + CTA
- Topic-Chooser: Toggle zwischen "Angebote" (Incoming Invoices) und "Buchhaltung" (Outgoing) mit visuellen Unterschieden
- ProposalFlowchart auf `/reinigung` immer DE (`forceLocale="de"`)
- Sprache persistiert über Seitenwechsel via LanguageContext
- Stop-Hook dokumentiert Projekt-Stand automatisch — committet und pusht PROJEKTKONTEXT.md am Ende jedes Turns
