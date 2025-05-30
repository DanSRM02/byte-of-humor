import LeadIn from "@/components/dataDisplay/LeadIn";
import Button from "@/components/inputs/Button";
import TextField from "@/components/inputs/TextField";
import classes from "./LogIn.module.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

function LogIn() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("../select-country");
  };

  const translations = useMemo(
    () => ({
      intro: {
        heading: t("ComedianLogInForm.introduction.heading"),
        paragraph: t("ComedianLogInForm.introduction.paragraph"),
      },
      fields: {
        name: {
          placeholder: t("ComedianLogInForm.fields.namePlaceholder"),
          label: t("ComedianLogInForm.fields.nameLabel"),
        },
        email: {
          placeholder: t("ComedianLogInForm.fields.emailPlaceholder"),
          label: t("ComedianLogInForm.fields.emailLabel"),
        },
      },
      actions: {
        submitButton: t("ComedianLogInForm.actions.submitButton"),
      },
    }),
    [t]
  );

  return (
    <>
      <section
        className={classes["log-in"]}
        aria-label="Log in section"
        tabIndex={0}
      >
        <LeadIn
          heading={translations.intro.heading}
          paragraph={translations.intro.paragraph}
        />
        <form
          className={classes["log-in__form"]}
          aria-label="Comedian log in form"
        >
          <TextField
            id="comedian-name"
            placeholder={translations.fields.name.placeholder}
            label={translations.fields.name.label}
            color="primary"
            type="text"
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

export default LogIn;
