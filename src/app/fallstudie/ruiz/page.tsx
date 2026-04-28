"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";

const RUIZ_URL = "https://xn--broreinigung-ruiz-22b.de/";
const RUIZ_LINK_PROPS = {
  href: RUIZ_URL,
  target: "_blank" as const,
  rel: "noopener",
};

const challenges = [
  {
    title: "Angebotserstellung: 90 Minuten pro Anfrage",
    desc: "Flächen berechnen, Preise nachschlagen, Word-Dokument formatieren, PDF exportieren, per Mail senden. Bei 15–20 Anfragen pro Monat ein massiver Engpass.",
  },
  {
    title: "Monatsrechnungen für 30+ Kunden manuell erstellen",
    desc: "Stundenzettel der 20 Mitarbeiter zusammentragen, Leistungen pro Objekt zuordnen, Rechnungen schreiben, versenden. 10+ Stunden pro Woche reine Verwaltungsarbeit.",
  },
  {
    title: "Zahlungseingänge manuell prüfen",
    desc: "Kontoauszüge durchgehen, Beträge mit Rechnungen abgleichen, offene Posten nachverfolgen. Vergessene Mahnungen und verspätete Zahlungen waren die Folge.",
  },
  {
    title: "Steuerberater-Übergabe: Monatliches Ritual",
    desc: "Belege sammeln, sortieren, DATEV-konform aufbereiten — jeden Monat das gleiche Ritual.",
  },
];

const solutions = [
  {
    title: "Automatische Angebotserstellung",
    desc: "Jonathan oder sein Team geben Objektdaten in ein einfaches Formular ein: Fläche pro Raumtyp, Reinigungsart, Frequenz. Das System kalkuliert den Preis nach dem hinterlegten Schlüssel und erstellt ein professionelles PDF-Angebot — fertig in unter 5 Minuten, direkt an den Kunden versendet.",
  },
  {
    title: "Automatische Rechnungserstellung",
    desc: "Zum Monatsende werden aus den erfassten Leistungen und Stundenzetteln automatisch Rechnungen generiert — korrekt nummeriert, dem richtigen Objekt zugeordnet, per E-Mail versendet und in Lexoffice verbucht. Kein manuelles Zusammentragen mehr.",
  },
  {
    title: "Automatischer Bankabgleich",
    desc: "Das System liest Kontobewegungen automatisch aus, matcht Zahlungseingänge mit offenen Rechnungen und markiert bezahlte Posten. Bei Verzug werden gestufte Mahnungen vorbereitet — freundlich, professionell, ohne dass jemand daran denken muss.",
  },
  {
    title: "DATEV-Export auf Knopfdruck",
    desc: "Alle Buchungssätze werden automatisch im DATEV-Format erstellt. Der Steuerberater bekommt monatlich einen sauberen Export — ohne Nachfragen, ohne Korrekturen.",
  },
];

const metrics = [
  { value: "90 Min → 5 Min", label: "Angebotszeit pro Kunde" },
  { value: "10h+", label: "Eingesparte Bürozeit pro Woche" },
  { value: "0", label: "Fehler in Rechnungen & Angeboten" },
];

