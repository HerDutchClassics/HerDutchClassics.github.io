export const translations = {
  nl: {
    // Navigation
    nav: {
      timeline: "Tijdlijn",
      reviews: "Analyses",
      about: "Over dit project",
    },
    // Homepage
    home: {
      tagline: "Een literair naslagwerk",
      title: "Her Dutch Classics",
      subtitle: "Een encyclopedisch overzicht van het literaire erfgoed van Nederlandse vrouwelijke auteurs, met diepgaande analyses, biografische informatie en historische context.",
      booksReviewed: "Werken Geanalyseerd",
      authors: "Auteurs",
      quotesSaved: "Citaten Gedocumenteerd",
      ratingLegend: {
        seriousness: "Thematische Diepgang",
        writingStyle: "Literaire Stijl",
        emotionalDepth: "Psychologische Complexiteit",
        originality: "Originaliteit",
      },
      exploreTimeline: "Verken de Literaire Tijdlijn",
      readReview: "Lees Analyse",
    },
    // Reviews page
    reviews: {
      title: "Literaire Analyses",
      subtitle: "Wetenschappelijke analyses van werken door Nederlandse vrouwelijke auteurs",
      readMore: "Lees volledige analyse",
      publishedOn: "Gepubliceerd op",
      by: "door",
    },
    // Review detail page
    review: {
      backToTimeline: "Terug naar Tijdlijn",
      backToReviews: "Terug naar Analyses",
      favoriteQuote: "Kenmerkend Citaat",
      ratings: "Literaire Analyse",
      overall: "Totaalbeoordeling",
      aboutAuthor: "Biografische Informatie",
      otherBooks: "Andere werken van deze auteur",
    },
    // About page
    about: {
      title: "Over dit Project",
      subtitle: "De missie en methodologie achter Her Dutch Classics",
      intro: "Her Dutch Classics is een digitaal naslagwerk gewijd aan het documenteren en analyseren van het literaire erfgoed van Nederlandse vrouwelijke auteurs.",
      mission: {
        title: "Missie",
        content: "Dit project heeft als doel de literaire bijdragen van Nederlandse vrouwelijke auteurs systematisch te documenteren en toegankelijk te maken voor een breed publiek. Van de baanbrekende werken van Carry van Bruggen in het begin van de twintigste eeuw tot de hedendaagse filosofische romans van Connie Palmen, dit naslagwerk biedt een uitgebreid overzicht van hun literaire nalatenschap.",
      },
      approach: {
        title: "Methodologie",
        content: "Elk werk wordt geanalyseerd aan de hand van vier criteria: thematische diepgang, literaire stijl, psychologische complexiteit en originaliteit. Deze systematische benadering maakt vergelijkende analyse mogelijk en biedt lezers een gestructureerd kader om de literaire waarde van elk werk te beoordelen.",
      },
      connect: {
        title: "Bijdragen",
        content: "Suggesties voor opname van auteurs of werken zijn welkom. Dit naslagwerk streeft naar volledigheid en nauwkeurigheid in de documentatie van Nederlandse vrouwelijke literatuur.",
      },
    },
    // Footer
    footer: {
      tagline: "Een digitaal literair naslagwerk",
      copyright: "Alle rechten voorbehouden",
    },
    // Common
    common: {
      overall: "Totaal",
      seriousness: "Thematische Diepgang",
      writingStyle: "Literaire Stijl",
      emotionalDepth: "Psychologische Complexiteit",
      originality: "Originaliteit",
    },
  },
  en: {
    // Navigation
    nav: {
      timeline: "Timeline",
      reviews: "Analyses",
      about: "About",
    },
    // Homepage
    home: {
      tagline: "A literary reference work",
      title: "Her Dutch Classics",
      subtitle: "An encyclopedic overview of the literary heritage of Dutch female authors, featuring in-depth analyses, biographical information, and historical context.",
      booksReviewed: "Works Analyzed",
      authors: "Authors",
      quotesSaved: "Quotes Documented",
      ratingLegend: {
        seriousness: "Thematic Depth",
        writingStyle: "Literary Style",
        emotionalDepth: "Psychological Complexity",
        originality: "Originality",
      },
      exploreTimeline: "Explore the Literary Timeline",
      readReview: "Read Analysis",
    },
    // Reviews page
    reviews: {
      title: "Literary Analyses",
      subtitle: "Scholarly analyses of works by Dutch female authors",
      readMore: "Read full analysis",
      publishedOn: "Published on",
      by: "by",
    },
    // Review detail page
    review: {
      backToTimeline: "Back to Timeline",
      backToReviews: "Back to Analyses",
      favoriteQuote: "Notable Quote",
      ratings: "Literary Analysis",
      overall: "Overall Assessment",
      aboutAuthor: "Biographical Information",
      otherBooks: "Other works by this author",
    },
    // About page
    about: {
      title: "About This Project",
      subtitle: "The mission and methodology behind Her Dutch Classics",
      intro: "Her Dutch Classics is a digital reference work dedicated to documenting and analyzing the literary heritage of Dutch female authors.",
      mission: {
        title: "Mission",
        content: "This project aims to systematically document and make accessible the literary contributions of Dutch female authors to a broad audience. From the groundbreaking works of Carry van Bruggen in the early twentieth century to the contemporary philosophical novels of Connie Palmen, this reference work provides a comprehensive overview of their literary legacy.",
      },
      approach: {
        title: "Methodology",
        content: "Each work is analyzed according to four criteria: thematic depth, literary style, psychological complexity, and originality. This systematic approach enables comparative analysis and provides readers with a structured framework for assessing the literary value of each work.",
      },
      connect: {
        title: "Contributions",
        content: "Suggestions for inclusion of authors or works are welcome. This reference work strives for completeness and accuracy in documenting Dutch female literature.",
      },
    },
    // Footer
    footer: {
      tagline: "A digital literary reference work",
      copyright: "All rights reserved",
    },
    // Common
    common: {
      overall: "Overall",
      seriousness: "Thematic Depth",
      writingStyle: "Literary Style",
      emotionalDepth: "Psychological Complexity",
      originality: "Originality",
    },
  },
} as const;

export type Language = keyof typeof translations;
export type Translations = typeof translations.nl;
