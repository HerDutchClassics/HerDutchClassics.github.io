import { LanguageProvider } from "@/lib/language-context";
import { AboutPage } from "@/components/about-page";

export default function Page() {
  return (
    <LanguageProvider>
      <AboutPage />
    </LanguageProvider>
  );
}
