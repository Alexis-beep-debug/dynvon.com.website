"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t, locale } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <a href="/" className="text-xl font-bold tracking-tight">
              <span className="text-accent-light">dyn</span>
              <span className="text-foreground">von</span>
            </a>
            <p className="text-sm text-muted mt-1">{t.footer.tagline}</p>
            <p className="text-xs text-muted mt-0.5">{t.footer.location}</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
            <a href="/#services" className="hover:text-foreground transition-colors">
              {t.nav.services}
            </a>
            <a href="/#projects" className="hover:text-foreground transition-colors">
              {t.nav.projects}
            </a>
            <a href="/blog" className="hover:text-foreground transition-colors">
              Blog
            </a>
            <a href="/#contact" className="hover:text-foreground transition-colors">
              {t.nav.contact}
            </a>
          </div>

          {/* Legal + Copyright */}
          <div className="text-center sm:text-right">
            <div className="flex items-center justify-center sm:justify-end gap-4 text-xs text-muted mb-1">
              <a href="/impressum" className="hover:text-foreground transition-colors">
                {locale === "en" ? "Legal Notice" : "Impressum"}
              </a>
              <a href="/datenschutz" className="hover:text-foreground transition-colors">
                {locale === "en" ? "Privacy Policy" : "Datenschutz"}
              </a>
            </div>
            <p className="text-xs text-muted">
              &copy; {year} dynvon. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
