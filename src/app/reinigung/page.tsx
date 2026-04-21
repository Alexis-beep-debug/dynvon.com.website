"use client";

import { useState, type ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";
import ProposalFlowchart from "@/components/ProposalFlowchart";

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

const CONTENT: Record<Topic, TopicContent> = {
  angebote: {
    heroHeadline: (
      <>
        Angebote in <span className="stat-highlight">5 Minuten</span> statt 2 Stunden
      </>
    ),
    heroSubtitle:
      "Ich automatisiere die Angebotserstellung und das Nachfassen für Gebäudereinigungsunternehmen — damit Sie sich auf Aufträge konzentrieren können, nicht auf Papierkram.",
    heroStats: [
      { value: "95%", label: "Schnellere Angebotserstellung" },
      { value: "0", label: "Fehler bei Flächenberechnung" },
      { value: "2x", label: "Mehr Aufträge pro Monat" },
    ],
    problems: [
      {
        title: "Angebote dauern ewig",
        desc: "Flächen berechnen, Preise nachschlagen, Word-Dokument formatieren — 1-2 Stunden pro Angebot. Bei 20+ Anfragen im Monat ein enormer Zeitfresser.",
      },
      {
        title: "Fehler kosten Geld",
        desc: "Falsche Quadratmeter, vergessene Positionen, veraltete Preise — manuelle Fehler in Angeboten kosten Sie bares Geld oder den Auftrag.",
      },
      {
        title: "Nachfassen geht unter",
        desc: "Angebot verschickt und dann? Ohne System vergessen Sie nachzufassen. Potenzielle Kunden gehen zur Konkurrenz.",
      },
      {
        title: "Keine Übersicht über Leads",
        desc: "Welches Angebot steht noch offen? Wer hat schon zugesagt? Ohne zentrale Übersicht verlieren Sie den Überblick — und Umsatz.",
      },
    ],
    solutionIntro:
      "Drei Systeme, die den Vertrieb in Ihrem Reinigungsunternehmen komplett verändern:",
    solutions: [
      {
        title: "Automatische Angebotserstellung",
        desc: "Ihr Mitarbeiter füllt vor Ort ein einfaches Formular aus — Objektgröße, Reinigungsart, Frequenz. Das System berechnet sofort den Preis, erstellt ein professionelles PDF-Angebot und sendet es direkt an den Kunden. Fertig in unter 5 Minuten.",
        flow: ["Formular", "Berechnung", "PDF-Angebot", "E-Mail an Kunden"],
      },
      {
        title: "Automatisches Nachfassen",
        desc: "Kein Angebot wird mehr vergessen. Das System verfolgt, ob der Kunde das Angebot geöffnet hat, und schickt automatisch eine Erinnerung nach 3, 7 und 14 Tagen. Sie sehen auf einen Blick, welche Leads heiß sind.",
        flow: ["Angebot gesendet", "E-Mail-Tracking", "Auto-Erinnerung", "Lead markiert"],
      },
      {
        title: "Zentrales Lead-Dashboard",
        desc: "Alle Anfragen, offenen Angebote und Abschlüsse zentral an einem Ort. Sie sehen auf einen Blick, welche Kunden nachgefasst werden müssen und welche bereits Umsatz bringen.",
        flow: ["Anfrage", "Angebot offen", "Nachgefasst", "Abschluss"],
      },
    ],
    showFlowchart: true,
    results: [
      { value: "5 Min", before: "vorher: 2 Stunden", label: "Angebotszeit pro Kunde" },
      { value: "2x", before: "vorher: am Limit", label: "Vertriebskapazität verdoppelt" },
      { value: "0", before: "vorher: regelmäßig", label: "Fehler in Angeboten" },
    ],
  },
  buchhaltung: {
    heroHeadline: (
      <>
        Buchhaltung in <span className="stat-highlight">Minuten</span> statt Tagen
      </>
    ),
    heroSubtitle:
      "Ich automatisiere Rechnungsstellung, Mahnwesen und Zahlungsverfolgung für Gebäudereinigungsunternehmen — damit Sie sich auf Aufträge konzentrieren können, nicht auf Papierkram.",
    heroStats: [
      { value: "10h", label: "Gesparte Buchhaltung pro Woche" },
      { value: "0", label: "Vergessene Mahnungen" },
      { value: "100%", label: "Pünktliche Rechnungen" },
    ],
    problems: [
      {
        title: "Rechnungen schreiben raubt Zeit",
        desc: "Jeden Monat stundenlang Rechnungen zusammenklicken, Positionen kontrollieren, PDFs versenden. Zeit, die an anderer Stelle fehlt.",
      },
      {
        title: "Zahlungseingänge prüfen nervt",
        desc: "Ständig ins Konto schauen, Beträge abgleichen, Rechnungen manuell abhaken — reine Fleißarbeit ohne Mehrwert.",
      },
      {
        title: "Mahnungen gehen unter",
        desc: "Überfällige Rechnungen bleiben liegen, weil niemand den Überblick hat. Jede vergessene Mahnung ist Geld, das Sie verschenken.",
      },
      {
        title: "Steuerberater wartet ewig",
        desc: "Belege sortieren, Exports erstellen, Chaos zusammentragen. Der Steuerberater bekommt alles verspätet — und Sie zahlen für seine Mehrarbeit.",
      },
    ],
    solutionIntro:
      "Drei Systeme, die die Buchhaltung in Ihrem Gebäudereinigungsunternehmen komplett übernehmen:",
    solutions: [
      {
        title: "Automatische Rechnungsstellung",
        desc: "Auftrag erledigt → Rechnung fertig. Das System erstellt die Rechnung aus dem Angebot, nummeriert sie korrekt, versendet sie per E-Mail und legt sie revisionssicher ab. Ganz ohne Ihr Zutun.",
        flow: ["Auftrag erledigt", "Rechnung erstellt", "E-Mail an Kunden", "Archiviert"],
      },
      {
        title: "Zahlungsverfolgung auf Autopilot",
        desc: "Bankkonto wird automatisch ausgelesen, Zahlungen werden Rechnungen zugeordnet, offene Posten sauber angezeigt. Sie sehen auf einen Blick, wer noch zahlen muss.",
        flow: ["Kontobewegung", "Abgleich", "Rechnung verbucht", "Offene Posten"],
      },
      {
        title: "Automatisches Mahnwesen",
        desc: "Überfällige Rechnungen werden automatisch erkannt und in freundlicher, gestufter Form angemahnt — ohne dass Sie manuell nachhaken müssen. Ihre Zahlungsquote steigt messbar.",
        flow: ["Fällig-Datum", "Freundliche Erinnerung", "1. Mahnung", "2. Mahnung"],
      },
    ],
    showFlowchart: false,
    results: [
      { value: "10h", before: "vorher: am Wochenende", label: "Gesparte Zeit pro Woche" },
      { value: "100%", before: "vorher: 60-70%", label: "Pünktliche Zahlungsquote" },
      { value: "0", before: "vorher: regelmäßig", label: "Vergessene Mahnungen" },
    ],
  },
};

function ReinigungContent() {
  const [topic, setTopic] = useState<Topic>("buchhaltung");
  const c = CONTENT[topic];

  return (
    <main>
      {/* Topic Chooser */}
      <section className="pt-28 pb-4 sm:pt-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/60 backdrop-blur-sm text-sm text-muted mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-light animate-pulse" />
            Speziell für Reinigungsunternehmen
          </div>
          <p className="text-xs font-mono text-accent-light uppercase tracking-widest mb-4">
            Was ist für Sie interessanter?
          </p>
          <div className="inline-flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-1.5 rounded-2xl border border-border bg-surface/60 backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setTopic("angebote")}
              aria-pressed={topic === "angebote"}
              className={`px-6 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all ${
                topic === "angebote"
                  ? "bg-accent text-white shadow-md shadow-accent/25"
                  : "text-muted hover:text-foreground hover:bg-surface"
              }`}
            >
              Angebote automatisieren
            </button>
            <button
              type="button"
              onClick={() => setTopic("buchhaltung")}
              aria-pressed={topic === "buchhaltung"}
              className={`px-6 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all ${
                topic === "buchhaltung"
                  ? "bg-accent text-white shadow-md shadow-accent/25"
                  : "text-muted hover:text-foreground hover:bg-surface"
              }`}
            >
              Buchhaltung automatisieren
            </button>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="relative pt-8 pb-20 sm:pt-12 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/4 via-transparent to-background pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              Kostenloses Gespräch buchen
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
        </div>
      </section>

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
            In einem kostenlosen 30-Minuten-Gespräch zeige ich Ihnen konkret, welche
            Prozesse in Ihrem Gebäudereinigungsunternehmen automatisiert werden können —
            und wie viel Zeit und Geld Sie damit pro Woche zurückgewinnen.
          </p>

          <a
            href="https://calendar.app.google/qJnC2hS15NJ1XxVcA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 text-lg"
          >
            Kostenloses Gespräch buchen
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <p className="mt-6 text-sm text-muted">
            Keine Kosten, kein Risiko — nur ein ehrliches Gespräch über Ihre Möglichkeiten.
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
