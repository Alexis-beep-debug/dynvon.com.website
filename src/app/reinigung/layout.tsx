import type { Metadata } from "next";

const SITE_URL = "https://www.dynvon.com";
const PAGE_URL = `${SITE_URL}/reinigung`;

export const metadata: Metadata = {
  title: "Buchhaltung automatisieren für Reinigungsunternehmen",
  description:
    "Automatische Rechnungsstellung, Mahnwesen, Zahlungsverfolgung und Angebotserstellung für Gebäudereinigungsunternehmen — 10h gespart pro Woche, 0 vergessene Mahnungen, 100% pünktliche Rechnungen. Spezialisierte Python-Automatisierung aus Nürnberg.",
  keywords: [
    "Gebäudereinigung Automatisierung",
    "Reinigungsunternehmen Software",
    "Buchhaltung Gebäudereinigung",
    "Rechnungen Reinigungsunternehmen",
    "Mahnwesen automatisieren Reinigung",
    "Angebotserstellung Gebäudereinigung",
    "Automatisierung Reinigungsfirma",
    "Digitalisierung Gebäudereinigung",
    "Software für Reinigungsfirmen",
    "Reinigungsfirma Nürnberg Digitalisierung",
    "CRM Gebäudereinigung",
    "Lexoffice Gebäudereinigung",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: PAGE_URL,
    siteName: "dynvon",
    title: "Buchhaltung automatisieren für Reinigungsunternehmen",
    description:
      "10h gespart pro Woche, 0 vergessene Mahnungen. Python-Automatisierung für Gebäudereinigungsunternehmen aus Nürnberg.",
    images: [
      {
        url: "/reinigung/opengraph-image",
        width: 1200,
        height: 630,
        alt: "dynvon — Automatisierung für Gebäudereinigungsunternehmen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buchhaltung automatisieren für Reinigungsunternehmen",
    description:
      "10h gespart pro Woche, 0 vergessene Mahnungen. Python-Automatisierung aus Nürnberg.",
    images: ["/reinigung/opengraph-image"],
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}/#service`,
  name: "Buchhaltungs- und Angebotsautomatisierung für Gebäudereinigungsunternehmen",
  description:
    "Automatisierte Rechnungsstellung, Mahnwesen, Zahlungsverfolgung und Angebotserstellung für Gebäudereinigungsfirmen. Spart im Schnitt 10 Stunden pro Woche.",
  provider: { "@id": `${SITE_URL}/#business` },
  serviceType: "Prozessautomatisierung",
  areaServed: {
    "@type": "Country",
    name: "Deutschland",
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Gebäudereinigungsunternehmen",
  },
  url: PAGE_URL,
  offers: [
    {
      "@type": "Offer",
      name: "Automatische Rechnungsstellung",
      description:
        "Rechnungen werden automatisch aus Aufträgen erstellt, nummeriert, versendet und revisionssicher archiviert.",
    },
    {
      "@type": "Offer",
      name: "Zahlungsverfolgung auf Autopilot",
      description:
        "Automatischer Bankabgleich: Kontobewegungen werden gelesen, Zahlungen Rechnungen zugeordnet, offene Posten transparent angezeigt.",
    },
    {
      "@type": "Offer",
      name: "Automatisches Mahnwesen",
      description:
        "Überfällige Rechnungen werden automatisch in freundlicher, gestufter Form angemahnt.",
    },
    {
      "@type": "Offer",
      name: "Automatische Angebotserstellung",
      description:
        "Angebote in unter 5 Minuten statt 2 Stunden: Formular vor Ort ausfüllen, System erstellt PDF-Angebot und versendet es an den Kunden.",
    },
  ],
};

export default function ReinigungLayout({
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
      {children}
    </>
  );
}
