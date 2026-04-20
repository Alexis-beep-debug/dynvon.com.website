# Projektkontext — dynvon.com.website

> Diese Datei wird automatisch am Ende jedes Claude-Turns aktualisiert
> (Stop-Hook in `.claude/settings.local.json`). Hier landet der aktuelle
> Projektstand, damit bei Kontextverlust (neue Session, Auto-Compact)
> immer klar ist, wo wir stehen.

## Stand
- **Datum:** 2026-04-20
- **Branch:** `claude/review-project-status-ZBd2O`
- **Working Tree:** clean (keine uncommitted changes zum Initialzeitpunkt)

## Projekt-Basics
- **Stack:** Next.js 16.2.1 + React 19.2 + Tailwind v4, TypeScript
- **Zweck:** Firmen-/Landingpage für dynvon (Business Process Automation, Alexis Bethke-Pittadakis, Nürnberg)
- **Routen:**
  - `/` — Home (Hero, Services, About, CaseStudies, Contact)
  - `/reinigung` — Kampagnen-Landingpage für Gebäudereinigungsunternehmen
  - `/blog` + `/blog/[slug]` — Blog (Daten in `src/lib/blogData.ts`)
  - `/impressum`, `/datenschutz` — Rechtliches
- **i18n:** DE/EN via `src/lib/LanguageContext` + `src/lib/i18n.ts`; persistiert über Seitenwechsel
- **Wichtig (AGENTS.md):** Next.js 16 hat Breaking Changes ggü. älteren Versionen — vor Code-Änderungen in `node_modules/next/dist/docs/` nachsehen

## Letzte Arbeit (neueste 10 Commits)
1. `8a03c01` fix: update booking link to new Google Calendar URL
2. `c58c895` fix: Hero text overflow on mobile (German)
3. `1284716` fix: force ProposalFlowchart to German on /reinigung page
4. `1cd3f30` feat: add signature logo (triangle icon + dynvon wordmark)
5. `804aaf0` feat: switch to triangle logo (dynvon branded)
6. `77a22c3` feat: add logo JPEGs with white background for email signatures
7. `97cde56` feat: replace Vercel favicon with dynvon "d" icon
8. `8a9665f` feat: add dynvon logo files (SVG + PNG)
9. `e829794` feat: add analytics tracking script
10. `0ab5e60` perf: optimize profile image (616KB PNG → 21KB WebP)

## Aktuell in Arbeit
- Projektkontext-Datei + Stop-Hook eingerichtet, damit der Projektstand nie verloren geht.
- Reinigung-Hero: Fokus von "Angebote" auf "Buchhaltung" umgestellt (Nachfrage höher).

## Offene Punkte / nächste Schritte
- (keine notiert)

## Wichtige Entscheidungen / Konventionen
- Hero-Pattern auf `/reinigung`: knappe Headline nach Schema `<Thema> in <Zeit> statt <längere Zeit>`, gefolgt von Subtitle + 3 Stats + CTA "Kostenloses Gespräch buchen"
- ProposalFlowchart auf `/reinigung` immer DE (`forceLocale="de"`)
- Sprache persistiert über Seitenwechsel via LanguageContext
