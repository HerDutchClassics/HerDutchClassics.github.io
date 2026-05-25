"use client";

import Link from "next/link";
import Image from "next/image";
import { BookReview } from "@/lib/types";
import { useLanguage } from "@/lib/language-context";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, ArrowRight } from "lucide-react";

interface TimelineCardProps {
  review: BookReview;
  index: number;
  isLast?: boolean;
}

export function TimelineCard({ review, index, isLast }: TimelineCardProps) {
  const { language, t } = useLanguage();
  const isEven = index % 2 === 0;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "nl" ? "nl-NL" : "en-US", {
      year: "numeric",
      month: "long",
    });
  };

  return (
    <div className={`relative flex items-stretch gap-6 md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
      {/* Timeline connector - mobile */}
      <div className="md:hidden absolute left-4 top-0 bottom-0 -translate-x-1/2 flex flex-col items-center">
        {/* Node */}
        <div className="relative z-10 mt-6">
          <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-background shadow-md" />
        </div>
        {/* Connector line to card */}
        <div className="absolute top-6 left-1/2 w-8 h-0.5 bg-primary/30" />
      </div>

      {/* Content Card */}
      <div className={`flex-1 md:w-[calc(50%-2rem)] ${isEven ? "md:pr-8" : "md:pl-8"}`}>
        <Link href={`/reviews/${review.id}`}>
          <Card className="group overflow-hidden border border-border/60 bg-card shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row">
                {/* Book Cover */}
                <div className="relative w-full sm:w-32 h-44 sm:h-auto flex-shrink-0 bg-muted overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="h-10 w-10 text-muted-foreground/20" />
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
                <div className="flex-1 p-5">
                  {/* Date Badge */}
                  <time className="inline-block text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {formatDate(review.reviewDate)}
                  </time>
                  
                  {/* Title & Author */}
                  <h3 className="mt-3 text-lg font-serif font-bold text-primary group-hover:text-primary/80 transition-colors leading-tight">
                    {review.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {review.author.name}
                  </p>

                  {/* Overall Rating */}
                  <div className="flex items-baseline gap-1.5 mt-4">
                    <span className="text-2xl font-serif font-bold text-foreground">
                      {review.ratings.overall}
                    </span>
                    <span className="text-muted-foreground text-sm">/10</span>
                  </div>

                  {/* Read More */}
                  <div className="flex items-center gap-1.5 mt-3 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span>{t.home.readReview}</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Timeline Node - Desktop */}
      <div className="hidden md:flex items-center justify-center w-8 relative">
        {/* Node */}
        <div className="relative z-10">
          <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-lg shadow-primary/20" />
        </div>
        {/* Connector line */}
        <div className={`absolute top-1/2 w-6 h-0.5 bg-primary/40 ${isEven ? "right-full" : "left-full"}`} />
      </div>

      {/* Spacer for alternating layout - Desktop */}
      <div className="hidden md:block flex-1 md:w-[calc(50%-2rem)]" />
    </div>
  );
}
