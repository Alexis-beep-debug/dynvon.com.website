# Projektkontext — dynvon.com.website

> Diese Datei wird automatisch am Ende jedes Claude-Turns aktualisiert
> (Stop-Hook in `.claude/settings.local.json`). Hier landet der aktuelle
> Projektstand, damit bei Kontextverlust (neue Session, Auto-Compact)
> immer klar ist, wo wir stehen.

## Stand
- **Datum:** 2026-04-21
- **Branch:** `main` (clean merge)
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
1. `ef15cd2` chore: auto-update PROJEKTKONTEXT.md
2. `298cd14` chore: auto-update PROJEKTKONTEXT.md
3. `58ad19e` chore: auto-update PROJEKTKONTEXT.md
4. `a60781c` chore: auto-update PROJEKTKONTEXT.md
5. `1e297a8` chore: auto-update PROJEKTKONTEXT.md
6. `104bbc0` chore: auto-update PROJEKTKONTEXT.md
7. `b4d45e5` chore: auto-update PROJEKTKONTEXT.md
8. `bfd9a2e` chore: auto-update PROJEKTKONTEXT.md
9. `54850b0` chore: auto-update PROJEKTKONTEXT.md
10. `b5a016f` chore: auto-update PROJEKTKONTEXT.md

## Aktuell in Arbeit
- **Task:** 3 GBP-Beiträge vollständig ausgearbeitet: (1) Dreistufiges Mahnwesen, (2) E-Rechnungspflicht 2025/2027/2028, (3) Dauerrechnungen für Monatsverträge. Jetzt: weitere GBP-Beiträge vorbereiten — **Thema 1 (Arbeitszeiterfassung EuGH 2019 + Zoll-Kontrolle)** ist nächster Kandidat (hochaktuell, rechtlich brisant, starke Automatisierungs-Story).
- **Uncommitted:** keine (clean tree).

## Offene Punkte / nächste Schritte
1. **Weitere 4 GBP-Beiträge schreiben:** (1) Arbeitszeiterfassung-Pflicht (EuGH/BAG/Zoll), (2) Einsatzplanung bei 10+ MA, (3) Subunternehmer-Prüfungspflicht, (4) Tariftreue & Lohnzuschläge (Gebäudereiniger-Tarif).
2. **Timeline-Infografiken (optional):** E-Rechnungspflicht-Roadmap (2025/2027/2028) oder Dauerrechnungs-Zeiteinsparung als Next.js-Route.
3. **Mockup-Screenshots des Dashboards:** für `/reinigung`-Seite (Angebote-Track + Buchhaltungs-Track als PoC).
4. **GBP-Beiträge posten:** Alle 7 Varianten in Google Business Profil-Editor hochladen (1x/Woche für aktualisiertes Status-Signal).
5. **Conversion-Tracking:** GA4 + Google Calendar-Events (appointment_booked) für Reinigung-Leads.
6. **Zweite Branchen-Landingpage:** Handwerk, Hausverwaltung oder Arztpraxen (nach `/reinigung`-Schema).
7. **Longtail-Blog-Posts:** 3–5 thematisch fokussierte Posts (z. B. "Zeiterfassung Handwerk", "Rechnungserstellung Büro").

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
- **Sprache als Default:** DE-Standard überall, Nutzer können EN hinzuklicken (nicht umgekehrt)
- **Google Business Profil:** Kostenlos, 5/5 Sterne, Kategorien + Dienstleistungen gezielt für lokale Such-Ranking; Beiträge 1x/Wo für aktualisiertem Status-Signal
- **GBP-Beiträge:** Focused Content (3-4 Leistungs-Callouts + Problem-Hook), CTA mit direktem Link, Value-First-Messaging ohne hartes Selling
- **GBP-Beitrag-Textvorlage:** Problem-Hook, konkrete Zahlen (Zeit/Euro), Umsetzungs-Roadmap (manuell oder Automatik), Fakten-Check mit Quellen
- **Bild-Strategie für GBP-Posts:** Infografiken + echte Dashboards/Mockups helfen; Stockfotos/generische Bilder schaden — lieber kein Bild als schlechtes Bild
- **AI-Bildgenerator-Hinweis:** Text in KI-generierten Bildern oft fehlerhaft (Umlaute, Fachbegriffe). Alternativen: Canva/Figma manuell korrigieren, oder Next.js-Route mit Code rendern für garantiert korrekte Typographie.
