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
1. `7eedf72` docs: add PITCH-BUCHHALTUNG.md — sales deck outline
2. `1ecdbe8` chore: auto-update PROJEKTKONTEXT.md
3. `a156f46` chore: auto-update PROJEKTKONTEXT.md
4. `3f8f976` Merge remote-tracking branch 'origin/main' into claude/review-project-status-ZBd2O
5. `27a2eb7` chore: auto-update PROJEKTKONTEXT.md
6. `502be80` chore: auto-update PROJEKTKONTEXT.md
7. `ea94e66` docs: add BRAND.md — design tokens, components, voice & tone
8. `3dbfd5a` chore: auto-update PROJEKTKONTEXT.md
9. `3207d3f` chore: auto-update PROJEKTKONTEXT.md
10. `b4fca82` Reinigung: Topic-Chooser (Angebote vs Buchhaltung) (#3)

## Aktuell in Arbeit
- **Task:** PITCH-BUCHHALTUNG.md erstellt (17 Folien: Cover → Wer ich bin → Problem → Kosten → Vision → 3 Systeme → Fallstudie → Ergebnisse → Integration → Prozess → Preise → Warum-ich → CTA → FAQ → Demo + 2 Backup-Slides) mit Titel, Inhalt, Speaker Notes pro Folie.
- **Nächstes:** PITCH-BUCHHALTUNG.md auf `main` mergen für curl-Download-Zugriff.

## Offene Punkte / nächste Schritte
- PITCH-BUCHHALTUNG.md auf `main` mergen und via Raw GitHub URL bereitstellen
- Topic-Chooser + ProposalFlowchart auf `/reinigung` verifizieren (Mobile + Desktop)
- Repository-Dokumentation (README, Contributing Guide) falls nötig
- Deploy-Status und Live-Performance der neuen Features überprüfen

## Wichtige Entscheidungen / Konventionen
- Hero-Pattern auf `/reinigung`: knappe Headline nach Schema `<Thema> in <Zeit> statt <längere Zeit>`, gefolgt von Subtitle + 3 Stats + CTA
- Topic-Chooser: Toggle zwischen "Angebote" (Incoming Invoices) und "Buchhaltung" (Outgoing) mit visuellen Unterschieden
- ProposalFlowchart auf `/reinigung` immer DE (`forceLocale="de"`)
- Sprache persistiert über Seitenwechsel via LanguageContext
- Stop-Hook dokumentiert Projekt-Stand automatisch — committet und pusht PROJEKTKONTEXT.md am Ende jedes Turns
- BRAND.md zentral für Design-Tokens, Komponenten-Konventionen und Voice & Tone
- PITCH-BUCHHALTUNG.md ist zentrale Sales-Deck-Dokumentation (Struktur: Cover → Wer ich bin → Problem → 3 Systeme → Fallstudie → Integration → Preise → CTA → FAQ)
