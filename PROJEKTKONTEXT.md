# Projektkontext — dynvon.com.website

> Diese Datei wird automatisch am Ende jedes Claude-Turns aktualisiert
> (Stop-Hook in `.claude/settings.local.json`). Hier landet der aktuelle
> Projektstand, damit bei Kontextverlust (neue Session, Auto-Compact)
> immer klar ist, wo wir stehen.

## Stand
- **Datum:** 2026-04-21
- **Branch:** `main` (clean)
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
1. `99f1167` chore: auto-update PROJEKTKONTEXT.md
2. `ef15cd2` chore: auto-update PROJEKTKONTEXT.md
3. `298cd14` chore: auto-update PROJEKTKONTEXT.md
4. `58ad19e` chore: auto-update PROJEKTKONTEXT.md
5. `a60781c` chore: auto-update PROJEKTKONTEXT.md
6. `1e297a8` chore: auto-update PROJEKTKONTEXT.md
7. `104bbc0` chore: auto-update PROJEKTKONTEXT.md
8. `b4d45e5` chore: auto-update PROJEKTKONTEXT.md
9. `bfd9a2e` chore: auto-update PROJEKTKONTEXT.md
10. `54850b0` chore: auto-update PROJEKTKONTEXT.md

## Aktuell in Arbeit
- **Task:** GBP-Beitrag 4 (Arbeitszeiterfassung-Pflicht) vollständig ausgearbeitet: rechtlich wasserdicht (BAG 13.9.2022, § 17 MiLoG, § 2a SchwarzArbG), mit 3 Hebeln für Gebäudereiniger (Zoll, Bußgeld bis 30k€, Risikoeinstufung). Design-Prompt für Infografik (1200×900px, Flat-Design, B2B-Premium) ebenfalls parat. Nächster: GBP-Beitrag 5 (Einsatzplanung bei 10+ MA).
- **Uncommitted:** keine.

## Offene Punkte / nächste Schritte
1. **GBP-Beiträge posten:** 4 abgeschlossene Beiträge in Google Business Profil-Editor hochladen (1x/Woche für Status-Signal).
2. **Design-Assets für GBP:** Infografiken rendern (Mahnwesen, E-Rechnungspflicht, Arbeitszeiterfassung) — Canva/Code für garantiert korrekte Umlaute.
3. **Weitere 3 GBP-Beiträge:** (1) Einsatzplanung 10+ MA, (2) Subunternehmer-Prüfung, (3) Tariftreue & Lohnzuschläge.
4. **Timeline-Infografik (optional):** E-Rechnungs-Roadmap (2025/2027/2028) als Next.js-Route.
5. **Mockup-Screenshots:** Angebote-Track + Buchhaltungs-Track für `/reinigung` (PoC).
6. **Conversion-Tracking:** GA4 + Google Calendar Events (appointment_booked) für Reinigung-Leads.
7. **Zweite Branchen-Landingpage:** Handwerk, Hausverwaltung oder Arztpraxen (nach `/reinigung`-Schema).
8. **Longtail-Blog-Posts:** 3–5 fokussierte Posts (z. B. "Zeiterfassung Handwerk", "Rechnungserstellung Büro").

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
