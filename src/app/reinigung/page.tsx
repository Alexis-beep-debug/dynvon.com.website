"use client";

import { useState, type ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";
import ProposalFlowchart from "@/components/ProposalFlowchart";
import Testimonials from "@/components/Testimonials";
import LogoMarquee from "@/components/LogoMarquee";

type Topic = "angebote" | "buchhaltung";

type TopicContent = {
  heroHeadline: ReactNode;
  heroSubtitle: string;
  heroStats: { value: string; label: string }[];
  problems: { title: string; desc: string }[];
  solutionIntro: string;
  solutions: { title: string; desc: string; flow: string[] }[];
  showFlowchart: boolean;
  results: { value: string; before: string; label: string }[];
};

const FAQ_ITEMS = [
  {
    q: "Funktioniert das mit meiner bestehenden Software?",
    a: "Ja. Das System integriert sich mit Lexoffice, sevDesk, DATEV und den gängigen Buchhaltungstools. Falls Sie Excel oder Word nutzen — umso besser, dann ist der Umstieg noch einfacher.",
  },
  {
    q: "Was passiert mit Sonderfällen?",
    a: "Das System deckt die 80% Standardfälle komplett ab. Sonderfälle werden markiert und Ihnen zur kurzen Prüfung vorgelegt. Mit der Zeit lernt das System auch diese Muster.",
  },
  {
    q: "Wie läuft die Einrichtung ab?",
    a: "Woche 1: Analyse Ihrer Prozesse. Woche 2: Einrichtung. Woche 3: Testlauf mit echten Daten. Danach Livegang. Alles cloud-basiert — Sie müssen nichts installieren.",
  },
  {
    q: "Sind meine Daten sicher?",
    a: "Ja. Deutsche/EU-Server, DSGVO-konform, AV-Vertrag, verschlüsselte Übertragung. Ihre Finanzdaten sind bei uns genauso sicher wie bei Ihrem Steuerberater.",
  },
];

const CONTENT: Record<Topic, TopicContent> = {
  angebote: {
    heroHeadline: (
      <>
        Angebote in <span className="stat-highlight">2 Minuten</span> statt 2 Stunden
      </>
    ),
    heroSubtitle:
      "Kunde fragt an → Sie geben Fläche und Leistung ein → fertiges Angebot als PDF. Automatisch.",
    heroStats: [
      { value: "2 Min", label: "Pro Angebot" },
      { value: "0", label: "Fehler bei Kalkulation" },
      { value: "2x", label: "Mehr Abschlüsse" },
    ],
    problems: [
      {
        title: "Jedes Angebot manuell basteln",
        desc: "Word öffnen, letzte Vorlage suchen, Positionen anpassen, Preise nachrechnen, PDF exportieren. Bei 20 Anfragen im Monat ein enormer Zeitfresser.",
      },
      {
        title: "Preise nachrechnen, Positionen zusammensuchen",
        desc: "Welcher qm-Preis gilt für diesen Raumtyp? Ist der Sondertarif noch aktuell? Jedes Angebot ist ein kleines Rechenprojekt mit Fehlerpotenzial.",
      },
      {
        title: "Kunde wartet — und unterschreibt woanders",
        desc: "Ihr Interessent fragt an. Sie brauchen 3 Tage für das Angebot. In der Zwischenzeit hat die Konkurrenz schon geliefert. Geschwindigkeit gewinnt.",
      },
    ],
    solutionIntro:
      "Vier Bausteine, die Ihren Vertrieb auf Autopilot setzen:",
    solutions: [
      {
        title: "Schnelle Eingabe",
        desc: "Objektdaten, Fläche, gewünschte Leistungen — in ein einfaches Formular eingeben. Vor Ort auf dem Handy oder am Rechner im Büro.",
        flow: ["Formular", "Objektdaten", "Leistungen", "Fertig"],
      },
      {
        title: "Automatische Kalkulation",
        desc: "Preise werden nach Ihrem hinterlegten Schlüssel berechnet — inklusive Rabatte, Sonderleistungen, Zuschläge. Keine Rechenfehler mehr.",
        flow: ["Ihre Preise", "Berechnung", "Rabatte", "Endpreis"],
      },
      {
        title: "PDF-Angebot sofort versandfertig",
        desc: "Professionell formatiert, mit Ihrem Logo, allen Positionen und Ihren AGB. Per Klick direkt an den Kunden versendet.",
        flow: ["Layout", "Logo + AGB", "PDF erstellt", "Per E-Mail"],
      },
      {
        title: "Automatisches Nachfassen",
        desc: "Das System erinnert, wenn ein Kunde nicht reagiert — nach 3, 7 und 14 Tagen. Sie sehen auf einen Blick, welche Leads heiß sind.",
        flow: ["Gesendet", "3 Tage", "7 Tage", "14 Tage"],
      },
    ],
    showFlowchart: true,
    results: [
      { value: "2 Min", before: "vorher: 2 Stunden", label: "Pro Angebot" },
      { value: "0", before: "vorher: regelmäßig", label: "Kalkulationsfehler" },
      { value: "2x", before: "vorher: am Limit", label: "Abschlussrate" },
    ],
  },
  buchhaltung: {
    heroHeadline: (
      <>
        Buchhaltung erledigt sich <span className="stat-highlight">von selbst</span>
      </>
    ),
    heroSubtitle:
      "Automatische Rechnungserstellung, Belegerfassung und Steuerberater-Export. Für Reinigungsunternehmen ab 5 Mitarbeitern.",
    heroStats: [
      { value: "10h+", label: "Gesparte Zeit pro Woche" },
      { value: "0", label: "Vergessene Mahnungen" },
      { value: "100%", label: "Pünktliche Rechnungen" },
    ],
    problems: [
      {
        title: "Abends noch Rechnungen schreiben",
        desc: "Nach einem vollen Tag auf den Objekten sitzen Sie abends im Büro und tippen Rechnungen. Am Wochenende das Gleiche. Ihr Kerngeschäft bleibt liegen.",
      },
      {
        title: "Stundenzettel manuell übertragen",
        desc: "Ihre Reinigungskräfte füllen Stundenzettel aus. Jemand im Büro tippt die Stunden ab, rechnet zusammen, erstellt Rechnungen. Fehler passieren ständig.",
      },
      {
        title: "Belege sammeln und sortieren",
        desc: "Tankquittungen, Materialrechnungen, Fahrtkosten — jeden Monat der gleiche Kampf, alles zusammenzusuchen und dem Steuerberater zuzuordnen.",
      },
      {
        title: "Steuerberater beschwert sich",
        desc: "Unterlagen kommen verspätet, sind unvollständig oder falsch sortiert. Ihr Steuerberater rechnet Nacharbeit ab — die Sie zahlen.",
      },
    ],
    solutionIntro:
      "Vier Systeme, die Ihre Buchhaltung komplett übernehmen:",
    solutions: [
      {
        title: "Automatische Rechnungserstellung",
        desc: "Aus Stundenzetteln und Aufträgen werden direkt Rechnungen generiert — korrekt, nummeriert, per E-Mail versendet. Sie müssen nichts mehr tippen.",
        flow: ["Stundenzettel", "Berechnung", "Rechnung erstellt", "Versendet"],
      },
      {
        title: "Belegerfassung",
        desc: "Foto vom Beleg mit dem Handy → automatisch erfasst, kategorisiert und dem richtigen Objekt zugeordnet. Kein Abtippen, kein Zettelchaos.",
        flow: ["Foto", "Automatisch erfasst", "Kategorisiert", "Zugeordnet"],
      },
      {
        title: "Steuerberater-Export",
        desc: "Jeden Monat alles fertig aufbereitet: Buchungssätze im DATEV-Format, sauber sortiert, ohne Nachfragen. Ihr Steuerberater bekommt, was er braucht.",
        flow: ["Monatsdaten", "DATEV-Format", "Export", "Beim Steuerberater"],
      },
      {
        title: "Zahlungseingänge",
        desc: "Bankkonto wird automatisch abgeglichen, Rechnungen als bezahlt markiert, offene Posten angezeigt. Bei Verzug: automatisch vorbereitete Mahnungen.",
        flow: ["Bankabgleich", "Abgeglichen", "Offene Posten", "Mahnung"],
      },
    ],
    showFlowchart: false,
    results: [
      { value: "10h+", before: "vorher: Am Wochenende", label: "Gesparte Zeit pro Woche" },
      { value: "0", before: "vorher: regelmäßig", label: "Vergessene Mahnungen" },
      { value: "100%", before: "vorher: 60-70%", label: "Pünktliche Rechnungen" },
    ],
  },
};

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-mono text-accent-light uppercase tracking-widest mb-4 block text-center">
          FAQ
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 text-center">
          Häufige Fragen
        </h2>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl border border-border bg-surface/60 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
                >
                  <span className="font-bold text-[15px]">{item.q}</span>
                  <svg
                    className={`w-5 h-5 shrink-0 text-muted transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 -mt-2">
                    <p className="text-muted text-[15px] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ReinigungContent() {
  const [topic, setTopic] = useState<Topic>("buchhaltung");
  const c = CONTENT[topic];

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/4 via-transparent to-background pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/60 backdrop-blur-sm text-sm text-muted mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-light animate-pulse" />
            Speziell für Reinigungsunternehmen
          </div>

          <div className="flex items-center justify-center gap-6 mb-10">
            <button
              type="button"
              onClick={() => setTopic("buchhaltung")}
              className={`relative pb-2 text-sm font-medium transition-colors ${
                topic === "buchhaltung"
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              Buchhaltung &amp; Rechnungen
              <span
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-accent transition-opacity duration-200 ${
                  topic === "buchhaltung" ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
            <button
              type="button"
              onClick={() => setTopic("angebote")}
              className={`relative pb-2 text-sm font-medium transition-colors ${
                topic === "angebote"
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              Angebote &amp; Vertrieb
              <span
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-accent transition-opacity duration-200 ${
                  topic === "angebote" ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
            {c.heroHeadline}
          </h1>

          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            {c.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://calendar.app.google/qJnC2hS15NJ1XxVcA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 text-lg"
            >
              Kostenlose Demo vereinbaren
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {c.heroStats.map((stat, i) => (
              <div key={i} className="p-5 rounded-xl border border-border bg-surface/60 backdrop-blur-sm">
                <div className="text-3xl font-bold stat-highlight mb-1">{stat.value}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Google Rating Badge */}
          <div className="mt-10 flex items-center justify-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-border bg-surface/40 backdrop-blur-sm">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold">5.0</span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-muted">auf Google</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner logos */}
      <LogoMarquee />

      {/* Problem */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono text-accent-light uppercase tracking-widest mb-4 block text-center">
            Das Problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-center">
            Kennen Sie das aus Ihrem Reinigungsunternehmen?
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed mb-12 text-center">
            Typische Herausforderungen in der Gebäudereinigungsbranche, die täglich Zeit und Geld kosten:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {c.problems.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-border bg-surface/60"
              >
                <div className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted text-[15px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono text-accent-light uppercase tracking-widest mb-4 block text-center">
            Die Lösung
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-center">
            Was ich für Gebäudereinigungsunternehmen automatisiere
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed mb-12 text-center">
            {c.solutionIntro}
          </p>

          <div className="space-y-6">
            {c.solutions.map((sol, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-2xl border border-border bg-surface/60">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-accent/10 text-accent-light flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                  <h3 className="text-xl font-bold">{sol.title}</h3>
                </div>
                <p className="text-muted text-[15px] leading-relaxed mb-4">{sol.desc}</p>
                <div className="flex items-center gap-2 text-xs font-mono text-muted overflow-x-auto pb-1">
                  {sol.flow.map((step, stepIdx) => {
                    const colorClasses = [
                      "bg-green-500/10 text-green-600 border-green-500/20",
                      "bg-accent/10 text-accent border-accent/20",
                      "bg-purple-500/10 text-purple-600 border-purple-500/20",
                      "bg-amber-500/10 text-amber-600 border-amber-500/20",
                    ];
                    return (
                      <span key={stepIdx} className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded border whitespace-nowrap ${colorClasses[stepIdx % colorClasses.length]}`}>
                          {step}
                        </span>
                        {stepIdx < sol.flow.length - 1 && <span className="text-border" aria-hidden="true">&rarr;</span>}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flowchart — only for Angebote track */}
      {c.showFlowchart && (
        <section className="py-20 sm:py-28 relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-mono text-accent-light uppercase tracking-widest mb-4 block text-center">
              Fallstudie
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-center">
              So funktioniert es in der Praxis
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed mb-8 text-center">
              Dieses System habe ich für ein Gebäudereinigungsunternehmen gebaut.
              Das Ergebnis: Angebotszeit von 2 Stunden auf unter 5 Minuten reduziert.
            </p>

            <ProposalFlowchart forceLocale="de" />
          </div>
        </section>
      )}

      {/* Social Proof / Results */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono text-accent-light uppercase tracking-widest mb-4 block">
            Ergebnisse
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
            Was Reinigungsunternehmen mit dynvon erreichen
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {c.results.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-border bg-surface/60">
                <div className="text-4xl font-bold stat-highlight mb-1">{item.value}</div>
                <div className="text-xs text-muted line-through mb-2">{item.before}</div>
                <div className="text-sm font-medium">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-10">
            <a
              href="/fallstudie/ruiz"
              className="inline-flex items-center gap-2 text-accent-light hover:text-accent transition-colors text-sm font-medium"
            >
              Fallstudie: Ruiz Gebäudereinigung — 10h/Woche eingespart →
            </a>
            <a
              href="/fallstudie/gc-facility"
              className="inline-flex items-center gap-2 text-accent-light hover:text-accent transition-colors text-sm font-medium"
            >
              Fallstudie: GC Facility — Angebote per Klick →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion />

      {/* Testimonials */}
      <Testimonials />

      {/* About */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="w-36 h-36 rounded-full border-2 border-accent/30 overflow-hidden shrink-0 shadow-lg shadow-accent/10">
              <img
                src="/alexis-opt.webp"
                alt="Alexis Bethke-Pittadakis"
                width={144}
                height={144}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Alexis Bethke-Pittadakis</h3>
              <p className="text-sm text-accent-light mb-3">Automation Engineer — Nürnberg</p>
              <p className="text-muted text-[15px] leading-relaxed">
                Aus Nürnberg arbeite ich mit Gebäudereinigungsunternehmen in ganz Deutschland,
                Österreich und der Schweiz zusammen und automatisiere ihre Buchhaltung,
                Angebotserstellung und Kundenkommunikation. Meine Python-Systeme laufen 24/7,
                machen keine Fehler und wachsen mit Ihrem Betrieb mit — über 15 erfolgreich
                umgesetzte Automatisierungsprojekte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Bereit, Ihr Reinigungsunternehmen zu entlasten?
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            In einem kostenlosen 15-Minuten-Gespräch zeige ich Ihnen live, welche
            Prozesse in Ihrem Betrieb automatisiert werden können.
          </p>

          <a
            href="https://calendar.app.google/qJnC2hS15NJ1XxVcA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 text-lg"
          >
            Kostenlose Demo vereinbaren
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <p className="mt-6 text-sm text-muted">
            15 Minuten. Keine Kosten. Kein Verkaufsdruck.
          </p>
        </div>
      </section>
    </main>
  );
}

export default function ReinigungPage() {
  return (
    <LanguageProvider>
      <Navigation />
      <ReinigungContent />
      <Footer />
    </LanguageProvider>
  );
}
