import LeadIn from "@/components/dataDisplay/LeadIn";
import classes from "./SignUp.module.scss";
import TextField from "@/components/inputs/TextField";
import Button from "@/components/inputs/Button";
import { useTranslation } from "react-i18next";
import { useNavigate, useOutletContext } from "react-router-dom";
import type { OutletCtxType } from "@/types/OutletType";

function SignUp() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { localizationRouter } = useOutletContext<OutletCtxType>();

  const handleRedirect = () => {
    navigate(`/${localizationRouter}/setup/select-country`);
  };
  return (
    <>
      <section className={classes["sign-up"]}>
        <LeadIn
          heading={t("ComedianSignUpForm.introduction.heading")}
          paragraph={t("ComedianSignUpForm.introduction.paragraph")}
        />
        <form className={classes["sign-up__form"]}>
          <span className={classes["fieldset__first-elements"]}>
            <TextField
              placeholder={t("ComedianSignUpForm.fields.namePlaceholder")}
              label={t("ComedianSignUpForm.fields.nameLabel")}
              color="primary"
              type="text"
              id="comedian-name"
            />

            <TextField
              id="comedian-email"
              placeholder={t("ComedianSignUpForm.fields.emailPlaceholder")}
              label={t("ComedianSignUpForm.fields.emailLabel")}
              color="primary"
              type="email"
            />
          </span>
          <TextField
            id="comedian-joke"
            placeholder={t("ComedianSignUpForm.fields.jokePlaceholder")}
            label={t("ComedianSignUpForm.fields.jokeLabel")}
            color="primary"
            multiline
            rows={5}
          />
          <Button variant={"primary"} size="medium" onClick={handleRedirect}>
            {t("ComedianSignUpForm.actions.submitButton")}
          </Button>
        </form>
      </section>
    </>
  );
}

export default SignUp;
