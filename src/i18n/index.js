import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// English
import commonEN from "./locales/en/common.json";
import homeEN from "./locales/en/home.json";
import aboutEN from "./locales/en/about.json";
import contactEN from "./locales/en/contact.json";
import categoriesEN from "./locales/en/categories.json";
import productsEN from "./locales/en/products.json";

// Arabic
import commonAR from "./locales/ar/common.json";
import homeAR from "./locales/ar/home.json";
import aboutAR from "./locales/ar/about.json";
import contactAR from "./locales/ar/contact.json";
import categoriesAR from "./locales/ar/categories.json";
import productsAR from "./locales/ar/products.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",

    supportedLngs: ["en", "ar"],

    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        common: commonEN,
        home: homeEN,
        about: aboutEN,
        contact: contactEN,
        categories: categoriesEN,
        products: productsEN,
      },

      ar: {
        common: commonAR,
        home: homeAR,
        about: aboutAR,
        contact: contactAR,
        categories: categoriesAR,
        products: productsAR,
      },
    },

    ns: [
      "common",
      "home",
      "about",
      "contact",
      "categories",
      "products",
    ],

    defaultNS: "common",
  });
document.documentElement.lang = i18n.language;
document.documentElement.dir =
  i18n.language === "ar" ? "rtl" : "ltr";
  i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
});
export default i18n;