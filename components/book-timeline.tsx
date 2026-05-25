"use client";

import { BookReview } from "@/lib/types";
import { TimelineCard } from "./timeline-card";

interface BookTimelineProps {
  reviews: BookReview[];
}

export function BookTimeline({ reviews }: BookTimelineProps) {
  // Sort reviews by date (newest first)
  const sortedReviews = [...reviews].sort(
    (a, b) => new Date(b.reviewDate).getTime() - new Date(a.reviewDate).getTime()
  );

  // Group reviews by year for the timeline
  const reviewsByYear = sortedReviews.reduce((acc, review) => {
    const year = new Date(review.reviewDate).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(review);
    return acc;
  }, {} as Record<number, BookReview[]>);

  const years = Object.keys(reviewsByYear).map(Number).sort((a, b) => b - a);

  return (
    <div className="relative">
      {/* Main Timeline Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/60 to-primary/20 md:-translate-x-1/2" />
      
      {/* Start dot */}
      <div className="absolute left-4 md:left-1/2 -top-2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30 -translate-x-1/2 md:-translate-x-1/2 z-10" />

      {/* Timeline Content */}
      <div className="flex flex-col">
        {years.map((year, yearIndex) => (
          <div key={year} className="relative">
            {/* Year Marker */}
            <div className="relative flex items-center mb-8 mt-8">
              {/* Year badge - centered on timeline */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20">
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-serif font-bold text-lg shadow-lg shadow-primary/20">
                  {year}
                </div>
              </div>
              {/* Decorative line extension */}
              <div className="hidden md:block absolute left-1/2 w-8 h-0.5 bg-primary/40 -translate-x-full" />
              <div className="hidden md:block absolute left-1/2 w-8 h-0.5 bg-primary/40" />
            </div>

            {/* Reviews for this year */}
            <div className="flex flex-col gap-6 md:gap-10 pl-12 md:pl-0">
              {reviewsByYear[year].map((review, index) => {
                const globalIndex = sortedReviews.indexOf(review);
                return (
                  <TimelineCard 
                    key={review.id} 
                    review={review} 
                    index={globalIndex}
                    isLast={yearIndex === years.length - 1 && index === reviewsByYear[year].length - 1}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* End marker */}
      <div className="relative flex items-center justify-center mt-12">
        <div className="absolute left-4 md:left-1/2 -translate-x-1/2">
          <div className="w-3 h-3 rounded-full bg-primary/40 ring-4 ring-primary/10" />
        </div>
      </div>
    </div>
  );
}
