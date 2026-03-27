"use client";

import { LanguageProvider, useLanguage } from "@/lib/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

function ImpressumContent() {
  const { locale } = useLanguage();

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="text-sm text-accent-light hover:text-accent transition-colors mb-6 inline-block"
        >
          &larr; {locale === "en" ? "Back to Home" : "Zurück zur Startseite"}
        </a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
          {locale === "en" ? "Legal Notice (Impressum)" : "Impressum"}
        </h1>

        <div className="space-y-8 text-sm text-muted leading-relaxed">
          {/* Angaben gemäß § 5 TMG */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              {locale === "en"
                ? "Information according to § 5 TMG"
                : "Angaben gemäß § 5 TMG"}
            </h2>
            <p>
              Alexis Bethke-Pittadakis
              <br />
              Bethke &amp; Partner
              <br />
              Ostendstraße 111
              <br />
              90482 Nürnberg
              <br />
              {locale === "en" ? "Germany" : "Deutschland"}
            </p>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              {locale === "en" ? "Contact" : "Kontakt"}
            </h2>
            <p>
              {locale === "en" ? "Phone" : "Telefon"}: 0176 75726791
            </p>
          </section>

          {/* Steuernummer */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              {locale === "en" ? "Tax Number" : "Steuernummer"}
            </h2>
            <p>240/204/71197</p>
          </section>

          {/* Berufsbezeichnung */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              {locale === "en" ? "Professional Title" : "Berufsbezeichnung"}
            </h2>
            <p>
              {locale === "en"
                ? "Freelance IT Consultant / Automation Engineer"
                : "Freiberuflicher IT-Berater / Automation Engineer"}
              <br />
              {locale === "en"
                ? "Awarded in: Germany"
                : "Verliehen in: Deutschland"}
            </p>
          </section>

          {/* Verantwortlich für den Inhalt */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              {locale === "en"
                ? "Responsible for content according to § 55 Abs. 2 RStV"
                : "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV"}
            </h2>
            <p>
              Alexis Bethke-Pittadakis
              <br />
              Ostendstraße 111
              <br />
              90482 Nürnberg
            </p>
          </section>

          {/* Streitschlichtung */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              {locale === "en"
                ? "Dispute Resolution"
                : "Streitschlichtung"}
            </h2>
            <p>
              {locale === "en"
                ? "The European Commission provides a platform for online dispute resolution (OS):"
                : "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:"}
              <br />
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-light hover:text-accent transition-colors"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-3">
              {locale === "en"
                ? "We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board."
                : "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."}
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}

export default function ImpressumPage() {
  return (
    <LanguageProvider>
      <Navigation />
      <ImpressumContent />
      <Footer />
    </LanguageProvider>
  );
}
