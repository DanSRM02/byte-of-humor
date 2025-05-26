import LeadIn from "@/components/dataDisplay/LeadIn";
import Button from "@/components/inputs/Button";
import TextField from "@/components/inputs/TextField";
import classes from "./LogIn.module.scss";
import { useTranslation } from "react-i18next";
import { useNavigate, useOutletContext } from "react-router-dom";
import type { OutletCtxType } from "@/types/OutletType";

function LogIn() {
  const { t } = useTranslation();
  const { localizationRouter } = useOutletContext<OutletCtxType>();
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/${localizationRouter}/setup/select-country`);
  };
  return (
    <>
      <section className={classes["log-in"]}>
        <LeadIn
          heading={t("ComedianLoginForm.introduction.heading")}
          paragraph={t("ComedianLoginForm.introduction.paragraph")}
        />
        <form className={classes["log-in__form"]}>
          <TextField
            id="comedian-name"
            placeholder={t("ComedianLoginForm.fields.namePlaceholder")}
            label={t("ComedianLoginForm.fields.nameLabel")}
            color="primary"
            type="text"
          />

          <TextField
            id="comedian-email"
            placeholder={t("ComedianLoginForm.fields.emailPlaceholder")}
            label={t("ComedianLoginForm.fields.emailLabel")}
            color="primary"
            type="email"
          />

          <Button variant={"primary"} size="medium" onClick={handleRedirect}>
            {t("ComedianLoginForm.actions.submitButton")}
          </Button>
        </form>
      </section>
    </>
  );
}

export default LogIn;
