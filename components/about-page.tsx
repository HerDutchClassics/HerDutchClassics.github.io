"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useLanguage } from "@/lib/language-context";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Target, Feather, Users } from "lucide-react";

export function AboutPage() {
  const { t, language } = useLanguage();

  const criteriaDescriptions = {
    nl: {
      seriousness: "Meet de thematische complexiteit en intellectuele ambitie van het werk.",
      writingStyle: "Evalueert de literaire kwaliteit, proza-stijl en narratieve technieken.",
      emotionalDepth: "Analyseert de psychologische gelaagdheid en karakterontwikkeling.",
      originality: "Beoordeelt de vernieuwende aspecten binnen de literaire traditie.",
    },
    en: {
      seriousness: "Measures the thematic complexity and intellectual ambition of the work.",
      writingStyle: "Evaluates literary quality, prose style, and narrative techniques.",
      emotionalDepth: "Analyzes psychological layering and character development.",
      originality: "Assesses innovative aspects within the literary tradition.",
    },
  };

  const criteria = criteriaDescriptions[language];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="py-12 md:py-20 border-b border-border bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center">
              <BookOpen className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              {t.about.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Intro */}
            <p className="text-lg text-foreground leading-relaxed mb-10 text-center">
              {t.about.intro}
            </p>

            {/* Mission */}
            <Card className="mb-6">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-serif font-semibold text-foreground mb-3">
                      {t.about.mission.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {t.about.mission.content}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Methodology */}
            <Card className="mb-6">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Feather className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-serif font-semibold text-foreground mb-3">
                      {t.about.approach.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {t.about.approach.content}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Analysis Criteria */}
            <Card className="mb-6 bg-secondary/30">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
                  {language === "nl" ? "Analysecriteria" : "Analysis Criteria"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">{t.common.seriousness}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {criteria.seriousness}
                    </p>
                  </div>
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Feather className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">{t.common.writingStyle}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {criteria.writingStyle}
                    </p>
                  </div>
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">{t.common.emotionalDepth}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {criteria.emotionalDepth}
                    </p>
                  </div>
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-primary font-bold text-lg">*</span>
                      <span className="font-medium text-foreground">{t.common.originality}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {criteria.originality}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contributions */}
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-serif font-semibold text-foreground mb-3">
                      {t.about.connect.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {t.about.connect.content}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
