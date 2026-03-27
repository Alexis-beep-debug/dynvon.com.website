import type { Metadata } from "next";
import "./globals.css";
import InteractiveGrid from "@/components/InteractiveGrid";

export const metadata: Metadata = {
  title:
    "dynvon — Business Process Automation Engineer | Python, API & AI Workflows",
  description:
    "I automate business processes for small companies. Custom Python backends, CRM integrations (Pipedrive, Lexoffice), email automation (Brevo, Lemlist), and accounting automation. Based in Nuremberg, Germany. | Ich automatisiere Geschäftsprozesse für kleine Unternehmen. Maßgeschneiderte Python-Backends, CRM-Integrationen, E-Mail-Automatisierung und Buchhaltungsautomatisierung.",
  keywords: [
    "Business Process Automation",
    "Geschäftsprozessautomatisierung",
    "Prozessautomatisierung",
    "Python Automation",
    "API Integration",
    "CRM Automation",
    "CRM Automatisierung",
    "Pipedrive Automatisierung",
    "Pipedrive Integration",
    "Lexoffice Automatisierung",
    "Lexoffice API",
    "Brevo Integration",
    "Lemlist Automation",
    "Accounting Automation",
    "Buchhaltung automatisieren",
    "Buchhaltungsautomatisierung",
    "Rechnungen automatisieren",
    "Mahnwesen automatisieren",
    "Email Automation",
    "E-Mail Automatisierung",
    "Small Business Automation",
    "Automatisierung kleine Unternehmen",
    "Freelance Automation Engineer",
    "Automatisierung Freelancer",
    "Python Freelancer",
    "Railway Deployment",
    "Nuremberg",
    "Nürnberg",
    "AI Workflows",
    "KI Automatisierung",
    "KI Integration",
    "Angebotserstellung automatisieren",
    "Workflow Automation",
    "Workflow Automatisierung",
    "Manuelle Prozesse automatisieren",
    "Digitalisierung Mittelstand",
    "Airtable Integration",
    "Make.com Alternative",
    "Zapier Alternative",
    "No-Code Alternative",
    "Robuste Automatisierung",
  ],
  authors: [{ name: "Alexis Bethke-Pittadakis" }],
  openGraph: {
    title: "dynvon — Business Process Automation for Small Businesses",
    description:
      "Custom Python backends, API integrations & AI workflows. Stop doing manual work — automate your business processes.",
    url: "https://dynvon.com",
    siteName: "dynvon",
    locale: "en_US",
    alternateLocale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "dynvon — Business Process Automation Engineer",
    description:
      "Custom Python backends, API integrations & AI workflows for small businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dynvon.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#f8f9fb" />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <InteractiveGrid />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
