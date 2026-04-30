"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";

const GCF_URL = "https://gc-facility.de/";
const GCF_LINK_PROPS = {
  href: GCF_URL,
  target: "_blank" as const,
  rel: "noopener",
};

const challenges = [
  {
    title: "2 Stunden pro Angebot",
    desc: "Für jedes Angebot musste manuell kalkuliert werden: Flächen zusammenrechnen, Preise nachschlagen, Word-Dokument formatieren, als PDF exportieren und per Mail versenden. Bei mehreren Anfragen pro Woche ein massiver Zeitaufwand.",
  },
  {
    title: "Leads gingen zwischen den Systemen verloren",
    desc: "E-Mail-Marketing-Tool und CRM liefen getrennt voneinander. Neue Leads aus Kampagnen landeten im einen System, aber nicht im anderen. Ergebnis: Anfragen blieben liegen, niemand fasste nach.",
  },
  {
    title: "Doppelte Datenpflege fraß Zeit",
    desc: "Kontaktdaten, Lead-Status, Notizen — alles musste manuell in beide Systeme eingetragen werden. Das kostete nicht nur Zeit, sondern führte regelmäßig zu veralteten oder widersprüchlichen Daten.",
  },
  {
    title: "Nachfassen wurde vergessen",
    desc: "Ohne automatische Erinnerungen und ohne Überblick, welche Leads schon kontaktiert wurden, gingen potenzielle Aufträge verloren. Interessenten, die nicht sofort zusagten, rutschten durch.",
  },
];

const solutions = [
  {
    title: "Angebotserstellung mit einem Klick",
    desc: "Ewgeni oder sein Team geben Objektdaten in ein einfaches Formular ein — Fläche, Reinigungsart, Frequenz. Das System kalkuliert nach dem hinterlegten Preisschlüssel, erstellt ein professionelles PDF-Angebot und versendet es direkt an den Kunden. Von 2 Stunden auf einen Klick.",
  },
  {
    title: "CRM und E-Mail-Marketing synchron",
    desc: "Alle Kontakte, Lead-Status und Aktivitäten werden automatisch zwischen CRM und E-Mail-Tool abgeglichen — in Echtzeit, bidirektional. Kein manuelles Kopieren, keine verlorenen Daten.",
  },
  {
    title: "Automatisches Nachfassen",
    desc: "Das System erkennt, wenn ein Lead nicht reagiert, und sendet automatisch Erinnerungen — nach 3, 7 und 14 Tagen. Das Vertriebsteam sieht auf einen Blick, welche Leads heiß sind und wer Aufmerksamkeit braucht.",
  },
  {
    title: "Saubere Daten, ein System der Wahrheit",
    desc: "Alle Kontakt- und Auftragsdaten leben an einem Ort. Keine doppelten Einträge, keine Widersprüche. Der Vertrieb arbeitet schneller, weil die Datenlage stimmt.",
  },
];

