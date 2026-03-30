"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { locale } = useLanguage();

  const credentials = [
    {
      title: "Vanderbilt University",
      detail: locale === "en" ? "Certification: AI & Automation" : "Zertifizierung: KI & Automatisierung",
    },
    {
      title: "Emory University",
      detail: locale === "en" ? "Certification: Management Consulting" : "Zertifizierung: Management Consulting",
    },
    {
      title: "Microsoft",
      detail: locale === "en" ? "Certification: Business Analytics" : "Zertifizierung: Business Analytics",
    },
  ];

  const metrics = locale === "en"
    ? [
        { value: "15+", label: "Businesses automated" },
        { value: "100%", label: "Client satisfaction" },
        { value: "24/7", label: "Systems running non-stop" },
      ]
    : [
        { value: "15+", label: "Unternehmen automatisiert" },
        { value: "100%", label: "Kundenzufriedenheit" },
        { value: "24/7", label: "Systeme laufen non-stop" },
      ];

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Photo + Text */}
          <div>
            <span className="text-xs font-mono text-accent-light uppercase tracking-widest mb-4 block">
              {locale === "en" ? "About Me" : "Über mich"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Alexis Bethke-Pittadakis
            </h2>

            {/* Profile Photo */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-2 border-accent/30 overflow-hidden mb-6 shadow-lg shadow-accent/10">
              <img
                src="/alexis-opt.webp"
                alt="Alexis Bethke-Pittadakis"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-[15px] text-muted leading-relaxed mb-4">
              {locale === "en"
                ? "I'm based in Nuremberg, Germany. As an automation engineer, I combine business understanding with technical expertise to solve real problems for small businesses."
                : "Ich komme aus Nürnberg. Als Automation Engineer verbinde ich Geschäftsverständnis mit technischem Know-how, um echte Probleme kleiner Unternehmen zu lösen."}
            </p>
            <p className="text-[15px] text-muted leading-relaxed mb-4">
              {locale === "en"
                ? "I help small businesses (1–50 employees) get rid of time-consuming manual tasks. Whether it's bookkeeping, proposals, emails, or data entry — I build systems that handle it automatically."
                : "Ich helfe kleinen Unternehmen (1–50 Mitarbeiter), zeitfressende manuelle Aufgaben loszuwerden. Ob Buchhaltung, Angebote, E-Mails oder Dateneingabe — ich baue Systeme, die das automatisch erledigen."}
            </p>
            <p className="text-[15px] text-muted leading-relaxed">
              {locale === "en"
                ? "My systems run 24/7, don't make mistakes, and grow with your business. No duct-tape solutions — real automation that just works."
                : "Meine Systeme laufen 24/7, machen keine Fehler und wachsen mit Ihrem Unternehmen mit. Keine Notlösungen — echte Automatisierung, die einfach funktioniert."}
            </p>
          </div>

          {/* Right: Credentials & Metrics */}
          <div className="space-y-8">
            {/* Background */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted mb-4">
                {locale === "en" ? "Certifications" : "Zertifizierungen"}
              </h3>
              <div className="space-y-3">
                {credentials.map((cred, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface/30 hover:border-accent/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent-light flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-[15px]">{cred.title}</div>
                      <div className="text-sm text-muted">{cred.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted mb-4">
                {locale === "en" ? "Track Record" : "Erfolgsbilanz"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {metrics.map((metric, i) => (
                  <div key={i} className="text-center p-4 rounded-xl border border-border bg-surface/30">
                    <div className="text-2xl font-bold stat-highlight">{metric.value}</div>
                    <div className="text-xs text-muted mt-1">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* What I work with — business-friendly names */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted mb-4">
                {locale === "en" ? "Tools I Work With" : "Tools mit denen ich arbeite"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Pipedrive",
                  "Lexoffice",
                  "Brevo",
                  "HubSpot",
                  "Airtable",
                  "Make.com",
                  "Google Workspace",
                  "Excel / Sheets",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 text-xs text-muted border border-border rounded-lg bg-surface/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
