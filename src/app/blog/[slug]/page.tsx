"use client";

import { use } from "react";
import { LanguageProvider, useLanguage } from "@/lib/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blogData";

function BlogContent({ slug }: { slug: string }) {
  const { locale } = useLanguage();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="pt-24 pb-16 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold mb-4">
            {locale === "en" ? "Post not found" : "Beitrag nicht gefunden"}
          </h1>
          <a href="/blog" className="text-accent-light hover:text-accent">
            {locale === "en" ? "Back to Blog" : "Zurück zum Blog"}
          </a>
        </div>
      </main>
    );
  }

  const content = post.content[locale];

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <a
          href="/blog"
          className="text-sm text-accent-light hover:text-accent transition-colors mb-6 inline-block"
        >
          &larr; {locale === "en" ? "Back to Blog" : "Zurück zum Blog"}
        </a>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs font-mono text-accent-light bg-accent/10 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 leading-tight">
          {post.title[locale]}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted mb-10 pb-8 border-b border-border">
          <span>Alexis Bethke-Pittadakis</span>
          <span>{post.date}</span>
          <span>{post.readTime[locale]}</span>
        </div>

        {/* Content rendered as simple markdown-like HTML */}
        <div className="prose-custom">
          {content.split("\n").map((line, i) => {
            const trimmed = line.trim();

            if (trimmed.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="text-2xl font-bold mt-10 mb-4 text-foreground"
                >
                  {trimmed.slice(3)}
                </h2>
              );
            }
            if (trimmed.startsWith("### ")) {
              return (
                <h3
                  key={i}
                  className="text-lg font-semibold mt-8 mb-3 text-foreground"
                >
                  {trimmed.slice(4)}
                </h3>
              );
            }
            if (trimmed.startsWith("- **")) {
              const match = trimmed.match(/^- \*\*(.+?)\*\*:?\s*(.*)$/);
              if (match) {
                return (
                  <li key={i} className="text-muted text-sm leading-relaxed ml-4 mb-2 list-disc">
                    <strong className="text-foreground">{match[1]}</strong>
                    {match[2] ? `: ${match[2]}` : ""}
                  </li>
                );
              }
            }
            if (trimmed.startsWith("- ")) {
              return (
                <li key={i} className="text-muted text-sm leading-relaxed ml-4 mb-2 list-disc">
                  {trimmed.slice(2)}
                </li>
              );
            }
            if (trimmed.startsWith("| ")) {
              // Simple table rendering
              const cells = trimmed
                .split("|")
                .filter((c) => c.trim())
                .map((c) => c.trim());
              if (trimmed.includes("---")) return null;
              return (
                <div
                  key={i}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 text-sm py-2 border-b border-border"
                >
                  {cells.map((cell, j) => (
                    <span
                      key={j}
                      className={j === 0 ? "text-foreground font-medium" : "text-muted"}
                    >
                      {cell}
                    </span>
                  ))}
                </div>
              );
            }
            if (trimmed.startsWith("[")) {
              const match = trimmed.match(/\[(.+?)\]\((.+?)\)/);
              if (match) {
                return (
                  <p key={i} className="mt-6">
                    <a
                      href={match[2]}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all"
                    >
                      {match[1]}
                    </a>
                  </p>
                );
              }
            }
            if (trimmed.match(/^\d+\. \*\*/)) {
              const match = trimmed.match(/^\d+\.\s*\*\*(.+?)\*\*:?\s*(.*)$/);
              if (match) {
                return (
                  <li key={i} className="text-muted text-sm leading-relaxed ml-4 mb-2 list-decimal">
                    <strong className="text-foreground">{match[1]}</strong>
                    {match[2] ? `: ${match[2]}` : ""}
                  </li>
                );
              }
            }
            if (trimmed.match(/^\d+\. /)) {
              return (
                <li key={i} className="text-muted text-sm leading-relaxed ml-4 mb-2 list-decimal">
                  {trimmed.replace(/^\d+\.\s*/, "")}
                </li>
              );
            }
            if (trimmed === "") return <div key={i} className="h-2" />;

            // Regular paragraph — handle bold
            const parts = trimmed.split(/(\*\*.+?\*\*)/g);
            return (
              <p key={i} className="text-muted text-sm leading-relaxed mb-3">
                {parts.map((part, j) =>
                  part.startsWith("**") && part.endsWith("**") ? (
                    <strong key={j} className="text-foreground">
                      {part.slice(2, -2)}
                    </strong>
                  ) : (
                    <span key={j}>{part}</span>
                  )
                )}
              </p>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-xl border border-border bg-surface/50 text-center">
          <h3 className="text-xl font-bold mb-3">
            {locale === "en"
              ? "Want to automate your business?"
              : "Möchten Sie Ihr Unternehmen automatisieren?"}
          </h3>
          <p className="text-muted mb-6 text-sm">
            {locale === "en"
              ? "Book a free 30-minute discovery call and find out how much time you could save."
              : "Buchen Sie ein kostenloses 30-minütiges Kennenlerngespräch und erfahren Sie, wie viel Zeit Sie sparen könnten."}
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all"
          >
            {locale === "en"
              ? "Book a Free Call"
              : "Kostenloses Gespräch buchen"}
          </a>
        </div>
      </article>
    </main>
  );
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  return (
    <LanguageProvider>
      <Navigation />
      <BlogContent slug={slug} />
      <Footer />
    </LanguageProvider>
  );
}
