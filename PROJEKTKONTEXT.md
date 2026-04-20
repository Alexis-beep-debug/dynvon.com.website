# Projektkontext — dynvon.com.website

> Diese Datei wird automatisch am Ende jedes Claude-Turns aktualisiert
> (Stop-Hook in `.claude/settings.local.json`). Hier landet der aktuelle
> Projektstand, damit bei Kontextverlust (neue Session, Auto-Compact)
> immer klar ist, wo wir stehen.

## Stand
- **Datum:** 2026-04-21
- **Branch:** `claude/review-project-status-ZBd2O`
- **Working Tree:** clean

## Projekt-Basics
- **Stack:** Next.js 16.2.1 + React 19.2 + Tailwind v4, TypeScript
- **Zweck:** Firmen-/Landingpage für dynvon (Business Process Automation, Alexis Bethke-Pittadakis, Nürnberg)
- **Routen:**
  - `/` — Home (Hero, Services, About, CaseStudies, Contact)
  - `/reinigung` — Kampagnen-Landingpage für Gebäudereinigungsunternehmen (jetzt fokussiert auf Buchhaltung)
  - `/blog` + `/blog/[slug]` — Blog (Daten in `src/lib/blogData.ts`)
  - `/impressum`, `/datenschutz` — Rechtliches
- **i18n:** DE/EN via `src/lib/LanguageContext` + `src/lib/i18n.ts`; persistiert über Seitenwechsel
- **Wichtig (AGENTS.md):** Next.js 16 hat Breaking Changes ggü. älteren Versionen — vor Code-Änderungen in `node_modules/next/dist/docs/` nachsehen

## Letzte Arbeit (neueste 10 Commits)
1. `47e5457` chore: auto-update PROJEKTKONTEXT.md
2. `cce762b` chore: update PROJEKTKONTEXT.md
3. `c978030` chore: update PROJEKTKONTEXT.md via stop hook
4. `1bdbe92` chore: update PROJEKTKONTEXT.md via stop hook
5. `60d7e34` feat: refocus /reinigung hero to Buchhaltung + add project context file
6. `8a03c01` fix: update booking link to new Google Calendar URL
7. `c58c895` fix: Hero text overflow on mobile (German)
8. `1284716` fix: force ProposalFlowchart to German on /reinigung page
9. `1cd3f30` feat: add signature logo (triangle icon + dynvon wordmark)
10. `804aaf0` feat: switch to triangle logo (dynvon branded)

## Aktuell in Arbeit
- Task: Buchhaltungs-Hero auf `/reinigung` fertiggestellt und gemergt auf `main`.
- Status: Projekt sauber, alle Changes committed. Vercel-Deploy läuft.

## Offene Punkte / nächste Schritte
- Vercel-Deployment auf `/reinigung` überprüfen (sollte Live-Buchhaltungs-Hero zeigen).
- Ggf. weitere Kampagnen-Varianten oder Feature-Erweiterungen für `/reinigung`.

## Wichtige Entscheidungen / Konventionen
- Hero-Pattern auf `/reinigung`: knappe Headline nach Schema `<Thema> in <Zeit> statt <längere Zeit>`, gefolgt von Subtitle + 3 Stats + CTA
- ProposalFlowchart auf `/reinigung` immer DE (`forceLocale="de"`)
- Sprache persistiert über Seitenwechsel via LanguageContext
- Stop-Hook dokumentiert Projekt-Stand automatisch — committet und pusht PROJEKTKONTEXT.md am Ende jedes Turns
