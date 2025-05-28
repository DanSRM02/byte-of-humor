import type { OutletCtxImpl } from "@/types/OutletImpl";
import { DEFAULT_LANG, DEFAULT_LOCAL, SUPPORTED_LANGS } from "@/utils/const";
import { countries } from "@/utils/textConst";
import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

const   LanguageWrapper = () => {
  const { i18n } = useTranslation();
  const { lang } = useParams<{ lang?: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const languageConfig: OutletCtxImpl = useMemo(() => {
    const [language, locale] = lang?.split("-") || [];

    const validatedLanguage =
      SUPPORTED_LANGS.find((supportedLang) => supportedLang === language) ??
      DEFAULT_LANG;

    const validatedLocaleObject = countries.find(
      (country) => country.code === locale
    );

    console.log(validatedLanguage);
    

    const validatedLocaleCode = validatedLocaleObject?.code ?? DEFAULT_LOCAL;

    const localizationRouter = `${validatedLanguage}-${validatedLocaleCode}`;

    return {
      language: validatedLanguage,
      locale: validatedLocaleCode,
      localizationRouter: localizationRouter,
    };
  }, [lang]);

  useEffect(() => {
    i18n.changeLanguage(languageConfig.localizationRouter);
  }, [languageConfig.localizationRouter, i18n]);

  useEffect(() => {
    const correctUrlLang = languageConfig.localizationRouter;
    const currentPath = location.pathname;
    if (lang !== correctUrlLang) {
      const pathSegmenths = currentPath.split("/").filter((space) => space);
      const correctPath = `/${correctUrlLang}/${pathSegmenths
        .slice(1)
        .join("/")}`;

      navigate(correctPath, { replace: true });
    }
  }, [languageConfig.localizationRouter, navigate, lang]);

  return <Outlet context={languageConfig} />;
};

export default LanguageWrapper;
