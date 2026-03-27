"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              <span className="text-accent-light">dyn</span>
              <span className="text-foreground">von</span>
            </a>
            <p className="text-sm text-muted mt-1">{t.footer.tagline}</p>
            <p className="text-xs text-muted mt-0.5">{t.footer.location}</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="#services" className="hover:text-foreground transition-colors">
              {t.nav.services}
            </a>
            <a href="#projects" className="hover:text-foreground transition-colors">
              {t.nav.projects}
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              {t.nav.contact}
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted">
            &copy; {year} dynvon. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
