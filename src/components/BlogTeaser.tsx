"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { blogPosts } from "@/lib/blogData";

export default function BlogTeaser() {
  const { locale } = useLanguage();

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {locale === "en" ? "From the Blog" : "Aus dem Blog"}
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            {locale === "en"
              ? "Practical guides on automating business processes with Python."
              : "Praktische Guides zur Automatisierung von Geschäftsprozessen mit Python."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group p-6 sm:p-8 rounded-xl border border-border bg-surface/50 hover:bg-surface-light hover:border-accent/30 transition-all"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-mono text-accent-light bg-accent/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-accent-light transition-colors">
                {post.title[locale]}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                {post.description[locale]}
              </p>
              <div className="flex items-center gap-4 text-xs text-muted">
                <span>{post.date}</span>
                <span>{post.readTime[locale]}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-accent-light hover:text-accent transition-colors"
          >
            {locale === "en" ? "View all posts" : "Alle Beiträge anzeigen"}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
