"use client";

import { LanguageProvider, useLanguage } from "@/lib/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

function DatenschutzContent() {
  const { locale } = useLanguage();

  const en = locale === "en";

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="text-sm text-accent-light hover:text-accent transition-colors mb-6 inline-block"
        >
          &larr; {en ? "Back to Home" : "Zurück zur Startseite"}
        </a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
          {en ? "Privacy Policy" : "Datenschutzerklärung"}
        </h1>

        <div className="space-y-8 text-sm text-muted leading-relaxed">
          {/* 1. Überblick */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              {en ? "1. Overview" : "1. Datenschutz auf einen Blick"}
            </h2>
            <h3 className="text-base font-medium text-foreground mb-2">
              {en ? "General Information" : "Allgemeine Hinweise"}
            </h3>
            <p>
              {en
                ? "The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data by which you can be personally identified."
                : "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können."}
            </p>
          </section>

          {/* 2. Verantwortlicher */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              {en ? "2. Data Controller" : "2. Verantwortliche Stelle"}
            </h2>
            <p>
              {en
                ? "The data controller for data processing on this website is:"
                : "Verantwortlich für die Datenverarbeitung auf dieser Website ist:"}
            </p>
            <p className="mt-2">
              Alexis Bethke-Pittadakis
              <br />
              [Straße + Hausnummer]
              <br />
              [PLZ] Nürnberg
              <br />
              {en ? "Germany" : "Deutschland"}
              <br />
              E-Mail:{" "}
              <a
                href="mailto:alexis@dynvon.com"
                className="text-accent-light hover:text-accent transition-colors"
              >
                alexis@dynvon.com
              </a>
            </p>
          </section>

          {/* 3. Datenerfassung */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              {en
                ? "3. Data Collection on This Website"
                : "3. Datenerfassung auf dieser Website"}
            </h2>

            <h3 className="text-base font-medium text-foreground mb-2 mt-4">
              {en ? "Server Log Files" : "Server-Log-Dateien"}
            </h3>
            <p>
              {en
                ? "The hosting provider automatically collects and stores information in server log files that your browser transmits to us. These are:"
                : "Der Hosting-Provider erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:"}
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>{en ? "Browser type and version" : "Browsertyp und Browserversion"}</li>
              <li>{en ? "Operating system" : "Verwendetes Betriebssystem"}</li>
              <li>{en ? "Referrer URL" : "Referrer URL"}</li>
              <li>
                {en
                  ? "Hostname of the accessing computer"
                  : "Hostname des zugreifenden Rechners"}
              </li>
              <li>{en ? "Time of the server request" : "Uhrzeit der Serveranfrage"}</li>
              <li>{en ? "IP address" : "IP-Adresse"}</li>
            </ul>
            <p className="mt-2">
              {en
                ? "This data is not merged with other data sources. The basis for data processing is Art. 6 (1) (f) GDPR, which permits data processing for the purpose of fulfilling a contract or pre-contractual measures."
                : "Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet."}
            </p>
          </section>

          {/* 4. Cookies */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              {en ? "4. Cookies" : "4. Cookies"}
            </h2>
            <p>
              {en
                ? "This website does not use cookies for tracking or analytics purposes. The language preference is stored in the browser session and is not persisted."
                : "Diese Website verwendet keine Cookies zu Tracking- oder Analysezwecken. Die Spracheinstellung wird in der Browser-Session gespeichert und nicht persistent abgelegt."}
            </p>
          </section>

          {/* 5. Externe Links */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              {en ? "5. External Services" : "5. Externe Dienste"}
            </h2>

            <h3 className="text-base font-medium text-foreground mb-2 mt-4">
              Calendly
            </h3>
            <p>
              {en
                ? "This website contains a link to Calendly for booking appointments. When you click this link, you will be redirected to Calendly's website, which has its own privacy policy. Data processing by Calendly is governed by their privacy policy at:"
                : "Diese Website enthält einen Link zu Calendly zur Terminbuchung. Wenn Sie auf diesen Link klicken, werden Sie auf die Website von Calendly weitergeleitet, die eine eigene Datenschutzerklärung hat. Die Datenverarbeitung durch Calendly unterliegt deren Datenschutzerklärung unter:"}
            </p>
            <a
              href="https://calendly.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light hover:text-accent transition-colors mt-1 inline-block"
            >
              https://calendly.com/privacy
            </a>
          </section>

          {/* 6. Hosting */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              {en ? "6. Hosting" : "6. Hosting"}
            </h2>
            <p>
              {en
                ? "This website is hosted on Railway (Railway Corporation, San Francisco, CA, USA). When you visit this website, your IP address and other data are transmitted to Railway's servers. For more information, see Railway's privacy policy:"
                : "Diese Website wird auf Railway (Railway Corporation, San Francisco, CA, USA) gehostet. Wenn Sie diese Website besuchen, werden Ihre IP-Adresse und andere Daten an die Server von Railway übertragen. Weitere Informationen finden Sie in der Datenschutzerklärung von Railway:"}
            </p>
            <a
              href="https://railway.app/legal/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light hover:text-accent transition-colors mt-1 inline-block"
            >
              https://railway.app/legal/privacy
            </a>
            <p className="mt-2">
              {en
                ? "The use of Railway is based on Art. 6 (1) (f) GDPR. We have a legitimate interest in the reliable presentation of our website."
                : "Die Verwendung von Railway erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer zuverlässigen Darstellung unserer Website."}
            </p>
          </section>

          {/* 7. Betroffenenrechte */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              {en ? "7. Your Rights" : "7. Ihre Rechte"}
            </h2>
            <p>
              {en
                ? "You have the following rights regarding your personal data:"
                : "Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:"}
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>
                {en
                  ? "Right of access (Art. 15 GDPR)"
                  : "Recht auf Auskunft (Art. 15 DSGVO)"}
              </li>
              <li>
                {en
                  ? "Right to rectification (Art. 16 GDPR)"
                  : "Recht auf Berichtigung (Art. 16 DSGVO)"}
              </li>
              <li>
                {en
                  ? "Right to erasure (Art. 17 GDPR)"
                  : "Recht auf Löschung (Art. 17 DSGVO)"}
              </li>
              <li>
                {en
                  ? "Right to restriction of processing (Art. 18 GDPR)"
                  : "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)"}
              </li>
              <li>
                {en
                  ? "Right to data portability (Art. 20 GDPR)"
                  : "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)"}
              </li>
              <li>
                {en
                  ? "Right to object (Art. 21 GDPR)"
                  : "Widerspruchsrecht (Art. 21 DSGVO)"}
              </li>
            </ul>
            <p className="mt-3">
              {en
                ? "To exercise these rights, please contact us at: alexis@dynvon.com"
                : "Zur Ausübung dieser Rechte kontaktieren Sie uns bitte unter: alexis@dynvon.com"}
            </p>
            <p className="mt-2">
              {en
                ? "You also have the right to lodge a complaint with a supervisory authority (Art. 77 GDPR). The competent authority is the Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)."
                : "Sie haben außerdem das Recht, sich bei einer Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Die zuständige Behörde ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA)."}
            </p>
          </section>

          {/* Hinweis */}
          <section className="p-4 rounded-lg border border-border bg-surface/50">
            <p className="text-xs text-muted">
              {en
                ? "Note: Please replace the placeholder values [in brackets] with your actual data before going live. This privacy policy is a template and may need to be reviewed by a legal professional."
                : "Hinweis: Bitte ersetze die Platzhalter [in Klammern] mit deinen echten Daten, bevor die Seite live geht. Diese Datenschutzerklärung ist ein Muster und sollte ggf. von einem Rechtsanwalt geprüft werden."}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default function DatenschutzPage() {
  return (
    <LanguageProvider>
      <Navigation />
      <DatenschutzContent />
      <Footer />
    </LanguageProvider>
  );
}
