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
              Bethke &amp; Partner
              <br />
              Ostendstraße 111
              <br />
              90482 Nürnberg
              <br />
              {en ? "Germany" : "Deutschland"}
              <br />
              {en ? "Phone" : "Telefon"}: 0176 75726791
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

          {/* 4. Cookies, Session- & Local Storage */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              {en
                ? "4. Cookies, Session & Local Storage"
                : "4. Cookies, Session- und Local Storage"}
            </h2>
            <p>
              {en
                ? "This website does not set cookies. For the built-in reach measurement (see section 5), a random session ID is stored in the browser's sessionStorage and is automatically deleted when the tab is closed. A notrack flag can be set in localStorage to disable the reach measurement (opt-out, see section 5)."
                : "Diese Website setzt keine Cookies. Für die eigene Reichweitenmessung (siehe Abschnitt 5) wird im sessionStorage des Browsers eine zufällige Session-ID hinterlegt, die beim Schließen des Browser-Tabs automatisch gelöscht wird. Im localStorage kann ein notrack-Flag gesetzt werden, um die Reichweitenmessung zu deaktivieren (Opt-out, siehe Abschnitt 5)."}
            </p>
          </section>

          {/* 5. Reichweitenmessung (eigenes Analytics) */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              {en ? "5. Reach Measurement" : "5. Reichweitenmessung"}
            </h2>
            <p>
              {en
                ? "We operate our own, self-hosted analytics to understand how visitors use this website — without third-party services like Google Analytics, Matomo or Plausible. The analytics script is loaded from our Railway-hosted backend (https://email-outreach-dynvon-production.up.railway.app)."
                : "Wir betreiben eine eigene, selbst gehostete Reichweitenmessung, um zu verstehen, wie Besucher diese Website nutzen — ohne Drittanbieter wie Google Analytics, Matomo oder Plausible. Das Analytics-Skript wird von unserem eigenen Backend (https://email-outreach-dynvon-production.up.railway.app) geladen."}
            </p>
            <p className="mt-3">
              <strong className="text-foreground">
                {en ? "Processed data:" : "Verarbeitete Daten:"}
              </strong>
            </p>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>
                {en
                  ? "Page views (URL, path, referrer, UTM parameters, screen width, device type)"
                  : "Seitenaufrufe (URL, Pfad, Referrer, UTM-Parameter, Bildschirmbreite, Gerätetyp)"}
              </li>
              <li>
                {en
                  ? "Clicks on links and buttons (element text, CSS class, ID, href, click position)"
                  : "Klicks auf Links und Buttons (Element-Text, CSS-Klasse, ID, Linkziel, Klickposition)"}
              </li>
              <li>
                {en
                  ? "Randomly generated session ID (in sessionStorage, deleted on tab close)"
                  : "Zufällig generierte Session-ID (in sessionStorage, wird beim Tab-Schließen gelöscht)"}
              </li>
              <li>
                {en
                  ? "User agent (browser & operating system)"
                  : "User-Agent (Browser & Betriebssystem)"}
              </li>
              <li>
                {en
                  ? "IP address, anonymized before storage (last octet set to 0, e.g. 192.168.178.0)"
                  : "IP-Adresse, anonymisiert vor der Speicherung (letztes Oktett auf 0 gesetzt, z. B. 192.168.178.0)"}
              </li>
            </ul>
            <p className="mt-3">
              <strong className="text-foreground">
                {en ? "Not processed:" : "Nicht verarbeitet:"}
              </strong>{" "}
              {en
                ? "No cookies, no cross-site tracking, no dwell time, no scroll tracking, no personal data such as names or email addresses."
                : "Keine Cookies, kein Cross-Site-Tracking, keine Verweilzeit, kein Scroll-Tracking, keine personenbezogenen Daten wie Namen oder E-Mail-Adressen."}
            </p>
            <p className="mt-3">
              <strong className="text-foreground">
                {en ? "Legal basis:" : "Rechtsgrundlage:"}
              </strong>{" "}
              {en
                ? "Art. 6 (1) (f) GDPR. We have a legitimate interest in understanding the reach and usage of our website in order to continuously improve it. Due to the IP anonymization and cookie-free implementation, your interests do not outweigh this."
                : "Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse daran, die Reichweite und Nutzung unserer Website zu verstehen, um sie kontinuierlich zu verbessern. Aufgrund der IP-Anonymisierung und der cookie-freien Umsetzung überwiegen Ihre Interessen nicht."}
            </p>
            <p className="mt-3">
              <strong className="text-foreground">
                {en ? "Storage period:" : "Speicherdauer:"}
              </strong>{" "}
              {en
                ? "Aggregated reach data is retained for up to 24 months; raw events are deleted after 90 days."
                : "Aggregierte Reichweitendaten werden bis zu 24 Monate aufbewahrt; Rohdaten werden nach 90 Tagen gelöscht."}
            </p>

            <div className="mt-4 p-4 rounded-lg border border-border bg-surface/40">
              <p className="mb-3">
                <strong className="text-foreground">
                  {en ? "Opt-out:" : "Widerspruch (Opt-out):"}
                </strong>{" "}
                {en
                  ? "You can disable the reach measurement for this browser at any time. A notrack flag is stored in localStorage; the analytics script will then not send any data."
                  : "Sie können die Reichweitenmessung für diesen Browser jederzeit deaktivieren. Dabei wird ein notrack-Flag im localStorage gesetzt; das Analytics-Skript sendet dann keine Daten mehr."}
              </p>
              <button
                type="button"
                onClick={() => {
                  if (typeof window === "undefined") return;
                  const isTracking = localStorage.getItem("notrack") !== "1";
                  if (isTracking) {
                    localStorage.setItem("notrack", "1");
                    alert(
                      en
                        ? "Reach measurement disabled for this browser."
                        : "Reichweitenmessung für diesen Browser deaktiviert."
                    );
                  } else {
                    localStorage.removeItem("notrack");
                    alert(
                      en
                        ? "Reach measurement re-enabled for this browser."
                        : "Reichweitenmessung für diesen Browser wieder aktiviert."
                    );
                  }
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-light text-white text-sm font-semibold rounded-lg transition-all"
              >
                {en ? "Toggle tracking opt-out" : "Reichweitenmessung ein-/ausschalten"}
              </button>
            </div>
          </section>

          {/* 6. Externe Dienste */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              {en ? "6. External Services" : "6. Externe Dienste"}
            </h2>

            <h3 className="text-base font-medium text-foreground mb-2 mt-4">
              Google Calendar
            </h3>
            <p>
              {en
                ? "This website contains a link to Google Calendar (operated by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland) for booking appointments. When you click the booking link, you will be redirected to Google Calendar, where Google processes your data according to their own privacy policy. No data is transmitted to Google before you click the link."
                : "Diese Website enthält einen Link zu Google Kalender (betrieben von Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) zur Terminbuchung. Wenn Sie den Buchungslink klicken, werden Sie zu Google Kalender weitergeleitet, wo Google Ihre Daten nach deren eigener Datenschutzerklärung verarbeitet. Vor dem Klick auf den Link werden keine Daten an Google übertragen."}
            </p>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light hover:text-accent transition-colors mt-1 inline-block"
            >
              https://policies.google.com/privacy
            </a>
          </section>

          {/* 7. Hosting */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              {en ? "7. Hosting" : "7. Hosting"}
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

          {/* 8. Betroffenenrechte */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              {en ? "8. Your Rights" : "8. Ihre Rechte"}
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
                ? "To exercise these rights, please contact us at: support@dynvon.com or 0176 75726791"
                : "Zur Ausübung dieser Rechte kontaktieren Sie uns bitte unter: support@dynvon.com oder 0176 75726791"}
            </p>
            <p className="mt-2">
              {en
                ? "You also have the right to lodge a complaint with a supervisory authority (Art. 77 GDPR). The competent authority is the Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)."
                : "Sie haben außerdem das Recht, sich bei einer Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Die zuständige Behörde ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA)."}
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
