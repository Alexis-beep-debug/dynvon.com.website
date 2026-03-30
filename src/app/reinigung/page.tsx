"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";
import ProposalFlowchart from "@/components/ProposalFlowchart";

function ReinigungContent() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/4 via-transparent to-background pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/60 backdrop-blur-sm text-sm text-muted mb-8">
            <span className="w-2 h-2 rounded-full bg-accent-light animate-pulse" />
            Speziell für Reinigungsunternehmen
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
            Angebote in <span className="stat-highlight">5 Minuten</span> statt 2 Stunden
          </h1>

          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            Ich automatisiere die Angebotserstellung, Buchhaltung und Kundenkommunikation
            für Gebäudereinigungsunternehmen — damit Sie sich auf Aufträge konzentrieren
            können, nicht auf Papierkram.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://calendar.app.google/hnhhsonYaR6LrChw7"
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
            {[
              { value: "95%", label: "Schnellere Angebotserstellung" },
              { value: "0", label: "Fehler bei Flächenberechnung" },
              { value: "2x", label: "Mehr Aufträge pro Monat" },
            ].map((stat, i) => (
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
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 text-center">
            Kennen Sie das?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
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
                title: "Papierkram statt Aufträge",
                desc: "Rechnungen schreiben, Zahlungen prüfen, Mahnungen verschicken — Zeit, die Sie besser für die Akquise neuer Kunden nutzen sollten.",
              },
            ].map((item, i) => (
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
            Was ich für Sie automatisiere
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed mb-12 text-center">
            Drei Systeme, die Ihren Arbeitsalltag komplett verändern:
          </p>

          <div className="space-y-6">
            {/* 1. Angebote */}
            <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface/60">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-accent/10 text-accent-light flex items-center justify-center font-bold">1</span>
                <h3 className="text-xl font-bold">Automatische Angebotserstellung</h3>
              </div>
              <p className="text-muted text-[15px] leading-relaxed mb-4">
                Ihr Mitarbeiter füllt vor Ort ein einfaches Formular aus — Objektgröße, Reinigungsart,
                Frequenz. Das System berechnet sofort den Preis, erstellt ein professionelles PDF-Angebot
                und sendet es direkt an den Kunden. Fertig in unter 5 Minuten.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-muted overflow-x-auto pb-1">
                <span className="px-2 py-1 bg-green-500/10 text-green-600 rounded border border-green-500/20 whitespace-nowrap">Formular</span>
                <span className="text-border">&rarr;</span>
                <span className="px-2 py-1 bg-accent/10 text-accent rounded border border-accent/20 whitespace-nowrap">Berechnung</span>
                <span className="text-border">&rarr;</span>
                <span className="px-2 py-1 bg-purple-500/10 text-purple-600 rounded border border-purple-500/20 whitespace-nowrap">PDF-Angebot</span>
                <span className="text-border">&rarr;</span>
                <span className="px-2 py-1 bg-amber-500/10 text-amber-600 rounded border border-amber-500/20 whitespace-nowrap">E-Mail an Kunden</span>
              </div>
            </div>

            {/* 2. Nachfassen */}
            <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface/60">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-accent/10 text-accent-light flex items-center justify-center font-bold">2</span>
                <h3 className="text-xl font-bold">Automatisches Nachfassen</h3>
              </div>
              <p className="text-muted text-[15px] leading-relaxed mb-4">
                Kein Angebot wird mehr vergessen. Das System verfolgt, ob der Kunde das Angebot
                geöffnet hat, und schickt automatisch eine Erinnerung nach 3, 7 und 14 Tagen.
                Sie sehen auf einen Blick, welche Leads heiß sind.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-muted overflow-x-auto pb-1">
                <span className="px-2 py-1 bg-green-500/10 text-green-600 rounded border border-green-500/20 whitespace-nowrap">Angebot gesendet</span>
                <span className="text-border">&rarr;</span>
                <span className="px-2 py-1 bg-accent/10 text-accent rounded border border-accent/20 whitespace-nowrap">E-Mail-Tracking</span>
                <span className="text-border">&rarr;</span>
                <span className="px-2 py-1 bg-purple-500/10 text-purple-600 rounded border border-purple-500/20 whitespace-nowrap">Auto-Erinnerung</span>
                <span className="text-border">&rarr;</span>
                <span className="px-2 py-1 bg-amber-500/10 text-amber-600 rounded border border-amber-500/20 whitespace-nowrap">Lead markiert</span>
              </div>
            </div>

            {/* 3. Buchhaltung */}
            <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface/60">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-accent/10 text-accent-light flex items-center justify-center font-bold">3</span>
                <h3 className="text-xl font-bold">Buchhaltung auf Autopilot</h3>
              </div>
              <p className="text-muted text-[15px] leading-relaxed mb-4">
                Rechnungen werden automatisch erstellt und versendet. Zahlungseingänge geprüft.
                Überfällige Rechnungen automatisch angemahnt. Ihr Steuerberater bekommt
                alles fix und fertig — ohne dass Sie einen Finger rühren.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-muted overflow-x-auto pb-1">
                <span className="px-2 py-1 bg-green-500/10 text-green-600 rounded border border-green-500/20 whitespace-nowrap">Auftrag erledigt</span>
                <span className="text-border">&rarr;</span>
                <span className="px-2 py-1 bg-accent/10 text-accent rounded border border-accent/20 whitespace-nowrap">Rechnung erstellt</span>
                <span className="text-border">&rarr;</span>
                <span className="px-2 py-1 bg-purple-500/10 text-purple-600 rounded border border-purple-500/20 whitespace-nowrap">Zahlung geprüft</span>
                <span className="text-border">&rarr;</span>
                <span className="px-2 py-1 bg-amber-500/10 text-amber-600 rounded border border-amber-500/20 whitespace-nowrap">Mahnung bei Verzug</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flowchart */}
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

          <ProposalFlowchart />
        </div>
      </section>

      {/* Social Proof / Results */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono text-accent-light uppercase tracking-widest mb-4 block">
            Ergebnisse
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
            Was meine Kunden erreicht haben
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                value: "5 Min",
                before: "vorher: 2 Stunden",
                label: "Angebotszeit pro Kunde",
              },
              {
                value: "2x",
                before: "vorher: am Limit",
                label: "Vertriebskapazität verdoppelt",
              },
              {
                value: "0",
                before: "vorher: regelmäßig",
                label: "Fehler in Angeboten",
              },
            ].map((item, i) => (
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
                Ich helfe Reinigungsunternehmen, ihre Verwaltungsarbeit zu automatisieren.
                Meine Systeme laufen 24/7, machen keine Fehler und wachsen mit Ihrem
                Unternehmen mit. Über 15 Automatisierungsprojekte erfolgreich umgesetzt.
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
            Bereit, Ihren Verwaltungsaufwand zu halbieren?
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            In einem kostenlosen 30-Minuten-Gespräch zeige ich Ihnen genau, welche
            Prozesse in Ihrem Reinigungsunternehmen automatisiert werden können — und
            wie viel Zeit Sie damit pro Woche zurückgewinnen.
          </p>

          <a
            href="https://calendar.app.google/hnhhsonYaR6LrChw7"
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
