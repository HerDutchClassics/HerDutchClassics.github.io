import { LanguageProvider } from "@/lib/language-context";
import { ReviewsPage } from "@/components/reviews-page";

export default function Page() {
  return (
    <LanguageProvider>
      <ReviewsPage />
    </LanguageProvider>
  );
}
