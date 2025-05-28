import LeadIn from "@/components/dataDisplay/LeadIn";
import classes from "./SelectCountry.module.scss";
import { useTranslation } from "react-i18next";
import TextField from "@/components/inputs/TextField";
import type { OutletCtxImpl } from "@/types/OutletImpl";
import { locales } from "@/utils/textConst";
import { useNavigate, useOutletContext, useLocation } from "react-router-dom";
import { useRef } from "react";

function SelectCountry() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const selectCountryRef = useRef<HTMLSelectElement>(null);
  const { language } = useOutletContext<OutletCtxImpl>();

  const handleSelectChange = () => {
    const code = selectCountryRef.current?.value;
    const newLangParam = `${language}-${code}`;
    const currentPath = location.pathname.split("/");
    currentPath[1] = newLangParam;
    const pathToRedirect = `/${currentPath.slice(1, -1).join("/")}/final`;
    navigate(pathToRedirect);
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
            label={t("SelectCountry.searchControls.selectLabel")}
            select
            onChange={handleSelectChange}
            required
            aria-label={t("SelectCountry.searchControls.selectLabel")}
          >
            <option value="" selected disabled>
              {t("SelectCountry.searchControls.selectPlaceholder")}
            </option>
            {locales.map((country, index) => (
              <option key={`${index}${country.code}`} value={country.code}>
                {t(`SelectCountry.countryNames.${country.code}`)}
              </option>
            ))}
          </TextField>
        </article>
      </section>
    </>
  );
}

export default SelectCountry;
