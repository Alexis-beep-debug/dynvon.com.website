# Brand & Design System — dynvon

> Single source of truth für Farben, Typografie, Komponenten, Voice und Layout
> der dynvon-Website und aller dynvon-Materialien. Alle Werte sind aus dem
> produktiven Code extrahiert (`src/app/globals.css`, `src/components/*`).
> Bei Änderungen im Code bitte hier nachziehen.

---

## 1. Brand Essence

**Name:** dynvon
**Tagline:** Business Process Automation Engineer
**Gründer:** Alexis Bethke-Pittadakis — Nürnberg
**Positionierung:** Automatisierungs-Freelancer für kleine und mittlere
Unternehmen (1-50 Mitarbeiter). Schwerpunkt: Python-Backends, API-Integrationen
(Pipedrive, Lexoffice, Brevo, Lemlist, Airtable), E-Mail- und
Buchhaltungs-Automatisierung. Nicht No-Code wie Zapier/Make — sondern robuste,
eigens gebaute Lösungen.

**Versprechen:** Weniger Papierkram, mehr Zeit für Aufträge.
**Ton:** Direkt, zahlenbasiert, pragmatisch. Keine Buzzwords, keine Floskeln.

---

## 2. Logo

| Asset | Zweck | Pfad |
|---|---|---|
| Triangle + Wordmark (SVG) | Haupt-Logo, Header, Signatur | `public/` |
| "d"-Icon (SVG) | Favicon, App-Icon | `/icon.svg`, `/favicon.svg` |
| Triangle-Icon (JPEG) | E-Mail-Signatur (weißer Hintergrund) | `public/` |

**Regeln:**
- Triangle-Icon ist das Kernsymbol. In Langform immer mit "dynvon"-Wordmark kombinieren.
- Nie auf dunklem Hintergrund ohne JPEG-Variante mit weißem Hintergrund verwenden (E-Mail-Clients invertieren sonst).

---

## 3. Farben

### 3.1 Palette

| Token | Hex | CSS-Var | Tailwind-Klasse | Verwendung |
|---|---|---|---|---|
| Background | `#f8f9fb` | `--background` | `bg-background` | Globaler Seiten-Hintergrund (warmes Off-White) |
| Foreground | `#1a1a2e` | `--foreground` | `text-foreground` | Primäre Textfarbe (fast-schwarz mit leichtem Violett) |
| Accent | `#4f46e5` | `--accent` | `bg-accent`, `text-accent` | Primary-Buttons, Active-States, Links |
| Accent Light | `#6366f1` | `--accent-light` | `bg-accent-light`, `text-accent-light` | Hover-State, Eyebrow-Text, Akzente |
| Surface | `#ffffff` | `--surface` | `bg-surface` | Karten, Panels, erhöhte Flächen |
| Surface Light | `#f0f1f5` | `--surface-light` | `bg-surface-light` | Secondary-Button Hover, subtile Abgrenzung |
| Border | `#e2e4ea` | `--border` | `border-border` | Karten-Rahmen, Dividers, Button-Outlines |
| Muted | `#6b7085` | `--muted` | `text-muted` | Subtitles, Beschreibungen, Labels |

### 3.2 Semantische Farben (aus Tailwind Standard — bewusst sparsam einsetzen)

- **Fehler / Probleme:** `text-red-500`, `bg-red-500/10` (nur für "Das Problem"-Section-Icons)
- **Success / Start eines Flows:** `text-green-600`, `bg-green-500/10`, `border-green-500/20`
- **Akzent-Mitte Flow:** `text-accent`, `bg-accent/10`, `border-accent/20`
- **Purple Flow-Step:** `text-purple-600`, `bg-purple-500/10`, `border-purple-500/20`
- **Warn / Endzustand Flow:** `text-amber-600`, `bg-amber-500/10`, `border-amber-500/20`

### 3.3 Gradients (nur 2 zugelassen)

**Stat-Highlight** — für hervorgehobene Zahlen/Wörter in Headlines:
```css
background: linear-gradient(135deg, #4f46e5, #7c3aed);
```
Klasse: `stat-highlight` (bereits in `globals.css` definiert).

**Animated Gradient Border:**
```css
background: linear-gradient(135deg, #4f46e5, #a855f7, #4f46e5);
background-size: 200% 200%;
animation: gradient-shift 6s ease infinite;
```
Klasse: `gradient-border`.

---

## 4. Typografie

