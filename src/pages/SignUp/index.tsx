import LeadIn from "@/components/dataDisplay/LeadIn";
import classes from "./SignUp.module.scss";
import TextField from "@/components/inputs/TextField";
import Button from "@/components/inputs/Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

function SignUp() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("../select-country");
  };

  const translations = useMemo(
    () => ({
      intro: {
        heading: t("ComedianSignUpForm.introduction.heading"),
        paragraph: t("ComedianSignUpForm.introduction.paragraph"),
      },
      fields: {
        name: {
          placeholder: t("ComedianSignUpForm.fields.namePlaceholder"),
          label: t("ComedianSignUpForm.fields.nameLabel"),
        },
        email: {
          placeholder: t("ComedianSignUpForm.fields.emailPlaceholder"),
          label: t("ComedianSignUpForm.fields.emailLabel"),
        },
        joke: {
          placeholder: t("ComedianSignUpForm.fields.jokePlaceholder"),
          label: t("ComedianSignUpForm.fields.jokeLabel"),
        },
      },
      actions: {
        submitButton: t("ComedianSignUpForm.actions.submitButton"),
      },
    }),
    [t]
  );

  return (
    <>
      <section
        className={classes["sign-up"]}
        aria-label="Sign up section"
        tabIndex={0}
      >
        <LeadIn
          heading={translations.intro.heading}
          paragraph={translations.intro.paragraph}
        />
        <form
          className={classes["sign-up__form"]}
          aria-label="Comedian sign up form"
        >
          <fieldset className={classes["fieldset"]}>
            <legend className={classes["fieldset__legend"]}>
              {translations.intro.heading}
            </legend>
            <span className={classes["fieldset__first-elements"]}>
              <TextField
                placeholder={translations.fields.name.placeholder}
                label={translations.fields.name.label}
                color="primary"
                type="text"
                id="comedian-name"
                aria-label={translations.fields.name.label}
              />

              <TextField
                id="comedian-email"
                placeholder={translations.fields.email.placeholder}
                label={translations.fields.email.label}
                color="primary"
                type="email"
                aria-label={translations.fields.email.label}
              />
            </span>
            <TextField
              id="comedian-joke"
              placeholder={translations.fields.joke.placeholder}
              label={translations.fields.joke.label}
              color="primary"
              multiline
              rows={5}
              aria-label={translations.fields.joke.label}
            />
          </fieldset>
          <Button
            type="button"
            variant={"primary"}
            size="medium"
            onClick={handleRedirect}
            aria-label={translations.actions.submitButton}
            tabIndex={0}
          >
            {translations.actions.submitButton}
          </Button>
        </form>
      </section>
    </>
  );
}

export default SignUp;
