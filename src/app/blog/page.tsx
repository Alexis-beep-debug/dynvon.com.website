"use client";

import { LanguageProvider, useLanguage } from "@/lib/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blogData";

function BlogList() {
  const { locale } = useLanguage();

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <a
            href="/"
            className="text-sm text-accent-light hover:text-accent transition-colors mb-4 inline-block"
          >
            &larr; {locale === "en" ? "Back to Home" : "Zurück zur Startseite"}
          </a>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {locale === "en" ? "Blog" : "Blog"}
          </h1>
          <p className="text-muted text-lg">
            {locale === "en"
              ? "Insights on business process automation, Python development, and scaling small businesses."
              : "Einblicke in Geschäftsprozessautomatisierung, Python-Entwicklung und Skalierung kleiner Unternehmen."}
          </p>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 sm:p-8 rounded-xl border border-border bg-surface/50 hover:bg-surface-light hover:border-accent/30 transition-all group"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-mono text-accent-light bg-accent/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-bold mb-2 group-hover:text-accent-light transition-colors">
                {post.title[locale]}
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-3">
                {post.description[locale]}
              </p>
              <div className="flex items-center gap-4 text-xs text-muted">
                <span>{post.date}</span>
                <span>{post.readTime[locale]}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

export default function BlogPage() {
  return (
    <LanguageProvider>
      <Navigation />
      <BlogList />
      <Footer />
    </LanguageProvider>
  );
}
