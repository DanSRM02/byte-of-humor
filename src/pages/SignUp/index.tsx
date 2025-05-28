import LeadIn from "@/components/dataDisplay/LeadIn";
import classes from "./SignUp.module.scss";
import TextField from "@/components/inputs/TextField";
import Button from "@/components/inputs/Button";
import { useTranslation } from "react-i18next";
import { useNavigate, useOutletContext } from "react-router-dom";
import type { OutletCtxImpl } from "@/types/OutletImpl";

function SignUp() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { localizationRouter } = useOutletContext<OutletCtxImpl>();

  const handleRedirect = () => {
    navigate(`/${localizationRouter}/setup/select-country`);
  };
  return (
    <>
      <section
        className={classes["sign-up"]}
        aria-label="Sign up section"
        tabIndex={0}
      >
        <LeadIn
          heading={t("ComedianSignUpForm.introduction.heading")}
          paragraph={t("ComedianSignUpForm.introduction.paragraph")}
        />
        <form
          className={classes["sign-up__form"]}
          aria-label="Comedian sign up form"
        >
          <fieldset className={classes["fieldset"]}>
            <legend className={classes["fieldset__legend"]}>
              {t("ComedianSignUpForm.introduction.heading")}
            </legend>
            <span className={classes["fieldset__first-elements"]}>
              <TextField
                placeholder={t("ComedianSignUpForm.fields.namePlaceholder")}
                label={t("ComedianSignUpForm.fields.nameLabel")}
                color="primary"
                type="text"
                id="comedian-name"
                aria-label={t("ComedianSignUpForm.fields.nameLabel")}
              />

              <TextField
                id="comedian-email"
                placeholder={t("ComedianSignUpForm.fields.emailPlaceholder")}
                label={t("ComedianSignUpForm.fields.emailLabel")}
                color="primary"
                type="email"
                aria-label={t("ComedianSignUpForm.fields.emailLabel")}
              />
            </span>
            <TextField
              id="comedian-joke"
              placeholder={t("ComedianSignUpForm.fields.jokePlaceholder")}
              label={t("ComedianSignUpForm.fields.jokeLabel")}
              color="primary"
              multiline
              rows={5}
              aria-label={t("ComedianSignUpForm.fields.jokeLabel")}
            />
          </fieldset>
          <Button
            variant={"primary"}
            size="medium"
            onClick={handleRedirect}
            aria-label={t("ComedianSignUpForm.actions.submitButton")}
            tabIndex={0}
          >
            {t("ComedianSignUpForm.actions.submitButton")}
          </Button>
        </form>
      </section>
    </>
  );
}

export default SignUp;
