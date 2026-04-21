# Projektkontext — dynvon.com.website

> Diese Datei wird automatisch am Ende jedes Claude-Turns aktualisiert
> (Stop-Hook in `.claude/settings.local.json`). Hier landet der aktuelle
> Projektstand, damit bei Kontextverlust (neue Session, Auto-Compact)
> immer klar ist, wo wir stehen.

## Stand
- **Datum:** 2026-04-21
- **Branch:** `claude/review-project-status-ZBd2O` (clean)
- **Working Tree:** clean (no uncommitted changes)

## Projekt-Basics
- **Stack:** Next.js 16.2.1 + React 19.2 + Tailwind v4, TypeScript
- **Zweck:** Firmen-/Landingpage für dynvon (Business Process Automation, Alexis Bethke-Pittadakis, Nürnberg)
- **Routen:**
  - `/` — Home (Hero, Services, About, CaseStudies, Contact)
  - `/reinigung` — Kampagnen-Landingpage für Gebäudereinigungsunternehmen (fokussiert auf Buchhaltung + Topic-Chooser)
  - `/blog` + `/blog/[slug]` — Blog (Daten in `src/lib/blogData.ts`)
  - `/impressum`, `/datenschutz` — Rechtliches
- **i18n:** DE/EN via `src/lib/LanguageContext` + `src/lib/i18n.ts`; persistiert über Seitenwechsel (DE-first)
- **Wichtig (AGENTS.md):** Next.js 16 hat Breaking Changes ggü. älteren Versionen — vor Code-Änderungen in `node_modules/next/dist/docs/` nachsehen

## Letzte Arbeit (neueste 10 Commits)
1. `05bc88d` chore: auto-update PROJEKTKONTEXT.md
2. `9b90b2c` chore: auto-update PROJEKTKONTEXT.md
3. `58d8746` chore: auto-update PROJEKTKONTEXT.md
4. `99f1167` chore: auto-update PROJEKTKONTEXT.md
5. `ef15cd2` chore: auto-update PROJEKTKONTEXT.md
6. `298cd14` chore: auto-update PROJEKTKONTEXT.md
7. `58ad19e` chore: auto-update PROJEKTKONTEXT.md
8. `a60781c` chore: auto-update PROJEKTKONTEXT.md
9. `1e297a8` chore: auto-update PROJEKTKONTEXT.md
10. `104bbc0` chore: auto-update PROJEKTKONTEXT.md

## Aktuell in Arbeit
- **Task:** BranchenSpezialisierung-Komponente planen: neue `<BranchenSpezialisierung>`-Komponente zwischen `<Services>` und `<CaseStudies>` auf Home. Aktuell 1 Card (Gebäudereinigung → `/reinigung`), vorbereitet auf spätere Branchen (Handwerk, Hausverwaltung, Arztpraxen). SEO-Effekt: interne Links für PageRank, Nutzer-Targeting für Spezialisierung.
- **Uncommitted:** keine.

## Offene Punkte / nächste Schritte
1. **BranchenSpezialisierung-Komponente:** bauen, testen, in Home integrieren.
2. **GBP-Beiträge posten:** 4 fertige Beiträge 1x/Woche hochladen (Status-Signal für Google-Cache-Übergang).
3. **Infografiken:** Mahnwesen, E-Rechnungspflicht, Arbeitszeiterfassung in Canva/Code (Umlaute garantiert).
4. **GBP-Beiträge 5–7:** (1) Einsatzplanung 10+ MA, (2) Subunternehmer-Prüfung, (3) Tariftreue & Lohnzuschläge.
5. **Domain-Autorität:** LinkedIn-Profil-URL auf dynvon.com prüfen, wöchentlich GSC "Indexierung beantragen", externe Backlinks (Branchenverzeichnisse).
6. **Conversion:** GA4 + Google Calendar-Events (appointment_booked) für `/reinigung`-Leads.
7. **Blog-Longtails:** 3–5 fokussierte Posts (Zeiterfassung Handwerk, Rechnungserstellung Büro, etc.).

## Wichtige Entscheidungen / Konventionen
- Hero-Pattern auf `/reinigung`: knappe Headline nach Schema `<Thema> in <Zeit> statt <längere Zeit>`, gefolgt von Subtitle + 3 Stats + CTA
- Topic-Chooser: Toggle zwischen "Angebote" (Incoming Invoices) und "Buchhaltung" (Outgoing) mit visuellen Unterschieden
- ProposalFlowchart auf `/reinigung` immer DE (`forceLocale="de"`)
- Sprache persistiert über Seitenwechsel via LanguageContext, **DE-first (Standard überall, EN hinzuklickbar)**
- Stop-Hook dokumentiert Projekt-Stand automatisch — committet und pusht PROJEKTKONTEXT.md am Ende jedes Turns (nur diese Datei)
- BRAND.md zentral für Design-Tokens, Komponenten-Konventionen und Voice & Tone
- PITCH-BUCHHALTUNG.md zentrale Sales-Deck-Dokumentation (17 Folien: Cover → Wer ich bin → Problem → Kosten → Vision → 3 Systeme → Fallstudie → Integration → Preise → Warum-ich → CTA → FAQ + Backup-Slides)
- `<html lang="de">` mit DE-first Metadata in `layout.tsx` für korrekte Google-Preview und SEO
- Strukturierte Daten (JSON-LD LocalBusiness + Service) für reichhaltigere Google-Kacheln und lokale Suche
- Google Search Console: Domain-Verifizierung (TXT-Record) für kompletten Scope aller Subdomains/Varianten
- Cloudflare API-Integration für automatisierte DNS-Verwaltung bei GSC-Verifizierung
- SEO-Title-Länge: 50-60 Zeichen um SERP/Social-Preview-Truncation zu vermeiden
- **Google Business Profil:** 5/5 Sterne, Kategorien + Dienstleistungen für lokale Suche; Beiträge 1x/Wo für Status-Signal
- **GBP-Beiträge:** Value-First (Problem-Hook, konkrete Zahlen, Roadmap, Fakten-Check), CTA mit Direktlink, Infografiken statt Stockfotos
- **AI-Bildgenerator-Hinweis:** Text in KI-Bildern oft fehlerhaft (Umlaute, Fachbegriffe) — Canva/Code-Rendering bevorzugt für Garantie
- **SEO-Realitäten:** Google-Cache-Lag 1–4 Wochen nach Deployment normal; Snippet-Updates hinken Re-Crawls nach; Domain-Autorität über externe Signale (Backlinks, BLP, GBP-Traffic) aufbauen
- **BranchenSpezialisierung-Platzierung:** Option 1 (empfohlen) = neue Sektion zwischen Services und CaseStudies, thematisch klar, erweiterbar, SEO-friendly (eigene H2 + strukturierter Content)
