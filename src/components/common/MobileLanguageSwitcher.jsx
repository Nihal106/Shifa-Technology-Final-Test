import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function MobileLanguageSwitcher() {
  const { i18n } = useTranslation();

  const isEnglish = i18n.language === "en";

  return (
    <button
      type="button"
      onClick={() =>
        i18n.changeLanguage(isEnglish ? "ar" : "en")
      }
      className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 font-medium transition hover:border-blue-600 hover:text-blue-600"
    >
      <Globe size={20} />

      {isEnglish ? "العربية" : "English"}
    </button>
  );
}