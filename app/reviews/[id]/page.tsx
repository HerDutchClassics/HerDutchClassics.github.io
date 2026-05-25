import { LanguageProvider } from "@/lib/language-context";
import { ReviewDetailPage } from "@/components/review-detail-page";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  
  return (
    <LanguageProvider>
      <ReviewDetailPage reviewId={id} />
    </LanguageProvider>
  );
}
