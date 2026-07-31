import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="rounded-full border border-gray-300 px-4 py-2 font-medium transition hover:bg-gray-100"
    >
      {i18n.language === "en" ? "EN | العربية" : "العربية | EN"}
    </button>
  );
}