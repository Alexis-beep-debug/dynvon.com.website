"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative */}
        <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-accent/10 text-accent-light flex items-center justify-center">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          {t.contact.title}
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          {t.contact.subtitle}
        </p>

        {/* CTA Button */}
        <a
          href="https://calendar.app.google/qJnC2hS15NJ1XxVcA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent/25 text-lg"
        >
          {t.contact.cta}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>

        {/* Email */}
        <p className="mt-6 text-muted text-sm">
          {t.contact.email}:{" "}
          <a
            href="mailto:support@dynvon.com"
            className="text-accent-light hover:text-accent transition-colors"
          >
            support@dynvon.com
          </a>
        </p>
      </div>
    </section>
  );
}
