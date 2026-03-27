export type Locale = "en" | "de";

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      services: "Services",
      projects: "Projects",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      title: "I Automate Your Business Processes",
      subtitle:
        "Custom Python backends, API integrations & AI workflows — so your team can stop doing repetitive work and focus on what matters.",
      cta: "Book a Free Call",
      ctaSecondary: "See My Work",
    },
    services: {
      title: "What I Do",
      subtitle:
        "I build robust automation systems that replace manual workflows with reliable, scalable Python backends — not just no-code band-aids.",
      cards: [
        {
          title: "Accounting & Finance Automation",
          description:
            "Automated transaction categorization, invoice generation, dunning processes, and bank account reconciliation. Connected to your existing tools.",
          icon: "receipt",
        },
        {
          title: "CRM & Sales Automation",
          description:
            "Pipedrive, HubSpot, Lexoffice — synced and automated. From lead capture to proposal generation, all running on autopilot.",
          icon: "users",
        },
        {
          title: "Email & Outreach Automation",
          description:
            "Brevo, Lemlist, marketing campaigns, outbound sequences — fully connected with your CRM. Live dashboards, zero manual exports.",
          icon: "mail",
        },
        {
          title: "Custom API Integrations",
          description:
            "Connecting any tool via REST APIs, webhooks, and scheduled cron jobs. Python on Railway with GitHub auto-deploy for maximum reliability.",
          icon: "code",
        },
      ],
    },
    projects: {
      title: "Case Studies",
      subtitle:
        "Real automation systems running in production — built for small businesses that needed to scale without hiring.",
      cases: [
        {
          title: "Automated Accounting & Dunning System",
          role: "Automation Engineer & Python Developer",
          problem:
            "A small business was spending 8+ hours/week on manual bookkeeping — reconciling transactions, creating invoices, and chasing payments by hand. Errors were frequent.",
          solution:
            "I built a fully automated accounting pipeline connecting the client's bank account (Enable Banking) with Google Workspace via Python on Railway. Transactions are categorized automatically, invoices generated and sent without human input, and the dunning process runs entirely on its own.",
          result:
            "8+ hours/week saved, zero errors, dedicated bookkeeping role eliminated.",
          tech: ["Python", "Railway", "Enable Banking", "Google Workspace"],
          skills: [
            "Python",
            "API Integration",
            "Business Process Automation",
            "Accounting",
          ],
        },
        {
          title: "Automated Proposal Generation",
          role: "Automation Engineer & Python Developer",
          problem:
            "A building cleaning company was spending ~2 hours per proposal — manually calculating surfaces, adjusting pricing, and formatting documents. A major bottleneck with dozens of potential clients per month.",
          solution:
            "I built an automated proposal system triggered by a simple on-site property intake form. The system calculates scope and pricing automatically, generates a fully formatted proposal via Lexoffice, and updates it dynamically if parameters change — zero manual work.",
          result:
            "Proposal creation reduced from 2 hours to under 5 minutes. Sales capacity doubled without adding headcount.",
          tech: [
            "Python",
            "Pipedrive",
            "Lexoffice",
            "Google Drive",
            "Brevo",
          ],
          skills: [
            "Business Process Automation",
            "API Integration",
            "Python",
          ],
        },
        {
          title: "Email Automation & CRM Integration",
          role: "Automation Engineer & Python Developer",
          problem:
            "A client was managing email marketing, outbound outreach, and CRM updates manually across three separate platforms — causing data gaps, duplicate work, and zero visibility on results.",
          solution:
            "I connected and automated the entire communication stack: outbound sequences, marketing campaigns, CRM updates, and cross-platform data sync all run automatically. A live reporting dashboard provides full visibility at any time — no manual exports needed.",
          result:
            "Hours of manual work eliminated daily, consistent data across all systems, and a fully automated outbound engine running 24/7.",
          tech: ["Python", "Brevo", "Lemlist", "Pipedrive"],
          skills: [
            "Python",
            "Email Automation",
            "API Integration",
            "CRM Development",
          ],
        },
      ],
    },
    contact: {
      title: "Let's Talk",
      subtitle:
        "Ready to automate your manual processes? Book a free 30-minute discovery call — I'll show you exactly where automation can save you time and money.",
      cta: "Book a Free Discovery Call",
      email: "Or email me directly",
    },
    footer: {
      tagline: "Business Process Automation Engineer",
      location: "Nuremberg, Germany",
      rights: "All rights reserved.",
    },
  },
  de: {
    nav: {
      services: "Leistungen",
      projects: "Projekte",
      blog: "Blog",
      contact: "Kontakt",
    },
    hero: {
      title: "Ich automatisiere Ihre Geschäftsprozesse",
      subtitle:
        "Maßgeschneiderte Python-Backends, API-Integrationen & KI-Workflows — damit Ihr Team aufhören kann, repetitive Arbeit zu erledigen, und sich auf das Wesentliche konzentrieren kann.",
      cta: "Kostenloses Gespräch buchen",
      ctaSecondary: "Meine Arbeit ansehen",
    },
    services: {
      title: "Was ich mache",
      subtitle:
        "Ich baue robuste Automatisierungssysteme, die manuelle Workflows durch zuverlässige, skalierbare Python-Backends ersetzen — nicht nur No-Code-Notlösungen.",
      cards: [
        {
          title: "Buchhaltungs- & Finanzautomatisierung",
          description:
            "Automatisierte Transaktionskategorisierung, Rechnungserstellung, Mahnprozesse und Bankkontenabstimmung. Verbunden mit Ihren bestehenden Tools.",
          icon: "receipt",
        },
        {
          title: "CRM- & Vertriebsautomatisierung",
          description:
            "Pipedrive, HubSpot, Lexoffice — synchronisiert und automatisiert. Von der Lead-Erfassung bis zur Angebotserstellung, alles auf Autopilot.",
          icon: "users",
        },
        {
          title: "E-Mail- & Outreach-Automatisierung",
          description:
            "Brevo, Lemlist, Marketingkampagnen, Outbound-Sequenzen — vollständig mit Ihrem CRM verbunden. Live-Dashboards, keine manuellen Exporte.",
          icon: "mail",
        },
        {
          title: "Individuelle API-Integrationen",
          description:
            "Verbindung beliebiger Tools über REST-APIs, Webhooks und geplante Cron-Jobs. Python auf Railway mit GitHub Auto-Deploy für maximale Zuverlässigkeit.",
          icon: "code",
        },
      ],
    },
    projects: {
      title: "Fallstudien",
      subtitle:
        "Echte Automatisierungssysteme im Produktivbetrieb — gebaut für kleine Unternehmen, die skalieren mussten, ohne einzustellen.",
      cases: [
        {
          title: "Automatisierte Buchhaltung & Mahnwesen",
          role: "Automation Engineer & Python Developer",
          problem:
            "Ein kleines Unternehmen verbrachte 8+ Stunden/Woche mit manueller Buchhaltung — Transaktionen abstimmen, Rechnungen erstellen und Zahlungen per Hand nachverfolgen. Fehler waren häufig.",
          solution:
            "Ich habe eine vollautomatisierte Buchhaltungs-Pipeline aufgebaut, die das Bankkonto des Kunden (Enable Banking) mit Google Workspace über Python auf Railway verbindet. Transaktionen werden automatisch kategorisiert, Rechnungen ohne menschliches Zutun erstellt und versendet, und der Mahnprozess läuft komplett eigenständig.",
          result:
            "8+ Stunden/Woche gespart, null Fehler, dedizierte Buchhaltungsstelle eingespart.",
          tech: ["Python", "Railway", "Enable Banking", "Google Workspace"],
          skills: [
            "Python",
            "API Integration",
            "Business Process Automation",
            "Accounting",
          ],
        },
        {
          title: "Automatisierte Angebotserstellung",
          role: "Automation Engineer & Python Developer",
          problem:
            "Ein Gebäudereinigungsunternehmen brauchte ~2 Stunden pro Angebot — manuelles Berechnen von Flächen, Preisanpassung und Dokumentenformatierung. Ein großer Engpass bei Dutzenden potenzieller Kunden pro Monat.",
          solution:
            "Ich habe ein automatisiertes Angebotssystem aufgebaut, das durch ein einfaches Vor-Ort-Aufnahmeformular ausgelöst wird. Das System berechnet Umfang und Preise automatisch, erstellt ein vollständig formatiertes Angebot über Lexoffice und aktualisiert es dynamisch bei Parameteränderungen — null manuelle Arbeit.",
          result:
            "Angebotserstellung von 2 Stunden auf unter 5 Minuten reduziert. Vertriebskapazität verdoppelt ohne zusätzliches Personal.",
          tech: [
            "Python",
            "Pipedrive",
            "Lexoffice",
            "Google Drive",
            "Brevo",
          ],
          skills: [
            "Business Process Automation",
            "API Integration",
            "Python",
          ],
        },
        {
          title: "E-Mail-Automatisierung & CRM-Integration",
          role: "Automation Engineer & Python Developer",
          problem:
            "Ein Kunde verwaltete E-Mail-Marketing, Outbound-Outreach und CRM-Updates manuell über drei separate Plattformen — mit Datenlücken, doppelter Arbeit und null Ergebnistransparenz.",
          solution:
            "Ich habe den gesamten Kommunikations-Stack verbunden und automatisiert: Outbound-Sequenzen, Marketingkampagnen, CRM-Updates und plattformübergreifende Datensynchronisation laufen vollautomatisch. Ein Live-Reporting-Dashboard bietet jederzeit volle Transparenz — keine manuellen Exporte nötig.",
          result:
            "Stunden manueller Arbeit täglich eliminiert, konsistente Daten über alle Systeme, und eine vollautomatisierte Outbound-Engine die 24/7 läuft.",
          tech: ["Python", "Brevo", "Lemlist", "Pipedrive"],
          skills: [
            "Python",
            "Email Automation",
            "API Integration",
            "CRM Development",
          ],
        },
      ],
    },
    contact: {
      title: "Lass uns reden",
      subtitle:
        "Bereit, Ihre manuellen Prozesse zu automatisieren? Buchen Sie ein kostenloses 30-minütiges Kennenlerngespräch — ich zeige Ihnen genau, wo Automatisierung Ihnen Zeit und Geld sparen kann.",
      cta: "Kostenloses Kennenlerngespräch buchen",
      email: "Oder schreiben Sie mir direkt",
    },
    footer: {
      tagline: "Business Process Automation Engineer",
      location: "Nürnberg, Deutschland",
      rights: "Alle Rechte vorbehalten.",
    },
  },
};

interface ServiceCard {
  title: string;
  description: string;
  icon: string;
}

interface CaseStudy {
  title: string;
  role: string;
  problem: string;
  solution: string;
  result: string;
  tech: string[];
  skills: string[];
}

export interface Translations {
  nav: { services: string; projects: string; blog: string; contact: string };
  hero: { title: string; subtitle: string; cta: string; ctaSecondary: string };
  services: { title: string; subtitle: string; cards: ServiceCard[] };
  projects: { title: string; subtitle: string; cases: CaseStudy[] };
  contact: { title: string; subtitle: string; cta: string; email: string };
  footer: { tagline: string; location: string; rights: string };
}