### 4.1 Font-Stacks

**Sans (primär):**
```
Inter, "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
```

**Mono (Eyebrows, Flow-Steps, technische Akzente):**
```
"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace
```

Tailwind-Klassen: `font-sans` (Default auf `<body>`), `font-mono`.

### 4.2 Type-Scale

| Rolle | Tailwind-Klassen | Einsatz |
|---|---|---|
| H1 (Landing Hero) | `text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]` | Nur Home-Hero |
| H1 (Unterseiten) | `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]` | `/reinigung` Hero, Blog-Posts |
| H2 | `text-3xl sm:text-4xl font-bold tracking-tight` | Section-Titel |
| H3 | `text-xl font-bold` | Karten-Titel |
| Lead / Subtitle | `text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed` | Unter H1/H2 |
| Body | `text-[15px] text-muted leading-relaxed` | Beschreibungen in Karten |
| Eyebrow | `text-xs font-mono text-accent-light uppercase tracking-widest` | Kategorie über H2 |
| Stat-Zahl groß | `text-4xl font-bold stat-highlight` | Ergebnis-Stats |
| Stat-Zahl klein | `text-3xl font-bold stat-highlight` | Hero-Stats |
| Stat-Label | `text-sm text-muted` | Unter Stat-Zahl |
| Flow-Step | `text-xs font-mono` (in farbig gerahmtem Pill) | Prozess-Diagramme |

**Grundregel:** Headlines haben ein farbiges Keyword im `stat-highlight`-Gradient. Pattern:
```tsx
<h1>Angebote in <span className="stat-highlight">5 Minuten</span> statt 2 Stunden</h1>
```

---

## 5. Komponenten / Patterns

### 5.1 Badge / Pill (mit Pulse-Dot)
Signalisiert Kategorie am oberen Rand von Hero-Sektionen.
```tsx
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/60 backdrop-blur-sm text-sm text-muted mb-8">
  <span className="w-2 h-2 rounded-full bg-accent-light animate-pulse" />
  Speziell für Reinigungsunternehmen
</div>
```

### 5.2 Primary-Button (CTA)
Immer für den wichtigsten Call-to-Action. Google-Calendar-Buchung.
```tsx
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 text-lg">
  Kostenloses Gespräch buchen
  <svg className="w-5 h-5" …>→</svg>
</a>
```

### 5.3 Secondary-Button
Für Navigations-Alternativen neben dem Primary.
```tsx
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-semibold rounded-xl hover:bg-surface-light transition-all">
  Projekte ansehen
</a>
```

### 5.4 Karte (Standard)
Für Content-Blöcke (Problems, Solutions, Stats).
```tsx
<div className="p-6 rounded-2xl border border-border bg-surface/60">…</div>
```
- Kleine Stat-Karte: `p-5 rounded-xl border border-border bg-surface/60 backdrop-blur-sm`
- Große Lösungs-Karte: `p-6 sm:p-8 rounded-2xl border border-border bg-surface/60`

### 5.5 Section-Divider (Top-Linie)
Oben auf jeder Section (außer Hero):
```tsx
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
```

### 5.6 Hintergrund-Glow
Weicher Blur-Kreis hinter Hero-Inhalten:
```tsx
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
```

### 5.7 Flow-Steps (Prozess-Chips)
Farben rotieren in dieser Reihenfolge: grün → accent → purple → amber.
```tsx
<span className="px-2 py-1 bg-green-500/10 text-green-600 rounded border border-green-500/20 whitespace-nowrap">Formular</span>
<span className="text-border">→</span>
<span className="px-2 py-1 bg-accent/10 text-accent rounded border border-accent/20">Berechnung</span>
…
```

### 5.8 Nummerierter Schritt-Indikator
Für "Was ich automatisiere"-Sektion:
```tsx
<span className="w-10 h-10 rounded-xl bg-accent/10 text-accent-light flex items-center justify-center font-bold">1</span>
```

---

## 6. Layout & Spacing

### 6.1 Container
- Standard-Breite: `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8`
- Schmal (Text-lastig, About, CTA): `max-w-3xl`
- Breit (Hero Home): `max-w-5xl`

### 6.2 Vertikal-Rhythmus
- Section-Padding: `py-20 sm:py-28`
- Hero Top-Padding (unter Nav): `pt-28 pb-20 sm:pt-36 sm:pb-28`
- Spacing zwischen Textblöcken: `mb-4`, `mb-6`, `mb-8`, `mb-12` (Treppenschritt)

