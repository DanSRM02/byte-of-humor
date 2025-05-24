import LeadIn from "@/components/dataDisplay/LeadIn";
import classes from "./SelectCountry.module.scss";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "@/components/inputs/Button";
import { countries } from "@/utils/const";
import { useNavigate } from "react-router-dom";

function SelectCountry() {
  const { t, i18n } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState("");
  const navigate = useNavigate();

  const handleClick = (code: string) => {
    setSelectedCountry(code);
  };

  useEffect(() => {
    if (selectedCountry && selectedCountry !== "") {
      navigate(`/${i18n.language}-${selectedCountry}/setup/final`);
    }
  }, [selectedCountry]);

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
          {countries.map((country, index) => (
            <Button
              key={`${index}${country.code}`}
              variant="secondary"
              size="medium"
              onClick={() => handleClick(country.code)}
            >
              {country.name}
            </Button>
          ))}
        </article>
      </section>
    </>
  );
}

export default SelectCountry;
