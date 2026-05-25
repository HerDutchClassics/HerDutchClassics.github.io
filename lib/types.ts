export interface BookReview {
  id: string;
  title: string;
  author: Author;
  coverUrl: string;
  reviewDate: string;
  review: string;
  favoriteQuote?: string;
  ratings: {
    seriousness: number;
    writingStyle: number;
    emotionalDepth: number;
    originality: number;
    overall: number;
  };
}

export interface Author {
  name: string;
  birthYear: number;
  deathYear?: number;
  bio: string;
  photoUrl?: string;
}
