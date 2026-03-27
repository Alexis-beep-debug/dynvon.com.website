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
              dynvon — Business Process Automation
              <br />
              {/* TODO: Straße + Hausnummer eintragen */}
              [Straße + Hausnummer]
              <br />
              [PLZ] Nürnberg
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
              E-Mail:{" "}
              <a
                href="mailto:alexis@dynvon.com"
                className="text-accent-light hover:text-accent transition-colors"
              >
                alexis@dynvon.com
              </a>
              <br />
              {/* TODO: Telefonnummer optional eintragen */}
              {locale === "en" ? "Phone" : "Telefon"}: [Telefonnummer]
            </p>
          </section>

          {/* Umsatzsteuer-ID */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              {locale === "en" ? "VAT ID" : "Umsatzsteuer-ID"}
            </h2>
            <p>
              {locale === "en"
                ? "VAT identification number according to § 27a UStG:"
                : "Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:"}
              <br />
              {/* TODO: USt-IdNr. eintragen */}
              [USt-IdNr.]
            </p>
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
              [Straße + Hausnummer]
              <br />
              [PLZ] Nürnberg
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

          {/* Hinweis */}
          <section className="p-4 rounded-lg border border-border bg-surface/50">
            <p className="text-xs text-muted">
              {locale === "en"
                ? "Note: Please replace the placeholder values [in brackets] with your actual data before going live."
                : "Hinweis: Bitte ersetze die Platzhalter [in Klammern] mit deinen echten Daten, bevor die Seite live geht."}
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
