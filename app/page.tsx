import { LanguageProvider } from "@/lib/language-context";
import { HomePage } from "@/components/home-page";

export default function Page() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
}
