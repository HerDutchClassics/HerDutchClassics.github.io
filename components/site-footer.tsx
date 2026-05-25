"use client";

import { useLanguage } from "@/lib/language-context";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <BookOpen className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <span className="font-serif font-semibold text-foreground">Her Dutch Classics</span>
              <span className="text-muted-foreground text-sm ml-2">- {t.footer.tagline}</span>
            </div>
          </div>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              {t.nav.timeline}
            </Link>
            <Link href="/reviews" className="hover:text-foreground transition-colors">
              {t.nav.reviews}
            </Link>
            <Link href="/about" className="hover:text-foreground transition-colors">
              {t.nav.about}
            </Link>
          </nav>
        </div>
        <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Her Dutch Classics. {t.footer.copyright}.</p>
        </div>
      </div>
    </footer>
  );
}
