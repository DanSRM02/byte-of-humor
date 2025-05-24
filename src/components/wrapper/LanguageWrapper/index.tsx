import { DEFAULT_LANG, SUPPORTED_LANGS } from "@/utils/const";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation, useParams } from "react-router-dom";

const LanguageWrapper = () => {
  const { i18n } = useTranslation();
  const languageConfig = useParams();
  const currentLangConfig = languageConfig.lang;

  const location = useLocation();

  console.log(location.pathname);

  const languageAndLocale = currentLangConfig?.split("-");
  let currentLanguage = languageAndLocale?.[0];
  let currentLocale = languageAndLocale?.[1];

  const availableLanguage =
    SUPPORTED_LANGS.find(
      (supportedLanguage) => supportedLanguage === currentLanguage
    ) ?? DEFAULT_LANG;

  useEffect(() => {
    if (availableLanguage && currentLocale) {
      i18n.changeLanguage(`${availableLanguage}-${currentLocale}`);
    } else {
      i18n.changeLanguage(availableLanguage);
    }
  }, [availableLanguage, currentLocale]);

  return <Outlet />;
};

export default LanguageWrapper;
