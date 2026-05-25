"use client";

import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { bookReviews } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, ArrowRight, Quote } from "lucide-react";

export function ReviewsPage() {
  const { language, t } = useLanguage();

  // Sort by date descending (most recent first)
  const sortedReviews = [...bookReviews].sort(
    (a, b) => new Date(b.reviewDate).getTime() - new Date(a.reviewDate).getTime()
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "nl" ? "nl-NL" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="py-12 md:py-16 border-b border-border bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              {t.reviews.title}
            </h1>
            <p className="text-muted-foreground">
              {t.reviews.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12 md:py-16 flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-6">
              {sortedReviews.map((review) => (
                <Link key={review.id} href={`/reviews/${review.id}`}>
                  <Card className="group overflow-hidden border-border/50 bg-card shadow-sm hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        {/* Book Cover */}
                        <div className="relative w-full md:w-40 h-56 md:h-auto flex-shrink-0 bg-secondary overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <BookOpen className="h-12 w-12 text-muted-foreground/30" />
                          </div>
                          <Image
                            src={review.coverUrl}
                            alt={`Cover of ${review.title}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-6">
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <time className="text-xs font-medium text-accent-foreground bg-accent px-2 py-1 rounded">
                              {t.reviews.publishedOn} {formatDate(review.reviewDate)}
                            </time>
                            <span className="text-xs text-muted-foreground">
                              {t.reviews.by} {review.author.name}
                            </span>
                          </div>

                          <h2 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                            {review.title}
                          </h2>

                          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                            {review.review}
                          </p>

                          {/* Quote Preview */}
                          {review.favoriteQuote && (
                            <div className="flex items-start gap-2 mb-4 text-sm">
                              <Quote className="h-4 w-4 text-primary/50 flex-shrink-0 mt-0.5" />
                              <p className="italic text-muted-foreground line-clamp-1">
                                {review.favoriteQuote}
                              </p>
                            </div>
                          )}

                          <div className="flex items-center justify-between pt-3 border-t border-border">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-serif font-bold text-primary">
                                {review.ratings.overall}
                              </span>
                              <span className="text-muted-foreground text-sm">/10</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-primary font-medium">
                              <span>{t.reviews.readMore}</span>
                              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
