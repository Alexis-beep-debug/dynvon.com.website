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
1. `87fb5e6` Merge remote-tracking branch 'origin/main' into claude/review-project-status-ZBd2O
2. `4fd5fc1` feat(i18n): default locale auf Deutsch umstellen
3. `2e2c7f5` chore: auto-update PROJEKTKONTEXT.md
4. `da61152` feat(seo): Keyword-Einbindung im /reinigung-Body (#8)
5. `eb96378` Merge remote-tracking branch 'origin/main' into claude/review-project-status-ZBd2O
6. `7ea80db` feat(seo): gezielte Keyword-Einbindung im sichtbaren /reinigung-Body
7. `dc26d71` chore: auto-update PROJEKTKONTEXT.md
8. `577239f` fix(seo): shorten titles for SERP/social truncation (#7)
9. `204f9f9` Merge remote-tracking branch 'origin/main' into claude/review-project-status-ZBd2O
10. `f5cc966` fix(seo): shorten titles to 50-60 chars for SERP/social truncation

## Aktuell in Arbeit
- **Task:** i18n-Refinement: Default-Locale auf Deutsch umgestellt (`4fd5fc1`). Nach Vercel-Deploy sehen neue Besucher **immer Deutsch** — Sprach-Toggle wechselt auf Englisch, Wahl persistiert in localStorage.
- **Status:** Gemergt und live. Nächste: Google Business Profil, Conversion-Tracking, 2. Branchen-Seite (Handwerk), Longtail-Blogs.

## Offene Punkte / nächste Schritte
1. **Google Business Profil:** Kostenlos anlegen für lokale Suche (Nürnberg-Fokus, ~15 Min Setup) — starker lokaler SEO-Hebel.
2. **Conversion-Tracking:** Google Calendar-Buchungen tracken (GA4 oder ähnlich).
3. **Zweite Branchen-Landingpage:** Handwerk, Hausverwaltung, Arztpraxen (ähnlich `/reinigung` nach Schema anpassen).
4. **Longtail-Blog-Posts:** 3–5 gezielte Posts für häufige Suchanfragen (z. B. "Zeiterfassung Handwerk", "Rechnungserstellung Büro").
5. **Feature-Branch aufräumen:** `claude/review-project-status-ZBd2O` später lokal löschen (nach finaler Merge mit Main).

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