const metrics = [
  { value: "2h \u2192 1 Klick", label: "Angebotszeit pro Kunde" },
  { value: "0", label: "Verlorene Leads durch System-L\u00fccken" },
  { value: "100%", label: "CRM-E-Mail-Sync in Echtzeit" },
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
            <a {...GCF_LINK_PROPS} className="hover:underline">
              GC Facility
            </a>{" "}
            <span className="stat-highlight">Angebote per Klick</span> erstellt
            und kein Lead mehr verliert
          </h1>

          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            <a {...GCF_LINK_PROPS} className="text-accent-light hover:underline">
              GC Facility GmbH
            </a>{" "}
            betreut mit über 50 Mitarbeitern Objekte an 10+ Standorten
            deutschlandweit — von Büros über Arztpraxen bis hin zu Großkunden
            wie BARMER und Lufthansa. Durch Automatisierung von
            Angebotserstellung und CRM-Synchronisation wurde der
            Vertriebsprozess grundlegend beschleunigt.
          </p>

          {/* Client info bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-muted">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              50+ Mitarbeiter
            </span>
            <span className="hidden sm:inline text-border">&middot;</span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              10+ Standorte
            </span>
            <span className="hidden sm:inline text-border">&middot;</span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Berlin
            </span>
            <span className="hidden sm:inline text-border">&middot;</span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Meisterbetrieb
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
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10 text-center">
            <a {...GCF_LINK_PROPS} className="hover:underline">
              GC Facility GmbH
            </a>
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center mb-8">
              {/* Team photo */}
              <div className="rounded-2xl overflow-hidden border border-border">
                <img
                  src="https://gc-facility.de/wp-content/uploads/2026/02/Visual-768x773.png"
                  alt="Team von GC Facility GmbH — professionelle Gebäudereinigung"
                  width={768}
                  height={773}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Company info */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-white flex items-center justify-center p-1.5 border border-border">
                    <img
                      src="https://gc-facility.de/wp-content/uploads/2026/02/Group-2-4.png"
                      alt="GC Facility Logo"
                      width={52}
                      height={52}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">
                      <a {...GCF_LINK_PROPS} className="hover:underline">
                        GC Facility
                      </a>
                    </h3>
                    <p className="text-sm text-muted">Berlin &middot; Seit über 7 Jahren</p>
                  </div>
                </div>

                <ul className="space-y-2 text-[15px] text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-light mt-0.5">&bull;</span>
                    <span><strong className="text-foreground">Ewgeni Jussufov</strong> — Geschäftsführer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-light mt-0.5">&bull;</span>
                    <span><strong className="text-foreground">50+ festangestellte</strong> Mitarbeiter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-light mt-0.5">&bull;</span>
                    <span><strong className="text-foreground">10+ Standorte</strong> deutschlandweit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-light mt-0.5">&bull;</span>
                    <span><strong className="text-foreground">Meisterbetrieb</strong>, seit über 7 Jahren</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-light mt-0.5">&bull;</span>
                    <span>Kunden: BARMER, AOK, DAK, Lufthansa, JustWatch</span>
                  </li>
                </ul>

                <a
                  {...GCF_LINK_PROPS}
                  className="inline-flex items-center gap-2 mt-4 text-accent-light hover:underline text-sm font-medium"
                >
                  Website besuchen
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
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
            Wachsender Betrieb, aber der Vertrieb skalierte nicht mit:
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
            Vier Automatisierungen, die den gesamten Vertriebsprozess auf ein neues Level heben:
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
            Durch die Automatisierung von Angebotserstellung und die
            Synchronisation aller Vertriebstools kann sich das Team von{" "}
            <a {...GCF_LINK_PROPS} className="text-accent-light hover:underline">
              GC Facility
            </a>{" "}
            auf das konzentrieren, was zählt: erstklassige Reinigung für ihre
            Kunden in ganz Deutschland.
          </p>
        </div>
      </section>

      {/* Quote */}
      {/* NOTE: This quote needs Ewgeni Jussufov's approval before going live */}
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
                &ldquo;Wir haben vorher ewig an Angeboten gesessen, locker 2 Stunden
                pro Stück. Und unser CRM und das E-Mail-Tool waren nicht verbunden
                — da ist immer wieder was untergegangen. Alexis hat beides gelöst.
                Angebote gehen jetzt mit einem Klick raus, und die Systeme reden
                miteinander. Spart uns jede Woche richtig Zeit.&rdquo;
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent-light font-bold text-lg">
                  EJ
                </div>
                <div>
                  <div className="font-bold">Ewgeni Jussufov</div>
                  <div className="text-sm text-muted">
                    Geschäftsführer,{" "}
                    <a {...GCF_LINK_PROPS} className="text-accent-light hover:underline">
                      GC Facility GmbH
                    </a>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* About GC Facility — dofollow backlink section */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl border border-border bg-surface/60">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-white flex items-center justify-center p-2 border border-border">
                <img
                  src="https://gc-facility.de/wp-content/uploads/2026/02/Group-2-4.png"
                  alt="GC Facility GmbH Logo"
                  width={80}
                  height={80}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  <a {...GCF_LINK_PROPS} className="hover:underline">
                    GC Facility GmbH
                  </a>
                </h3>
                <p className="text-muted text-[15px] leading-relaxed mb-4">
                  <a {...GCF_LINK_PROPS} className="text-accent-light hover:underline">
                    GC Facility
                  </a>{" "}
                  ist spezialisiert auf professionelle Gebäudereinigung für
                  Unternehmen in Berlin und deutschlandweit — von Büroreinigung
                  über Praxisreinigung bis hin zu Bauendreinigung. Als
                  zertifizierter Meisterbetrieb mit über 50 festangestellten
                  Mitarbeitern betreut das Unternehmen namhafte Kunden wie
                  BARMER, AOK, Lufthansa und JustWatch.
                </p>
                <a
                  {...GCF_LINK_PROPS}
                  className="inline-flex items-center gap-2 text-accent-light hover:underline text-sm font-medium"
                >
                  Mehr über GC Facility &rarr;
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

export default function GCFacilityCaseStudyPage() {
  return (
    <LanguageProvider>
      <Navigation />
      <CaseStudyContent />
      <Footer />
    </LanguageProvider>
  );
}
