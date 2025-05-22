import LeadIn from "@/components/dataDisplay/LeadIn";
import Button from "@/components/inputs/Button";
import TextField from "@/components/inputs/TextField";
import classes from "./LogIn.module.scss";
import { useTranslation } from "react-i18next";

function LogIn() {
  const { t } = useTranslation();
  return (
    <>
      <LeadIn
        heading={t("ComedianLoginForm.introduction.heading")}
        paragraph={t("ComedianLoginForm.introduction.paragraph")}
      />
      <section className={classes["log-in"]}>
        <form className={classes["log-in__form"]}>
          <TextField
            placeholder={t("ComedianLoginForm.fields.namePlaceholder")}
            label={t("ComedianLoginForm.fields.nameLabel")}
            color="primary"
            type="text"
          />

          <TextField
            placeholder={t("ComedianLoginForm.fields.emailPlaceholder")}
            label={t("ComedianLoginForm.fields.emailLabel")}
            color="primary"
            type="email"
          />

          <Button variant={"primary"} size="medium">
            {t("ComedianLoginForm.actions.submitButton")}
          </Button>
        </form>
      </section>
    </>
  );
}

export default LogIn;
