"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";

const heroStats = [
  { value: "15h+", label: "Zeitersparnis pro Woche" },
  { value: "98%", label: "Weniger manuelle Dateneingabe" },
  { value: "< 3 Mon", label: "Amortisationszeit" },
];

const problems = [
  {
    title: "Hunderte Belege manuell abtippen",
    desc: "Jeden Monat landen Dutzende PDFs im Postfach — Reinigungsfirma, Hausmeister, Gärtner, Versorger. Jede einzelne manuell öffnen, prüfen, abtippen, zuordnen. Bei 200 Einheiten ein Vollzeitjob.",
  },
  {
    title: "Nebenkostenabrechnungen fressen Wochen",
    desc: "Jedes Jahr der gleiche Marathon: Verbrauchsdaten sammeln, Verteilerschlüssel anwenden, Einzelabrechnungen erstellen. 3-4 Wochen reine Verwaltungsarbeit, in der nichts anderes passiert.",
  },
  {
    title: "Rechnungen verschwinden im Chaos",
    desc: "PDFs im Postfach, Papier auf dem Schreibtisch, Excels auf dem Server — niemand weiß, welche Rechnung schon verbucht ist. Doppelzahlungen und vergessene Rechnungen sind die Folge.",
  },
  {
    title: "Mitarbeiter machen Buchhaltung statt Verwaltung",
    desc: "Ihre Leute sind ausgebildete Verwalter, keine Buchhalter. Trotzdem verbringen sie die Hälfte ihrer Zeit mit Dateneingabe statt sich um Mieter und Eigentümer zu kümmern.",
  },
];

const solutions = [
  {
    title: "Rechnungseingang",
    desc: "PDFs werden automatisch ausgelesen, kategorisiert und den richtigen Objekten zugeordnet. Sie geben nur noch frei — kein Abtippen mehr.",
    flow: ["PDF eingang", "Automatisch ausgelesen", "Objekt zugeordnet", "Freigabe"],
  },
  {
    title: "Nebenkostenabrechnung",
    desc: "Verbrauchsdaten werden automatisch aus Versorger-Abrechnungen erfasst, Verteilerschlüssel angewendet, fertige Einzelabrechnungen generiert.",
    flow: ["Verbrauchsdaten", "Verteilerschlüssel", "Berechnung", "Fertige Abrechnung"],
  },
  {
    title: "DATEV-Export",
    desc: "Buchungssätze werden automatisch erstellt und im richtigen Format an Ihren Steuerberater übergeben. Kein manuelles Zusammenstellen mehr.",
    flow: ["Buchungsdaten", "Automatische Kontierung", "DATEV-Format", "Export"],
  },
  {
    title: "Zahlungsverfolgung",
    desc: "Offene Posten werden automatisch mit Bankeingängen abgeglichen. Bei Rückständen werden gestufte Mahnungen vorbereitet — freundlich, professionell, rechtssicher.",
    flow: ["Bankabgleich", "Offene Posten", "Mahnung vorbereitet", "Dokumentiert"],
  },
];

const results = [
  { value: "Von 20h auf 3h", before: "vorher: 20 Stunden", label: "Wöchentlicher Buchhaltungsaufwand" },
  { value: "98%", before: "vorher: alles manuell", label: "Weniger manuelle Dateneingabe" },
  { value: "< 3 Monate", before: "", label: "Amortisationszeit" },
];

const pricingPlans = [
  {
    name: "Bis 10 Mitarbeiter",
    setup: "2.500 €",
    monthly: "400 €/Monat",
    features: "Rechnungsverarbeitung, DATEV-Export, Zahlungsverfolgung, Mahnwesen",
  },
  {
    name: "Wachstum (10-50 MA)",
    setup: "3.500 €",
    monthly: "600 €/Monat",
    features: "Alles aus Paket 1 + Nebenkostenabrechnung, Eigentümer-Reporting, Priority Support",
  },
];

const faqItems = [
  {
    question: "Funktioniert das mit meiner Hausverwaltungssoftware?",
    answer:
      "Ja. Das System integriert sich mit gängiger Software wie Haufe PowerHaus, DOMUS, Immoware, Karthago und anderen. Falls Ihre Software eine API oder Export-Funktion hat, können wir anbinden. Im Erstgespräch klären wir die Kompatibilität.",
  },
  {
    question: "Was passiert mit Sonderfällen?",
    answer:
      "Das System lernt Ihre wiederkehrenden Muster. Sonderfälle wie ungewöhnliche Rechnungsformate oder Einmal-Lieferanten werden markiert und Ihnen zur manuellen Prüfung vorgelegt — statt stillschweigend falsch verbucht.",
  },
  {
    question: "Wie läuft die Einrichtung ab?",
    answer:
      "Woche 1: Analyse Ihrer aktuellen Prozesse und Systeme. Woche 2-3: Einrichtung und Anbindung. Woche 4: Testlauf mit echten Daten. Danach: Livegang mit Begleitung. Sie müssen nichts installieren — alles läuft cloud-basiert.",
  },
  {
    question: "Sind meine Daten sicher?",
    answer:
      "Ja. Alle Daten werden ausschließlich auf deutschen/EU-Servern verarbeitet und gespeichert. Ich bin DSGVO-konform, schließe einen AV-Vertrag ab und verschlüsseln alle Daten in Transit und at Rest.",
  },
];

function HausverwaltungContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/4 via-transparent to-background pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/60 backdrop-blur-sm text-sm text-muted mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-light animate-pulse" />
            Speziell für Hausverwaltungen
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
            Nie wieder Belege abtippen —{" "}
            <span className="stat-highlight">Buchhaltung auf Autopilot</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            Ich automatisiere Ihre Rechnungsverarbeitung,
            Nebenkostenabrechnungen und DATEV-Übergabe. Sie sparen 15+ Stunden
            pro Woche.
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
            {heroStats.map((stat, i) => (
              <div key={i} className="p-5 rounded-xl border border-border bg-surface/60 backdrop-blur-sm">
                <div className="text-3xl font-bold stat-highlight mb-1">{stat.value}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono text-accent-light uppercase tracking-widest mb-4 block text-center">
            Das Problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-center">
            Kennen Sie das aus Ihrer Hausverwaltung?
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed mb-12 text-center">
            Typische Herausforderungen in der Hausverwaltung, die täglich Zeit
            und Nerven kosten:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {problems.map((item, i) => (
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
            Was ich automatisiere
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed mb-12 text-center">
            Vier Systeme, die den Verwaltungsalltag in Ihrer Hausverwaltung
            komplett verändern:
          </p>

          <div className="space-y-6">
            {solutions.map((sol, idx) => (
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
                        {stepIdx < sol.flow.length - 1 && <span className="text-border">&rarr;</span>}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono text-accent-light uppercase tracking-widest mb-4 block">
            Ergebnisse
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
            Was Hausverwaltungen mit dynvon erreichen
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {results.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-border bg-surface/60">
                <div className="text-4xl font-bold stat-highlight mb-1">{item.value}</div>
                {item.before && (
                  <div className="text-xs text-muted line-through mb-2">{item.before}</div>
                )}
                {!item.before && <div className="mb-2" />}
                <div className="text-sm font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono text-accent-light uppercase tracking-widest mb-4 block">
            Preise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Transparente Preise
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            Keine versteckten Kosten. Setup einmalig, danach monatliche
            Pauschale.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-2xl border border-border bg-surface/60 text-left"
              >
                <h3 className="text-lg font-bold mb-6">{plan.name}</h3>

                <div className="mb-2">
                  <span className="text-3xl font-bold stat-highlight">{plan.setup}</span>
                  <span className="text-sm text-muted ml-2">Setup (einmalig)</span>
                </div>

                <div className="mb-6">
                  <span className="text-2xl font-bold stat-highlight">{plan.monthly}</span>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-muted text-[15px] leading-relaxed">
                    {plan.features}
                  </p>
                </div>
                <a href="https://calendar.app.google/qJnC2hS15NJ1XxVcA" target="_blank" rel="noopener noreferrer" className="mt-6 block w-full text-center py-3 px-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-all text-sm min-h-[44px]">Demo vereinbaren</a>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted mt-8">
            Amortisiert sich in unter 3 Monaten.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono text-accent-light uppercase tracking-widest mb-4 block text-center">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 text-center">
            Häufige Fragen
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-surface/60 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
                  >
                    <span className="font-bold text-[15px] sm:text-base">
                      {item.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-muted shrink-0 transition-transform duration-200 ${
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
                    <div className="px-6 pb-6">
                      <p className="text-muted text-[15px] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
                Aus Nürnberg arbeite ich mit Hausverwaltungen in ganz Deutschland
                zusammen und automatisiere Rechnungsverarbeitung, Mahnwesen und
                Eigentümer-Kommunikation. Meine Python-Systeme laufen 24/7, machen
                keine Fehler und skalieren mit — egal ob 50 oder 500 Einheiten.
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
            Kostenlose 15-Min Demo
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Ich zeige Ihnen live, wie die Automatisierung für Ihre Verwaltung
            aussieht — mit Ihren echten Prozessen, nicht mit Slides.
          </p>

          <a
            href="https://calendar.app.google/qJnC2hS15NJ1XxVcA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 text-lg"
          >
            Demo vereinbaren
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

export default function HausverwaltungPage() {
  return (
    <LanguageProvider>
      <Navigation />
      <HausverwaltungContent />
      <Footer />
    </LanguageProvider>
  );
}
