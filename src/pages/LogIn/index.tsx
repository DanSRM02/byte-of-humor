import LeadIn from "@/components/dataDisplay/LeadIn";
import Button from "@/components/inputs/Button";
import TextField from "@/components/inputs/TextField";
import classes from "./LogIn.module.scss";
import { useTranslation } from "react-i18next";
import { useNavigate, useOutletContext } from "react-router-dom";
import type { OutletCtxImpl } from "@/types/OutletImpl";

function LogIn() {
  const { t } = useTranslation();
  const { localizationRouter } = useOutletContext<OutletCtxImpl>();
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/${localizationRouter}/setup/select-country`);
  };
  return (
    <>
      <section
        className={classes["log-in"]}
        aria-label="Log in section"
        tabIndex={0}
      >
        <LeadIn
          heading={t("ComedianLoginForm.introduction.heading")}
          paragraph={t("ComedianLoginForm.introduction.paragraph")}
        />
        <form
          className={classes["log-in__form"]}
          aria-label="Comedian log in form"
        >
          <TextField
            id="comedian-name"
            placeholder={t("ComedianLoginForm.fields.namePlaceholder")}
            label={t("ComedianLoginForm.fields.nameLabel")}
            color="primary"
            type="text"
            aria-label={t("ComedianLoginForm.fields.nameLabel")}
          />

          <TextField
            id="comedian-email"
            placeholder={t("ComedianLoginForm.fields.emailPlaceholder")}
            label={t("ComedianLoginForm.fields.emailLabel")}
            color="primary"
            type="email"
            aria-label={t("ComedianLoginForm.fields.emailLabel")}
          />

          <Button
            variant={"primary"}
            size="medium"
            onClick={handleRedirect}
            aria-label={t("ComedianLoginForm.actions.submitButton")}
            tabIndex={0}
          >
            {t("ComedianLoginForm.actions.submitButton")}
          </Button>
        </form>
      </section>
    </>
  );
}

export default LogIn;
