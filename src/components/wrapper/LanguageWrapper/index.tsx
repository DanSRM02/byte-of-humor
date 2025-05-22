import { DEFAULT_LANG, SUPPORTED_LANGS } from "@/utils/const";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useParams } from "react-router-dom";

const LanguageWrapper = () => {
  const { i18n } = useTranslation();
  const languageConfig = useParams();
  const currentlanguage = languageConfig.lang;

  const availableLanguage =
    SUPPORTED_LANGS.find(
      (supportedLanguage) => supportedLanguage === currentlanguage
    ) ?? DEFAULT_LANG;

  useEffect(() => {
    i18n.changeLanguage(availableLanguage);
  }, [currentlanguage]);
  return <Outlet />;
};

export default LanguageWrapper;
