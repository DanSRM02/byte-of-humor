import LeadIn from "@/components/dataDisplay/LeadIn";
import Card from "@/components/feedback/Card";
import colombiaImg from "@assets/dark_colombia.png";
import unitedStateImg from "@assets/dark_image_united.png";
import portugalImg from "@assets/dar_portugal.png";
import logoBoH from "@assets/logo-complete-recorted.png";
import classes from "./TheMediumSetup.module.scss";
import Button from "@/components/inputs/Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
function TheMediumSetupPage() {
  const { t } = useTranslation();
  const navigation = useNavigate();

  const handleRedirection = () => {
    navigation("sign-up");
  };

  return (
    <>
      <section className={classes["lead-in__main"]}>
        <LeadIn
          heading={t("MediumSetup.leadInMain.heading")}
          paragraph={t("MediumSetup.leadInMain.paragraph")}
        />
        <img src={logoBoH} />
      </section>
      <h3>{t("MediumSetup.jokesLanguagesSection.title")}</h3>
      <section className={classes["card-content"]}>
        <Card
          img={unitedStateImg}
          title={t("MediumSetup.cards.unitedStates.title")}
          body={t("MediumSetup.cards.unitedStates.body")}
        />
        <Card
          img={colombiaImg}
          title={t("MediumSetup.cards.germany.title")}
          body={t("MediumSetup.cards.germany.body")}
        />
        <Card
          img={portugalImg}
          title={t("MediumSetup.cards.france.title")}
          body={t("MediumSetup.cards.france.body")}
        />
      </section>
      <h3>{t("MediumSetup.typesOfJokesSection.title")}</h3>
      <section className={classes["lead-in__sub-main"]}>
        <LeadIn
          heading={t("MediumSetup.leadInSubMain.classicJokes.heading")}
          paragraph={t("MediumSetup.leadInSubMain.classicJokes.paragraph")}
          variant="secondary"
        />
        <LeadIn
          heading={t("MediumSetup.leadInSubMain.surrealAbsurdity.heading")}
          paragraph={t("MediumSetup.leadInSubMain.surrealAbsurdity.paragraph")}
          variant="secondary"
        />
        <LeadIn
          heading={t("MediumSetup.leadInSubMain.dadJokes.heading")}
          paragraph={t("MediumSetup.leadInSubMain.dadJokes.paragraph")}
          variant="secondary"
        />
      </section>
      <section className={classes["advise"]}>
        <span className={classes["advise__heading"]}>
          <h2>
            {t("MediumSetup.adviseSection.mainText.line1")}
            <br />
            {t("MediumSetup.adviseSection.mainText.line2")}
          </h2>
        </span>
        <Button onClick={handleRedirection} variant="secondary" size="large">
          {t("MediumSetup.adviseSection.actionButton.text")}
        </Button>
      </section>
    </>
  );
}

export default TheMediumSetupPage;
