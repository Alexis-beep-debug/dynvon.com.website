import type { Metadata } from "next";
import "./globals.css";
import InteractiveGrid from "@/components/InteractiveGrid";

const SITE_URL = "https://www.dynvon.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "dynvon — Prozessautomatisierung für kleine Unternehmen",
    template: "%s | dynvon",
  },
  description:
    "Ich automatisiere Geschäftsprozesse für kleine Unternehmen: Buchhaltung, Rechnungen & Mahnwesen, Angebotserstellung, CRM-Integrationen (Pipedrive, Lexoffice), E-Mail-Automatisierung. Robuste Python-Backends statt Zapier/Make. Sitz in Nürnberg.",
  keywords: [
    // Kern-Keywords DE (für Reinigungsunternehmen-Funnel)
    "Buchhaltung automatisieren",
    "Buchhaltungsautomatisierung",
    "Rechnungen automatisieren",
    "Mahnwesen automatisieren",
    "Angebotserstellung automatisieren",
    "Gebäudereinigung Automatisierung",
    "Reinigungsunternehmen Software",
    "Prozessautomatisierung kleine Unternehmen",
    "Geschäftsprozessautomatisierung",
    // Tools / Integrationen
    "Lexoffice Automatisierung",
    "Lexoffice API",
    "Pipedrive Automatisierung",
    "Brevo Integration",
    "Airtable Integration",
    "Make.com Alternative",
    "Zapier Alternative",
    // Tech
    "Python Automation",
    "Python Freelancer Nürnberg",
    "API Integration Freelancer",
    "Workflow Automatisierung",
    "KI Automatisierung",
    "Robuste Automatisierung",
    // Region
    "Automatisierung Nürnberg",
    "Automation Engineer Nürnberg",
    "Freelancer Nürnberg",
    // EN parity
    "Business Process Automation",
    "Accounting Automation",
    "CRM Automation",
    "Small Business Automation",
  ],
  authors: [{ name: "Alexis Bethke-Pittadakis", url: SITE_URL }],
  creator: "Alexis Bethke-Pittadakis",
  publisher: "dynvon",
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: ["en_US"],
    url: SITE_URL,
    siteName: "dynvon",
    title:
      "dynvon — Prozessautomatisierung für kleine Unternehmen",
    description:
      "Buchhaltung, Angebote und CRM automatisieren — robuste Python-Systeme statt Zapier/Make. Aus Nürnberg.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "dynvon — Prozessautomatisierung für kleine Unternehmen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "dynvon — Prozessautomatisierung für kleine Unternehmen",
    description:
      "Buchhaltung, Angebote und CRM automatisieren — robuste Python-Systeme statt Zapier/Make.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "de-DE": SITE_URL,
      "en-US": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  verification: {
    // Optional: füge hier Google-Search-Console-Token ein, z.B. google: "abc123"
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "dynvon",
      description:
        "Automatisierung von Geschäftsprozessen für kleine Unternehmen — Buchhaltung, Rechnungen, Angebote, CRM-Integrationen. Spezialisiert auf Gebäudereinigungsunternehmen.",
      url: SITE_URL,
      areaServed: [
        { "@type": "Country", name: "Deutschland" },
        { "@type": "Country", name: "Österreich" },
        { "@type": "Country", name: "Schweiz" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nürnberg",
        addressCountry: "DE",
      },
      founder: { "@id": `${SITE_URL}/#person` },
      makesOffer: [
        {
          "@type": "Offer",
          name: "Buchhaltungsautomatisierung",
          description:
            "Automatische Rechnungsstellung, Zahlungsverfolgung und Mahnwesen für Gebäudereinigungsunternehmen.",
          url: `${SITE_URL}/reinigung`,
        },
        {
          "@type": "Offer",
          name: "Angebotsautomatisierung",
          description:
            "Automatische Angebotserstellung und Nachfassprozesse für Gebäudereinigungsunternehmen.",
          url: `${SITE_URL}/reinigung`,
        },
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Alexis Bethke-Pittadakis",
      jobTitle: "Business Process Automation Engineer",
      worksFor: { "@id": `${SITE_URL}/#business` },
      url: SITE_URL,
      image: `${SITE_URL}/alexis-opt.webp`,
      knowsAbout: [
        "Prozessautomatisierung",
        "Python",
        "API-Integration",
        "Buchhaltungsautomatisierung",
        "CRM-Automatisierung",
        "Lexoffice",
        "Pipedrive",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nürnberg",
        addressCountry: "DE",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "dynvon",
      publisher: { "@id": `${SITE_URL}/#business` },
      inLanguage: ["de-DE", "en-US"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#f8f9fb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script src="https://email-outreach-dynvon-production.up.railway.app/analytics/script.js" defer></script>
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <InteractiveGrid />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
