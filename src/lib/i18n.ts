export type Locale = "en" | "de";

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      services: "Services",
      projects: "Results",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      title: "Stop Wasting Hours on Repetitive Tasks",
      subtitle:
        "I build automation systems that handle your bookkeeping, proposals, emails, and data entry — so you and your team can focus on growing the business.",
      cta: "Book a Free Call",
      ctaSecondary: "See Real Results",
    },
    services: {
      title: "What I Automate For You",
      subtitle:
        "You tell me what eats up your time. I build a system that does it automatically — reliably, 24/7, without errors.",
      cards: [
        {
          title: "Bookkeeping & Invoicing",
          description:
            "Transactions sorted automatically, invoices created and sent on time, payment reminders going out without you lifting a finger. No more spreadsheet chaos.",
          icon: "receipt",
        },
        {
          title: "Proposals & Quotes",
          description:
            "Customer fills out a form, your proposal is ready in minutes — with correct pricing, professional formatting, and sent directly to the client.",
          icon: "users",
        },
        {
          title: "Email & Follow-ups",
          description:
            "New leads get the right emails at the right time. Follow-ups happen automatically. Your CRM stays up to date — no copy-pasting between tools.",
          icon: "mail",
        },
        {
          title: "Connect Your Tools",
          description:
            "Your accounting software, CRM, email tool, and spreadsheets — all talking to each other automatically. One update, everywhere synced.",
          icon: "code",
        },
      ],
    },
    projects: {
      title: "Real Results for Real Businesses",
      subtitle:
        "These are automation systems I built for small businesses like yours — saving them hours every week and eliminating costly mistakes.",
      cases: [
        {
          title: "Bookkeeping on Autopilot",
          role: "Automation Engineer",
          problem:
            "A small business owner was spending 8+ hours every week on bookkeeping — sorting transactions, creating invoices, chasing late payments. Mistakes happened regularly.",
          solution:
            "I built a system that connects directly to the bank account, sorts every transaction automatically, creates and sends invoices, and follows up on overdue payments — all without any manual work.",
          result:
            "8+ hours/week freed up, zero errors, no more need for a dedicated bookkeeper.",
          tech: ["Bank Integration", "Invoicing", "Payment Reminders", "Reporting"],
          skills: [],
        },
        {
          title: "Proposals in 5 Minutes Instead of 2 Hours",
          role: "Automation Engineer",
          problem:
            "A cleaning company was spending ~2 hours on every proposal — calculating areas, adjusting prices, formatting documents. With dozens of leads per month, this was a massive bottleneck.",
          solution:
            "Now an employee fills out a simple form on-site. The system calculates everything automatically, creates a professional proposal, and sends it to the client — all in under 5 minutes.",
          result:
            "Proposal time reduced by 95%. Sales capacity doubled without hiring anyone.",
          tech: ["Online Forms", "Auto-Calculation", "PDF Generation", "Email Delivery"],
          skills: [],
        },
        {
          title: "No More Manual Email & CRM Work",
          role: "Automation Engineer",
          problem:
            "A business was managing emails, outreach, and customer data manually across three different tools — leading to missed follow-ups, duplicate data, and no overview of what's working.",
          solution:
            "I connected all tools into one automated system: new leads get the right emails automatically, customer data stays in sync everywhere, and a live dashboard shows results at a glance.",
          result:
            "Hours of daily manual work eliminated. Consistent data everywhere. Leads are followed up 24/7 automatically.",
          tech: ["Email Marketing", "CRM Sync", "Lead Tracking", "Live Dashboard"],
          skills: [],
        },
      ],
    },
    contact: {
      title: "Let's Talk About Your Time-Wasters",
      subtitle:
        "Book a free 30-minute call. Tell me what tasks eat up your week — I'll show you exactly what can be automated and how much time you'll get back.",
      cta: "Book a Free Call",
      email: "Or email me directly",
    },
    footer: {
      tagline: "I automate your business processes",
      location: "Nuremberg, Germany",
      rights: "All rights reserved.",
    },
  },
  de: {
    nav: {
      services: "Leistungen",
      projects: "Ergebnisse",
      blog: "Blog",
      contact: "Kontakt",
    },
    hero: {
      title: "Schluss mit Zeitverschwendung für Routinearbeit",
      subtitle:
        "Ich baue Automatisierungssysteme, die Ihre Buchhaltung, Angebote, E-Mails und Dateneingabe übernehmen — damit Sie und Ihr Team sich aufs Wachstum konzentrieren können.",
      cta: "Kostenloses Gespräch buchen",
      ctaSecondary: "Echte Ergebnisse sehen",
    },
    services: {
      title: "Was ich für Sie automatisiere",
      subtitle:
        "Sagen Sie mir, was Ihre Zeit frisst. Ich baue ein System, das es automatisch erledigt — zuverlässig, 24/7, ohne Fehler.",
      cards: [
        {
          title: "Buchhaltung & Rechnungen",
          description:
            "Transaktionen werden automatisch sortiert, Rechnungen pünktlich erstellt und versendet, Zahlungserinnerungen gehen raus — ohne dass Sie einen Finger rühren müssen.",
          icon: "receipt",
        },
        {
          title: "Angebote & Kostenvoranschläge",
          description:
            "Kunde füllt ein Formular aus, Ihr Angebot ist in Minuten fertig — mit korrekten Preisen, professioneller Formatierung, direkt an den Kunden versendet.",
          icon: "users",
        },
        {
          title: "E-Mails & Nachfassen",
          description:
            "Neue Leads bekommen die richtigen E-Mails zur richtigen Zeit. Nachfassen passiert automatisch. Ihr CRM bleibt aktuell — kein Hin-und-Her-Kopieren zwischen Tools.",
          icon: "mail",
        },
        {
          title: "Ihre Tools verbinden",
          description:
            "Buchhaltungssoftware, CRM, E-Mail-Tool und Tabellen — alles spricht automatisch miteinander. Eine Änderung, überall synchronisiert.",
          icon: "code",
        },
      ],
    },
    projects: {
      title: "Echte Ergebnisse für echte Unternehmen",
      subtitle:
        "Diese Automatisierungssysteme habe ich für kleine Unternehmen wie Ihres gebaut — sie sparen jede Woche Stunden und eliminieren kostspielige Fehler.",
      cases: [
        {
          title: "Buchhaltung auf Autopilot",
          role: "Automation Engineer",
          problem:
            "Ein Unternehmer verbrachte jede Woche 8+ Stunden mit Buchhaltung — Transaktionen sortieren, Rechnungen erstellen, Zahlungen hinterherlaufen. Fehler passierten regelmäßig.",
          solution:
            "Ich habe ein System gebaut, das sich direkt mit dem Bankkonto verbindet, jede Transaktion automatisch sortiert, Rechnungen erstellt und versendet, und überfällige Zahlungen selbstständig anmahnt.",
          result:
            "8+ Stunden/Woche freigesetzt, null Fehler, kein separater Buchhalter mehr nötig.",
          tech: ["Bankanbindung", "Rechnungsstellung", "Zahlungserinnerungen", "Reporting"],
          skills: [],
        },
        {
          title: "Angebote in 5 Minuten statt 2 Stunden",
          role: "Automation Engineer",
          problem:
            "Ein Reinigungsunternehmen brauchte ~2 Stunden pro Angebot — Flächen berechnen, Preise anpassen, Dokumente formatieren. Bei Dutzenden Anfragen pro Monat ein massiver Engpass.",
          solution:
            "Jetzt füllt ein Mitarbeiter vor Ort ein einfaches Formular aus. Das System rechnet alles automatisch, erstellt ein professionelles Angebot und sendet es an den Kunden — alles in unter 5 Minuten.",
          result:
            "Angebotszeit um 95% reduziert. Vertriebskapazität verdoppelt — ohne neue Mitarbeiter.",
          tech: ["Online-Formulare", "Auto-Berechnung", "PDF-Erstellung", "E-Mail-Versand"],
          skills: [],
        },
        {
          title: "Schluss mit manueller E-Mail- & CRM-Arbeit",
          role: "Automation Engineer",
          problem:
            "Ein Unternehmen verwaltete E-Mails, Outreach und Kundendaten manuell über drei verschiedene Tools — verpasste Nachfassaktionen, doppelte Daten und kein Überblick über Ergebnisse.",
          solution:
            "Ich habe alle Tools zu einem automatisierten System verbunden: Neue Leads bekommen automatisch die richtigen E-Mails, Kundendaten bleiben überall synchron, und ein Live-Dashboard zeigt Ergebnisse auf einen Blick.",
          result:
            "Stunden täglicher Handarbeit eliminiert. Konsistente Daten überall. Leads werden rund um die Uhr automatisch nachgefasst.",
          tech: ["E-Mail-Marketing", "CRM-Sync", "Lead-Tracking", "Live-Dashboard"],
          skills: [],
        },
      ],
    },
    contact: {
      title: "Erzählen Sie mir von Ihren Zeitfressern",
      subtitle:
        "Buchen Sie ein kostenloses 30-Minuten-Gespräch. Erzählen Sie mir, welche Aufgaben Ihre Woche auffressen — ich zeige Ihnen genau, was automatisiert werden kann und wie viel Zeit Sie zurückgewinnen.",
      cta: "Kostenloses Gespräch buchen",
      email: "Oder schreiben Sie mir direkt",
    },
    footer: {
      tagline: "Ich automatisiere Ihre Geschäftsprozesse",
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
