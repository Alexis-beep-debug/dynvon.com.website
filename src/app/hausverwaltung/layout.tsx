import type { Metadata } from "next";

const SITE_URL = "https://www.dynvon.com";
const PAGE_URL = `${SITE_URL}/hausverwaltung`;

export const metadata: Metadata = {
  title: "Automatisierung für Hausverwaltungen — Rechnungen, Mahnwesen, Reporting",
  description:
    "Automatische Rechnungsverarbeitung, Hausgeld-Mahnwesen und Eigentümer-Reporting für Hausverwaltungen — 60% weniger Verwaltungsaufwand, 0 vergessene Fristen, 100% Eigentümer-Transparenz. Python-Automatisierung aus Nürnberg.",
  keywords: [
    "Hausverwaltung Automatisierung",
    "Hausverwaltung Software",
    "WEG Verwaltung automatisieren",
    "Nebenkostenabrechnung automatisch",
    "Hausgeld Mahnwesen",
    "Eigentümer Reporting",
    "Rechnungsverarbeitung Hausverwaltung",
    "Immobilienverwaltung Digitalisierung",
    "Property Management Automatisierung",
    "Hausverwaltung Nürnberg",
    "WEG Verwaltung Software",
    "Mietverwaltung automatisieren",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: PAGE_URL,
    siteName: "dynvon",
    title: "Automatisierung für Hausverwaltungen",
    description:
      "60% weniger Verwaltungsaufwand, 0 vergessene Fristen. Python-Automatisierung für Hausverwaltungen aus Nürnberg.",
    images: [
      {
        url: "/hausverwaltung/opengraph-image",
        width: 1200,
        height: 630,
        alt: "dynvon — Automatisierung für Hausverwaltungen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatisierung für Hausverwaltungen",
    description:
      "60% weniger Verwaltungsaufwand, 0 vergessene Fristen. Python-Automatisierung aus Nürnberg.",
    images: ["/hausverwaltung/opengraph-image"],
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Funktioniert das mit meiner Hausverwaltungssoftware?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Das System integriert sich mit gängiger Software wie Haufe PowerHaus, DOMUS, Immoware, Karthago und anderen. Falls Ihre Software eine API oder Export-Funktion hat, können wir anbinden.",
      },
    },
    {
      "@type": "Question",
      "name": "Was passiert mit Sonderfällen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Das System lernt Ihre wiederkehrenden Muster. Sonderfälle werden markiert und Ihnen zur manuellen Prüfung vorgelegt.",
      },
    },
    {
      "@type": "Question",
      "name": "Wie läuft die Einrichtung ab?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Woche 1: Analyse. Woche 2-3: Einrichtung. Woche 4: Testlauf. Danach Livegang mit Begleitung. Alles cloud-basiert.",
      },
    },
    {
      "@type": "Question",
      "name": "Sind meine Daten sicher?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Deutsche/EU-Server, DSGVO-konform, AV-Vertrag, verschlüsselte Übertragung.",
      },
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}/#service`,
  name: "Verwaltungsautomatisierung für Hausverwaltungen",
  description:
    "Automatisierte Rechnungsverarbeitung, Hausgeld-Mahnwesen und Eigentümer-Reporting für Hausverwaltungen. Spart im Schnitt 60% Verwaltungsaufwand.",
  provider: { "@id": `${SITE_URL}/#business` },
  serviceType: "Prozessautomatisierung",
  areaServed: {
    "@type": "Country",
    name: "Deutschland",
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Hausverwaltungen",
  },
  url: PAGE_URL,
  offers: [
    {
      "@type": "Offer",
      name: "Automatische Rechnungsverarbeitung",
      description:
        "Eingangsrechnungen werden automatisch geparst, der richtigen Wirtschaftseinheit zugeordnet und zur Freigabe vorgelegt.",
    },
    {
      "@type": "Offer",
      name: "Hausgeld-Mahnwesen auf Autopilot",
      description:
        "Tägliche Prüfung der Zahlungseingänge, automatische Erkennung von Rückständen und Versand gestufter Mahnungen.",
    },
    {
      "@type": "Offer",
      name: "Eigentümer-Reporting mit einem Klick",
      description:
        "Objektbezogene Auswertungen, Rücklagenstand und Leistungsnachweise der Dienstleister auf Knopfdruck.",
    },
  ],
};

export default function HausverwaltungLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
