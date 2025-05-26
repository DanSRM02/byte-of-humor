import LeadIn from "@/components/dataDisplay/LeadIn";
import classes from "./SelectCountry.module.scss";
import { useTranslation } from "react-i18next";
import Button from "@/components/inputs/Button";
import { locales } from "@/utils/const";
import { useNavigate, useOutletContext, useLocation } from "react-router-dom";
import type { OutletCtxType } from "@/types/OutletType";

function SelectCountry() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useOutletContext<OutletCtxType>();

  const handleClick = (code: string) => {
    const newLangParam = `${language}-${code}`;
    const currentPath = location.pathname.split("/");
    currentPath[1] = newLangParam;
    const pathToRedirect = `/${currentPath.slice(1, -1).join("/")}/final`;
    navigate(pathToRedirect);
  };

  return (
    <>
      <section className={classes["select-country"]}>
        <aside className={classes["select-country__aside"]}>
          <LeadIn
            heading={t("SelectCountry.introduction.heading")}
            paragraph={t("SelectCountry.introduction.paragraph")}
          />
        </aside>
        <article className={classes["select-country__article"]}>
          {locales.map((country, index) => (
            <Button
              key={`${index}${country.code}`}
              variant="primary"
              size="medium"
              onClick={() => handleClick(country.code)}
            >
              {t(`SelectCountry.countryNames.${country.code}`)}
            </Button>
          ))}
        </article>
      </section>
    </>
  );
}

export default SelectCountry;
