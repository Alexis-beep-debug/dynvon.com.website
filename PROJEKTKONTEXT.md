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
1. `1294c72` feat(reinigung): add topic chooser (Angebote vs Buchhaltung)
2. `7b70091` chore: auto-update PROJEKTKONTEXT.md
3. `47e5457` chore: auto-update PROJEKTKONTEXT.md
4. `cce762b` chore: update PROJEKTKONTEXT.md
5. `c978030` chore: update PROJEKTKONTEXT.md via stop hook
6. `1bdbe92` chore: update PROJEKTKONTEXT.md via stop hook
7. `60d7e34` feat: refocus /reinigung hero to Buchhaltung + add project context file
8. `8a03c01` fix: update booking link to new Google Calendar URL
9. `c58c895` fix: Hero text overflow on mobile (German)
10. `1284716` fix: force ProposalFlowchart to German on /reinigung page

## Aktuell in Arbeit
- Task: Topic-Chooser (Angebote vs Buchhaltung) für `/reinigung` implementiert + gemergt auf `main`.
- Status: Projekt sauber, PR #3 wartet auf Merge (keine CI-Checks konfiguriert).
- Next: PR #3 mergen, damit Topic-Chooser live geht.

## Offene Punkte / nächste Schritte
- PR #3 mergen (topic-chooser mit Angebote/Buchhaltung-Split).
- Vercel-Deployment prüfen nach Merge.
- Ggf. weitere Kampagnen-Varianten oder UI-Optimierungen für `/reinigung`.

## Wichtige Entscheidungen / Konventionen
- Hero-Pattern auf `/reinigung`: knappe Headline nach Schema `<Thema> in <Zeit> statt <längere Zeit>`, gefolgt von Subtitle + 3 Stats + CTA
- Topic-Chooser: Toggle zwischen "Angebote" (Incoming Invoices) und "Buchhaltung" (Outgoing) mit visuellen Unterschieden
- ProposalFlowchart auf `/reinigung` immer DE (`forceLocale="de"`)
- Sprache persistiert über Seitenwechsel via LanguageContext
- Stop-Hook dokumentiert Projekt-Stand automatisch — committet und pusht PROJEKTKONTEXT.md am Ende jedes Turns
