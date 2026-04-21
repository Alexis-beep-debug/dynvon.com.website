# Projektkontext — dynvon.com.website

> Diese Datei wird automatisch am Ende jedes Claude-Turns aktualisiert
> (Stop-Hook in `.claude/settings.local.json`). Hier landet der aktuelle
> Projektstand, damit bei Kontextverlust (neue Session, Auto-Compact)
> immer klar ist, wo wir stehen.

## Stand
- **Datum:** 2026-04-21
- **Branch:** `claude/review-project-status-ZBd2O`
- **Working Tree:** clean (no uncommitted changes)

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
1. `204f9f9` Merge remote-tracking branch 'origin/main' into claude/review-project-status-ZBd2O
2. `f5cc966` fix(seo): shorten titles to 50-60 chars for SERP/social truncation
3. `d028d72` chore: auto-update PROJEKTKONTEXT.md
4. `b755a4f` chore: auto-update PROJEKTKONTEXT.md
5. `cf3367a` chore: auto-update PROJEKTKONTEXT.md
6. `43113a0` chore: auto-update PROJEKTKONTEXT.md
7. `76983b8` chore: auto-update PROJEKTKONTEXT.md
8. `7e920b7` chore: auto-update PROJEKTKONTEXT.md
9. `41238b6` chore: auto-update PROJEKTKONTEXT.md
10. `7ab33d3` chore: auto-update PROJEKTKONTEXT.md

## Aktuell in Arbeit
- **Task:** SEO-Optimierung für `/reinigung` — Titel gekürzt auf 50-60 Zeichen (kein SERP-Truncation, optimiert für Social-Previews).
- **Status:** Vercel-Deploy abgeschlossen; nächste: Google Business Profil (3) oder Keyword-Optimierung im Body (4).

## Offene Punkte / nächste Schritte
1. **Google Business Profil:** Kostenlos anlegen für lokale Suche (Nürnberg-Fokus, ~15 Min Setup)
2. **Keyword-Optimierung:** H1/H2 von `/reinigung` mit natürlichen Keywords "Gebäudereinigung", "Nürnberg" erweitern
3. **Social-Preview-Validierung:** https://www.opengraph.xyz/ → `/reinigung` testen (OG-Image-Rendering, Meta-Tags)
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
- SEO-Title-Länge: 50-60 Zeichen um SERP/Social-Preview-Truncation zu vermeiden
