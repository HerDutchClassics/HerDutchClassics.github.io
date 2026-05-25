"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RatingScale } from "@/components/rating-scale";
import { bookReviews } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowLeft, Quote, User, Calendar } from "lucide-react";

interface ReviewDetailPageProps {
  reviewId: string;
}

export function ReviewDetailPage({ reviewId }: ReviewDetailPageProps) {
  const { language, t } = useLanguage();
  
  const review = bookReviews.find((r) => r.id === reviewId);
  
  if (!review) {
    notFound();
  }

  // Find other books by same author
  const otherBooksBySameAuthor = bookReviews.filter(
    (r) => r.author.name === review.author.name && r.id !== review.id
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

      {/* Back Navigation */}
      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                {t.review.backToTimeline}
              </Link>
            </Button>
            <span className="text-muted-foreground">/</span>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/reviews">
                {t.review.backToReviews}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Book Header */}
            <div className="flex flex-col md:flex-row gap-8 mb-10">
              {/* Book Cover */}
              <div className="relative w-full md:w-64 h-96 flex-shrink-0 bg-secondary rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-muted-foreground/30" />
                </div>
                <Image
                  src={review.coverUrl}
                  alt={`Cover of ${review.title}`}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Book Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <time className="text-sm text-muted-foreground">
                    {formatDate(review.reviewDate)}
                  </time>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                  {review.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  {review.author.name}
                </p>

                {/* Overall Rating */}
                <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg inline-flex">
                  <span className="text-5xl font-serif font-bold text-primary">
                    {review.ratings.overall}
                  </span>
                  <div>
                    <span className="text-muted-foreground">/10</span>
                    <p className="text-sm text-muted-foreground">{t.review.overall}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Review Content */}
            <Card className="mb-8">
              <CardContent className="p-6 md:p-8">
                <p className="text-foreground leading-relaxed text-lg">
                  {review.review}
                </p>
              </CardContent>
            </Card>

            {/* Favorite Quote */}
            {review.favoriteQuote && (
              <Card className="mb-8 border-l-4 border-l-primary">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-lg font-serif font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Quote className="h-5 w-5 text-primary" />
                    {t.review.favoriteQuote}
                  </h2>
                  <blockquote className="text-xl italic text-muted-foreground leading-relaxed pl-4">
                    &ldquo;{review.favoriteQuote}&rdquo;
                  </blockquote>
                </CardContent>
              </Card>
            )}

            {/* Ratings */}
            <Card className="mb-8">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-lg font-serif font-semibold text-foreground mb-6">
                  {t.review.ratings}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <RatingScale label="Seriousness" value={review.ratings.seriousness} />
                  <RatingScale label="Writing Style" value={review.ratings.writingStyle} />
                  <RatingScale label="Emotional Depth" value={review.ratings.emotionalDepth} />
                  <RatingScale label="Originality" value={review.ratings.originality} />
                </div>
              </CardContent>
            </Card>

            {/* Author Bio */}
            <Card className="mb-8">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-lg font-serif font-semibold text-foreground mb-4 flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  {t.review.aboutAuthor}
                </h2>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                    <User className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {review.author.name}
                      <span className="font-normal text-muted-foreground ml-2">
                        ({review.author.birthYear}
                        {review.author.deathYear ? ` - ${review.author.deathYear}` : ""})
                      </span>
                    </h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      {review.author.bio}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Books by Author */}
            {otherBooksBySameAuthor.length > 0 && (
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-lg font-serif font-semibold text-foreground mb-6">
                    {t.review.otherBooks}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {otherBooksBySameAuthor.map((book) => (
                      <Link key={book.id} href={`/reviews/${book.id}`}>
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                          <div className="relative w-12 h-16 flex-shrink-0 bg-secondary rounded overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <BookOpen className="h-6 w-6 text-muted-foreground/30" />
                            </div>
                            <Image
                              src={book.coverUrl}
                              alt={`Cover of ${book.title}`}
                              fill
                              className="object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                          </div>
                          <div>
                            <h3 className="font-medium text-foreground">{book.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {book.ratings.overall}/10
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
