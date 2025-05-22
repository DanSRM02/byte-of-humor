import i18next from "i18next";
import translationEN from "./locales/en/en.json";
import translationPT from "./locales/pt/pt.json";
import translationES from "./locales/es/es.json";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const availableLanguages = {
  en: { translation: translationEN },
  pt: { translation: translationPT },
  es: { translation: translationES },
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