### 6.3 Border-Radius-Skala
- `rounded` — Flow-Chips, kleine Pills
- `rounded-xl` — Buttons, Stat-Karten, Step-Indicators
- `rounded-2xl` — Standard-Karten
- `rounded-full` — Badges, Dots, Profilbild

### 6.4 Globales Element
`<InteractiveGrid />` liegt in `src/app/layout.tsx` hinter allem (`z-10` der Content-Schicht darüber). Subtile Grid-Linien folgen dem Mauszeiger.

---

## 7. Voice & Tone

### 7.1 Deutsch (Primär-Sprache)
- **Sie-Form** konsequent (B2B-Zielgruppe, KMU-Inhaber)
- **Direkt und konkret:** "Rechnungen werden automatisch erstellt" — nicht "Wir unterstützen Sie bei der Rechnungserstellung"
- **Zahlen in Headlines:** "in 5 Minuten statt 2 Stunden", "10h/Woche gespart", "0 Fehler"
- **Pain-Point-Sprache:** "Angebote dauern ewig", "Papierkram statt Aufträge"
- **Keine Floskeln:** keine "innovative Lösungen", "ganzheitliche Ansätze", "digitale Transformation"

### 7.2 Englisch (Parität)
- Direkt, kein "please" / "kindly"
- Gleiche Zahlenlogik
- Toggle via `LanguageContext`, persistiert über Seitenwechsel

### 7.3 Headline-Formel (Landing-Seiten)
```
<Thema> in <kurze Zeit> statt <längere Zeit>
```
Beispiele:
- "Angebote in **5 Minuten** statt 2 Stunden"
- "Buchhaltung in **Minuten** statt Tagen"

### 7.4 Subtitle-Formel
```
Ich automatisiere <3 Bereiche> für <Zielgruppe> — damit Sie sich auf <Kerntätigkeit> konzentrieren können, nicht auf <Pain>.
```

### 7.5 Section-Struktur (Landing-Pages)
1. Hero (Badge → H1 → Subtitle → CTA → 3 Stats)
2. Problem (`Kennen Sie das?` → 4 Pain-Points als Karten mit rotem X)
3. Lösung (`Was ich für Sie automatisiere` → 3 nummerierte Systeme mit Flow-Steps)
4. Fallstudie / Flowchart (optional, themenspezifisch)
5. Ergebnisse (3 Vorher/Nachher-Stats)
6. About (Profilbild + Bio)
7. Final-CTA (H2 → Text → Button → Reassurance)

---

## 8. CTA-Regeln

- **Primary-CTA immer:** "Kostenloses Gespräch buchen" → `https://calendar.app.google/qJnC2hS15NJ1XxVcA`
- **Target:** `_blank`, `rel="noopener noreferrer"`
- **Icon:** Pfeil-rechts SVG (stroke, 2px, w-5 h-5)
- **Reassurance unter CTA:** "Keine Kosten, kein Risiko — nur ein ehrliches Gespräch über Ihre Möglichkeiten."

---

## 9. Interaktions-Regeln

- **Hover-States:** `hover:bg-accent-light` für Primary, `hover:bg-surface-light` für Secondary, Shadow mit Accent-Tint: `hover:shadow-accent/25`
- **Transitions:** `transition-all` als Default
- **Scroll:** `scroll-behavior: smooth` global (in `globals.css`)
- **Selection:** Markierter Text hat `bg-accent` + weißen Text

---

## 10. Do & Don't

**Do:**
- Zahlen in Headlines (konkret, messbar)
- `stat-highlight`-Gradient sparsam — 1 Wort pro Headline
- Karten immer mit `border-border` UND `bg-surface/60`
- Eyebrow vor H2 (`text-xs font-mono text-accent-light uppercase tracking-widest`)
- CTAs mit Pfeil-Icon

**Don't:**
- Keine zusätzlichen Akzentfarben einführen (nur Indigo + Purple-Gradient)
- Keine harten weißen Karten-Hintergründe auf weißem Seiten-Hintergrund — immer `bg-surface/60` mit `backdrop-blur`
- Keine Drop-Shadows ohne Accent-Tint
- Keine Headlines ohne `tracking-tight leading-[1.1]`
- Keine CTAs außer Google-Calendar-Link für Primary
- Keine Farbnamen im Code (`text-indigo-500`) — immer Token-Klassen (`text-accent`)
