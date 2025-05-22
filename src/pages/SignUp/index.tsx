import LeadIn from "@/components/dataDisplay/LeadIn";
import classes from "./SignUp.module.scss";
import TextField from "@/components/inputs/TextField";
import Button from "@/components/inputs/Button";
import { useTranslation } from "react-i18next";

function SignUp() {
  const { t } = useTranslation();
  return (
    <>
      <LeadIn
        heading={t("ComedianSignUpForm.introduction.heading")}
        paragraph={t("ComedianSignUpForm.introduction.paragraph")}
      />
      <section className={classes["sign-up"]}>
        <form className={classes["sign-up__form"]}>
          <span className={classes["fieldset__first-elements"]}>
            <TextField
              placeholder={t("ComedianSignUpForm.fields.namePlaceholder")}
              label={t("ComedianSignUpForm.fields.nameLabel")}
              color="primary"
              type="text"
            />

            <TextField
              placeholder={t("ComedianSignUpForm.fields.emailPlaceholder")}
              label={t("ComedianSignUpForm.fields.emailLabel")}
              color="primary"
              type="email"
            />
          </span>
          <TextField
            placeholder={t("ComedianSignUpForm.fields.jokePlaceholder")}
            label={t("ComedianSignUpForm.fields.jokeLabel")}
            color="primary"
            multiline
            rows={5}
          />
          <Button variant={"primary"} size="medium">
            {t("ComedianSignUpForm.actions.submitButton")}
          </Button>
        </form>
      </section>
    </>
  );
}

export default SignUp;
