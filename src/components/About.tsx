"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { locale } = useLanguage();

  const credentials = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
        </svg>
      ),
      title: "Vanderbilt University",
      detail: "Generative AI Automation",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
        </svg>
      ),
      title: "Emory University",
      detail: "Management Consulting",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
      title: "Microsoft",
      detail: "Business Analytics",
    },
  ];

  const metrics = locale === "en"
    ? [
        { value: "15+", label: "Automations deployed" },
        { value: "50k+", label: "Lines of production code" },
        { value: "100%", label: "Client satisfaction" },
      ]
    : [
        { value: "15+", label: "Automatisierungen im Einsatz" },
        { value: "50k+", label: "Zeilen Produktionscode" },
        { value: "100%", label: "Kundenzufriedenheit" },
      ];

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text & Photo placeholder */}
          <div>
            <span className="text-xs font-mono text-accent-light uppercase tracking-widest mb-4 block">
              {locale === "en" ? "About Me" : "Über mich"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Alexis Bethke-Pittadakis
            </h2>

            {/* Photo placeholder */}
            <div className="w-full aspect-[4/3] rounded-2xl border border-border bg-surface/30 flex items-center justify-center mb-6 overflow-hidden">
              <div className="text-center text-muted">
                <svg className="w-16 h-16 mx-auto mb-2 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <p className="text-xs">{locale === "en" ? "Photo coming soon" : "Foto folgt"}</p>
              </div>
            </div>

            <p className="text-[15px] text-muted leading-relaxed mb-4">
              {locale === "en"
                ? "I'm an Automation Engineer based in Nuremberg, Germany. I help small businesses (1–25 employees) eliminate manual, repetitive work by building custom Python automation systems."
                : "Ich bin Automation Engineer aus Nürnberg. Ich helfe kleinen Unternehmen (1–25 Mitarbeiter), manuelle und repetitive Arbeit zu eliminieren, indem ich maßgeschneiderte Python-Automatisierungssysteme baue."}
            </p>
            <p className="text-[15px] text-muted leading-relaxed">
              {locale === "en"
                ? "Unlike typical no-code freelancers, I write production-grade Python code deployed on Railway — version-controlled, testable, and built to run 24/7 without breaking."
                : "Im Gegensatz zu typischen No-Code-Freelancern schreibe ich produktionsreifen Python-Code, der auf Railway deployed wird — versionskontrolliert, testbar und gebaut, um 24/7 fehlerfrei zu laufen."}
            </p>
          </div>

          {/* Right: Credentials & Metrics */}
          <div className="space-y-8">
            {/* Certifications */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted mb-4">
                {locale === "en" ? "Education & Certifications" : "Ausbildung & Zertifikate"}
              </h3>
              <div className="space-y-3">
                {credentials.map((cred, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface/30 hover:border-accent/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent-light flex items-center justify-center shrink-0">
                      {cred.icon}
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
                {locale === "en" ? "By the Numbers" : "In Zahlen"}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {metrics.map((metric, i) => (
                  <div key={i} className="text-center p-4 rounded-xl border border-border bg-surface/30">
                    <div className="text-2xl font-bold stat-highlight">{metric.value}</div>
                    <div className="text-xs text-muted mt-1">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted mb-4">
                {locale === "en" ? "Core Skills" : "Kernkompetenzen"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "API Integration",
                  "Business Process Automation",
                  "Data Migration",
                  "Pipedrive",
                  "Lexoffice",
                  "Brevo",
                  "Airtable",
                  "Make.com",
                  "n8n",
                  "HubSpot",
                  "JavaScript",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono text-muted border border-border rounded-lg bg-surface/30"
                  >
                    {skill}
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
