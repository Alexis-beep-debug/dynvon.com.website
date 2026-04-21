# Projektkontext — dynvon.com.website

> Diese Datei wird automatisch am Ende jedes Claude-Turns aktualisiert
> (Stop-Hook in `.claude/settings.local.json`). Hier landet der aktuelle
> Projektstand, damit bei Kontextverlust (neue Session, Auto-Compact)
> immer klar ist, wo wir stehen.

## Stand
- **Datum:** 2026-04-21
- **Branch:** `claude/review-project-status-ZBd2O`
- **Working Tree:** clean (keine uncommitted changes)

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
1. `b755a4f` chore: auto-update PROJEKTKONTEXT.md
2. `cf3367a` chore: auto-update PROJEKTKONTEXT.md
3. `43113a0` chore: auto-update PROJEKTKONTEXT.md
4. `76983b8` chore: auto-update PROJEKTKONTEXT.md
5. `7e920b7` chore: auto-update PROJEKTKONTEXT.md
6. `41238b6` chore: auto-update PROJEKTKONTEXT.md
7. `7ab33d3` chore: auto-update PROJEKTKONTEXT.md
8. `f144168` chore: auto-update PROJEKTKONTEXT.md
9. `3f80a29` chore: auto-update PROJEKTKONTEXT.md
10. `938e1c5` chore: auto-update PROJEKTKONTEXT.md

## Aktuell in Arbeit
- **Task:** SEO-Fundament für `/reinigung` fertiggestellt + Schema-Validierung abgeschlossen
- **Status:** Rich-Results validiert (2 grüne Elemente: ProfessionalService + LocalBusiness); nächste Priorität: Social-Preview via opengraph.xyz testen

## Offene Punkte / nächste Schritte
1. **Social-Preview-Validierung:** https://www.opengraph.xyz/ → `/reinigung` testen (OG-Image-Rendering, Meta-Tags, LinkedIn/Twitter-Preview)
2. **Keyword-Optimierung:** H1/H2 von `/reinigung` mit natürlichen Keywords "Gebäudereinigung", "Nürnberg" erweitern
3. **Google Business Profil:** Kostenlos anlegen für lokale Suche (Nürnberg-Fokus, ~15 Min Setup)
4. **Conversion-Tracking:** Google Analytics oder Tracking für Calendar-Buchungen (optional, wenn Zeit)
5. **Feature-Branch aufräumen:** `claude/review-project-status-ZBd2O` später lokal löschen (nach Merge mit Main)

## Wichtige Entscheidungen / Konventionen
- Hero-Pattern auf `/reinigung`: knappe Headline nach Schema `<Thema> in <Zeit> statt <längere Zeit>`, gefolgt von Subtitle + 3 Stats + CTA
- Topic-Chooser: Toggle zwischen "Angebote" (Incoming Invoices) und "Buchhaltung" (Outgoing) mit visuellen Unterschieden
- ProposalFlowchart auf `/reinigung` immer DE (`forceLocale="de"`)
- Sprache persistiert über Seitenwechsel via LanguageContext
- Stop-Hook dokumentiert Projekt-Stand automatisch — committet und pusht PROJEKTKONTEXT.md am Ende jedes Turns (nur diese Datei)
- BRAND.md zentral für Design-Tokens, Komponenten-Konventionen und Voice & Tone
- PITCH-BUCHHALTUNG.md zentrale Sales-Deck-Dokumentation (17 Folien: Cover → Wer ich bin → Problem → Kosten → Vision → 3 Systeme → Fallstudie → Integration → Preise → Warum-ich → CTA → FAQ + Backup-Slides)
- `<html lang="de">` mit DE-first Metadata in `layout.tsx` für korrekte Google-Preview und SEO
- Strukturierte Daten (JSON-LD LocalBusiness + Service) für reichhaltigere Google-Kacheln und lokale Suche
- Google Search Console: Domain-Verifizierung bevorzugt (TXT-Record) für kompletten Scope aller Subdomains/Varianten
- Cloudflare API-Integration für automatisierte DNS-Verwaltung bei GSC-Verifizierung