function CaseStudyContent() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/4 via-transparent to-background pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/60 backdrop-blur-sm text-sm text-muted mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-light animate-pulse" />
            Fallstudie
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
            Wie{" "}
            <a {...RUIZ_LINK_PROPS} className="hover:underline">
              Ruiz Gebäudereinigung
            </a>{" "}
            <span className="stat-highlight">10 Stunden pro Woche</span> einspart
          </h1>

          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            <a {...RUIZ_LINK_PROPS} className="text-accent-light hover:underline">
              Ruiz Gebäudereinigung Hamburg
            </a>{" "}
            betreut mit über 20 festangestellten Mitarbeitern mehr als 50 Objekte in Hamburg.
            Durch Automatisierung von Angeboten, Rechnungen und Buchhaltung wurde die
            Verwaltungsarbeit drastisch reduziert.
          </p>

          {/* Client info bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-muted">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              20+ Mitarbeiter
            </span>
            <span className="hidden sm:inline text-border">·</span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              50+ Objekte
            </span>
            <span className="hidden sm:inline text-border">·</span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Hamburg
            </span>
            <span className="hidden sm:inline text-border">·</span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Seit 2019
            </span>
          </div>
        </div>
      </section>

      {/* The Client */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono text-accent-light uppercase tracking-widest mb-4 block text-center">
            Der Kunde
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-center">
            <a {...RUIZ_LINK_PROPS} className="hover:underline">
              Ruiz Gebäudereinigung Hamburg
            </a>
          </h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-muted text-lg leading-relaxed text-center">
              <a {...RUIZ_LINK_PROPS} className="text-accent-light hover:underline">
                Ruiz Gebäudereinigung
              </a>{" "}
              wird von Jonathan Ruiz als Inhaber &amp; Geschäftsführer geführt. Das Unternehmen
              beschäftigt über 20 festangestellte Mitarbeiter — keine Subunternehmer. Spezialisiert
              auf professionelle Büroreinigung in Hamburg, betreut das Team Kanzleien,
              Steuerberatungen, IT-Unternehmen und Coworking Spaces. Mit über 50 betreuten
              Objekten, mehr als 30 Kunden und einer 5.0-Sterne-Bewertung auf Google (29 Bewertungen)
              gehört Ruiz Gebäudereinigung zu den führenden Reinigungsunternehmen in Hamburg.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge (Vorher) */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono text-accent-light uppercase tracking-widest mb-4 block text-center">
            Vorher
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-center">
            Die Herausforderung
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed mb-12 text-center">
            Wachsender Betrieb, aber die Verwaltung skalierte nicht mit:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {challenges.map((item, i) => (
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

      {/* Solution (Was wir umgesetzt haben) */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono text-accent-light uppercase tracking-widest mb-4 block text-center">
            Die Lösung
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-center">
            Was wir umgesetzt haben
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed mb-12 text-center">
            Vier Automatisierungen, die den gesamten Verwaltungsaufwand auf ein Minimum reduzieren:
          </p>

          <div className="space-y-6">
            {solutions.map((sol, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-2xl border border-border bg-surface/60">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold">{sol.title}</h3>
                </div>
                <p className="text-muted text-[15px] leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results (Ergebnisse) */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono text-accent-light uppercase tracking-widest mb-4 block">
            Ergebnisse
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
            Messbare Ergebnisse
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            {metrics.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-border bg-surface/60">
                <div className="text-4xl font-bold stat-highlight mb-2">{item.value}</div>
                <div className="text-sm font-medium">{item.label}</div>
              </div>
            ))}
          </div>

          <p className="text-muted text-lg max-w-3xl mx-auto leading-relaxed">
            Durch die Automatisierung von Angebotserstellung, Rechnungslegung und
            Zahlungsverfolgung kann sich das Team von{" "}
            <a {...RUIZ_LINK_PROPS} className="text-accent-light hover:underline">
              Ruiz Gebäudereinigung
            </a>{" "}
            vollständig auf ihr Kerngeschäft konzentrieren: erstklassige Reinigung für
            ihre Kunden in Hamburg.
          </p>
        </div>
      </section>

      {/* Quote */}
      {/* NOTE: This quote needs Jonathan Ruiz's approval before going live */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-8 sm:p-12 rounded-2xl border border-border bg-surface/60">
            {/* Large quotation mark */}
            <svg
              className="absolute top-6 left-6 w-12 h-12 text-accent/20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
            </svg>

            <blockquote className="relative z-10">
              <p className="text-lg sm:text-xl leading-relaxed mb-8 italic">
                &ldquo;Die Angebotserstellung hat sich komplett verändert — was früher 90 Minuten
                gedauert hat, ist jetzt in 5 Minuten erledigt. Und die Buchhaltung läuft im
                Hintergrund, ohne dass ich mich darum kümmern muss. Das hat uns enorm entlastet.&rdquo;
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent-light font-bold text-lg">
                  JR
                </div>
                <div>
                  <div className="font-bold">Jonathan Ruiz</div>
                  <div className="text-sm text-muted">
                    Inhaber &amp; Geschäftsführer,{" "}
                    <a {...RUIZ_LINK_PROPS} className="text-accent-light hover:underline">
                      Ruiz Gebäudereinigung Hamburg
                    </a>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* About Ruiz */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl border border-border bg-surface/60">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-white flex items-center justify-center p-2 border border-border">
                <img
                  src="https://xn--broreinigung-ruiz-22b.de/wp-content/uploads/2021/03/Ruiz-Gebaeudereinigung-Hamburg-Logo-1.webp"
                  alt="Ruiz Gebäudereinigung Hamburg Logo"
                  width={80}
                  height={80}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  <a {...RUIZ_LINK_PROPS} className="hover:underline">
                    Ruiz Gebäudereinigung Hamburg
                  </a>
                </h3>
                <p className="text-muted text-[15px] leading-relaxed mb-4">
                  Ruiz Gebäudereinigung ist spezialisiert auf professionelle Büroreinigung in
                  Hamburg — für Kanzleien, Steuerberatungen, IT-Unternehmen und Coworking Spaces.
                  Mit über 20 festangestellten Mitarbeitern, monatlich kündbaren Verträgen und
                  digitalisierten Prozessen setzt das Unternehmen Maßstäbe in der Branche.
                </p>
                <a
                  {...RUIZ_LINK_PROPS}
                  className="inline-flex items-center gap-2 text-accent-light hover:underline text-sm font-medium"
                >
                  Mehr über Ruiz Gebäudereinigung
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
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
            Ähnliche Ergebnisse für Ihr Reinigungsunternehmen?
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            In einem kostenlosen 15-Minuten-Gespräch zeige ich Ihnen, welche Prozesse in Ihrem
            Betrieb automatisiert werden können — und wie schnell sich das rechnet.
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

export default function RuizCaseStudyPage() {
  return (
    <LanguageProvider>
      <Navigation />
      <CaseStudyContent />
      <Footer />
    </LanguageProvider>
  );
}
