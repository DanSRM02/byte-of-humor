import LeadIn from "@/components/dataDisplay/LeadIn";
import classes from "./SelectCountry.module.scss";
import { useTranslation } from "react-i18next";
import TextField from "@/components/inputs/TextField";
import { countries } from "@/utils/textConst";
import { useNavigate, useLocation } from "react-router-dom";
import { useRef } from "react";
import { DEFAULT_LANG, SUPPORTED_LANGS } from "@/utils/const";

function SelectCountry() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const selectCountryRef = useRef<HTMLSelectElement>(null);
  const selectLanguageRef = useRef<HTMLSelectElement>(null);

  const handleSelectChange = () => {
    const code = selectCountryRef.current?.value;
    const language = selectLanguageRef.current?.value;

    if (code && language) {
      const newLangParam = `${language}-${code}`;
      const currentPath = location.pathname.split("/");
      currentPath[1] = newLangParam;
      const pathToRedirect = `/${currentPath.slice(1, -1).join("/")}/final`;
      navigate(pathToRedirect);
    }
  };

  return (
    <>
      <section
        className={classes["select-country"]}
        aria-label="Select your country"
        tabIndex={0}
      >
        <aside
          className={classes["select-country__aside"]}
          aria-label="Country selection introduction"
          tabIndex={0}
        >
          <LeadIn
            heading={t("SelectCountry.introduction.heading")}
            paragraph={t("SelectCountry.introduction.paragraph")}
          />
        </aside>
        <article
          className={classes["select-country__article"]}
          aria-label="Country options"
          tabIndex={0}
        >
          <TextField
            color="secondary"
            refSelect={selectCountryRef}
            id="country-select"
            label={t("SelectCountry.searchCountryControls.selectLabel")}
            select
            onChange={handleSelectChange}
            required
            aria-label={t("SelectCountry.searchCountryControls.selectLabel")}
          >
            <option value="" selected disabled>
              {t("SelectCountry.searchCountryControls.selectPlaceholder")}
            </option>
            {countries.map((country, index) => (
              <option key={`${index}${country.code}`} value={country.code}>
                {t(`SelectCountry.countryNames.${country.code}`)}
              </option>
            ))}
          </TextField>
          <TextField
            color="secondary"
            refSelect={selectLanguageRef}
            id="language-select"
            label={t("SelectCountry.searchLanguageControls.selectLabel")}
            select
            onChange={handleSelectChange}
            required
            aria-label={t("SelectCountry.searchLanguageControls.selectLabel")}
          >
            <option value="" selected disabled>
              {t("SelectCountry.searchLanguageControls.selectPlaceholder")}
            </option>
            <option value={DEFAULT_LANG}>
              {t("SelectCountry.languagesNames.en")}
            </option>
            {SUPPORTED_LANGS.map((lang, index) => (
              <option key={index} value={lang}>
                {t(`SelectCountry.languagesNames.${lang}`)}
              </option>
            ))}
          </TextField>
        </article>
      </section>
    </>
  );
}

export default SelectCountry;
