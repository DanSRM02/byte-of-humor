import i18next from "i18next";
import translationEN from "./locales/en/en.json";
import translationDE from "./locales/de/de.json";
import translationFR from "./locales/fr/fr.json";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const availableLanguages = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
  de: { translation: translationDE },
};

const optionsLanguageDetector = {
  order: ["navigator", "htmlTag", "path"]
}

i18next.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: "en",
  resources: availableLanguages,
  detection: optionsLanguageDetector,
  interpolation: { escapeValue: false }
});

export default i18next;
