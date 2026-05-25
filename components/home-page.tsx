"use client";

import { BookTimeline } from "@/components/book-timeline";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { bookReviews } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";
import { BookOpen, Feather, Users, Sparkles } from "lucide-react";

export function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Feather className="h-4 w-4" />
              <span>{t.home.tagline}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-4 text-balance">
              {t.home.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              {t.home.subtitle}
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 md:gap-12 mt-10">
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-foreground">
                {bookReviews.length}
              </div>
              <div className="text-sm text-muted-foreground">{t.home.booksReviewed}</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-foreground">
                {new Set(bookReviews.map((r) => r.author.name)).size}
              </div>
              <div className="text-sm text-muted-foreground">{t.home.authors}</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-foreground">
                {bookReviews.filter((r) => r.favoriteQuote).length}
              </div>
              <div className="text-sm text-muted-foreground">{t.home.quotesSaved}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Legend */}
      <section className="py-6 border-y border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{t.home.ratingLegend.seriousness}</span>
            </div>
            <div className="flex items-center gap-2">
              <Feather className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{t.home.ratingLegend.writingStyle}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{t.home.ratingLegend.emotionalDepth}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{t.home.ratingLegend.originality}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-12 md:py-16 flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-primary mb-8 text-center">
              {t.home.exploreTimeline}
            </h2>
            <BookTimeline reviews={bookReviews} />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
