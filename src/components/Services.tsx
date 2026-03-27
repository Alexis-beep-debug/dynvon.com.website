"use client";

import { useLanguage } from "@/lib/LanguageContext";

const icons: Record<string, React.ReactNode> = {
  receipt: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
    </svg>
  ),
  users: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  mail: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  code: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
};

// How it works — small, subtle flow for the tech-curious
const howItWorks: Record<string, { en: string; de: string }> = {
  receipt: {
    en: "Bank account → automatic sorting → invoice creation → payment reminders",
    de: "Bankkonto → automatische Sortierung → Rechnungserstellung → Zahlungserinnerungen",
  },
  users: {
    en: "Intake form → price calculation → proposal PDF → email to client",
    de: "Aufnahmeformular → Preisberechnung → Angebots-PDF → E-Mail an Kunden",
  },
  mail: {
    en: "New lead → welcome email → follow-up sequence → CRM updated",
    de: "Neuer Lead → Willkommens-E-Mail → Nachfass-Sequenz → CRM aktualisiert",
  },
  code: {
    en: "Tool A changes → all connected tools update automatically",
    de: "Tool A ändert sich → alle verbundenen Tools aktualisieren sich automatisch",
  },
};

export default function Services() {
  const { t, locale } = useLanguage();

  return (
    <section id="services" className="py-24 sm:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-accent-light uppercase tracking-widest mb-4 block">
            {locale === "en" ? "Services" : "Leistungen"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            {t.services.title}
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {t.services.cards.map((card, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 rounded-2xl border border-border bg-surface/30 hover:bg-surface-light hover:border-accent/30 transition-all duration-300"
            >
              {/* Number */}
              <span className="absolute top-6 right-6 text-5xl font-bold text-border/30 group-hover:text-accent/10 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent-light flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                {icons[card.icon]}
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-muted text-[15px] leading-relaxed mb-4">
                {card.description}
              </p>

              {/* How it works — subtle, for the curious */}
              <div className="pt-3 border-t border-border/50">
                <p className="text-xs text-muted/60 italic">
                  {howItWorks[card.icon]?.[locale]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom differentiator — business language */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-accent/20 bg-accent/5 text-center">
          <p className="text-[15px] text-muted leading-relaxed max-w-2xl mx-auto">
            {locale === "en" ? (
              <>
                <strong className="text-foreground">Why it works better than DIY tools:</strong>{" "}
                Simple automation tools break when things get complex. I build{" "}
                <strong className="text-accent-light">custom systems</strong>{" "}
                that handle edge cases, recover from errors automatically, and grow with your business.
              </>
            ) : (
              <>
                <strong className="text-foreground">Warum das besser funktioniert als Standardtools:</strong>{" "}
                Einfache Automatisierungstools versagen bei Komplexität. Ich baue{" "}
                <strong className="text-accent-light">maßgeschneiderte Systeme</strong>,{" "}
                die Sonderfälle abfangen, Fehler automatisch beheben und mit Ihrem Unternehmen mitwachsen.
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
