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
1. `bfd9a2e` chore: auto-update PROJEKTKONTEXT.md
2. `54850b0` chore: auto-update PROJEKTKONTEXT.md
3. `b5a016f` chore: auto-update PROJEKTKONTEXT.md
4. `87fb5e6` Merge remote-tracking branch 'origin/main' into claude/review-project-status-ZBd2O
5. `4fd5fc1` feat(i18n): default locale auf Deutsch umstellen
6. `2e2c7f5` chore: auto-update PROJEKTKONTEXT.md
7. `da61152` feat(seo): Keyword-Einbindung im /reinigung-Body (#8)
8. `eb96378` Merge remote-tracking branch 'origin/main' into claude/review-project-status-ZBd2O
9. `7ea80db` feat(seo): gezielte Keyword-Einbindung im sichtbaren /reinigung-Body
10. `dc26d71` chore: auto-update PROJEKTKONTEXT.md

## Aktuell in Arbeit
- **Task:** Google Business Profil + GBP-Beitrag-Serie für Reinigungsunternehmen (fokus: Rechnungserstellung + Mahnwesen).
- **Letzte Session:** Value-First GBP-Beitrag-Textvorschlag (dreistufiger Mahnablauf: 2 Tage vor/3 Tage nach/10 Tage Fälligkeit) mit Logo + CTA-Button (`https://www.dynvon.com/reinigung`). Button-Label: "Mehr erfahren". Nächste: 3 weitere Varianten (Angebotserstellung, Lexoffice, Fallstudie) + Bild-Assets.

## Offene Punkte / nächste Schritte
1. **GBP-Beitrag hochladen:** Erste Variante (Mahnwesen) in Google Business Profil-Editor posten (1200×900 Bild, Text, CTA).
2. **3 weitere GBP-Beiträge vorbereiten:** Angebotserstellung, Lexoffice-Integration, Fallstudie-Fallstudie (Social-Proof).
3. **Google Business Profil vollständig optimieren:** Kategorien + Dienstleistungen, Geschäftsbeschreibung (Keywords für lokale SEO).
4. **Conversion-Tracking:** GA4 + Google Calendar-Events (appointment_booked).
5. **Zweite Branchen-Landingpage:** Handwerk, Hausverwaltung oder Arztpraxen (nach `/reinigung`-Schema).
6. **Longtail-Blog-Posts:** 3–5 Posts (z. B. "Zeiterfassung Handwerk", "Rechnungserstellung Büro").

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
- **Google Business Profil:** Kostenlos, 5/5 Sterne, Kategorien + Dienstleistungen gezielt für lokale Such-Ranking; Beiträge 1x/Wo für aktualisierten Status-Signal
- **GBP-Beiträge:** Focused Content (3-4 Leistungs-Callouts + Problem-Hook), CTA mit direktem Link, Value-First-Messaging ohne hartes Selling
