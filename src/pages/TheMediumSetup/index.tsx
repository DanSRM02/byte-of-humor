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

  const translations = {
    leadIn: {
      heading: t("MediumSetup.leadInMain.heading"),
      paragraph: t("MediumSetup.leadInMain.paragraph"),
      logoAlt: t("MediumSetup.leadInMain.logoAlt", "Byte of Humor logo"),
    },
    jokesLanguagesSection: {
      title: t("MediumSetup.jokesLanguagesSection.title"),
      cards: {
        unitedStates: {
          title: t("MediumSetup.cards.unitedStates.title"),
          body: t("MediumSetup.cards.unitedStates.body"),
        },
        germany: {
          title: t("MediumSetup.cards.germany.title"),
          body: t("MediumSetup.cards.germany.body"),
        },
        france: {
          title: t("MediumSetup.cards.france.title"),
          body: t("MediumSetup.cards.france.body"),
        },
      },
    },
    typesOfJokesSection: {
      title: t("MediumSetup.typesOfJokesSection.title"),
      classicJokes: {
        heading: t("MediumSetup.leadInSubMain.classicJokes.heading"),
        paragraph: t("MediumSetup.leadInSubMain.classicJokes.paragraph"),
      },
      surrealAbsurdity: {
        heading: t("MediumSetup.leadInSubMain.surrealAbsurdity.heading"),
        paragraph: t("MediumSetup.leadInSubMain.surrealAbsurdity.paragraph"),
      },
      dadJokes: {
        heading: t("MediumSetup.leadInSubMain.dadJokes.heading"),
        paragraph: t("MediumSetup.leadInSubMain.dadJokes.paragraph"),
      },
    },
    adviseSection: {
      mainText: {
        line1: t("MediumSetup.adviseSection.mainText.line1"),
        line2: t("MediumSetup.adviseSection.mainText.line2"),
      },
      actionButton: {
        text: t("MediumSetup.adviseSection.actionButton.text"),
      },
    },
  };

  return (
    <>
      <section className={classes["lead-in__main"]} aria-label="Introduction section" tabIndex={0}>
        <LeadIn
          heading={translations.leadIn.heading}
          paragraph={translations.leadIn.paragraph}
        />
        <img src={logoBoH} alt={translations.leadIn.logoAlt}/>
      </section>
      <h3 tabIndex={0}>{translations.jokesLanguagesSection.title}</h3>
      <section className={classes["card-content"]} aria-label="Joke languages cards" tabIndex={0}>
        <Card
          img={unitedStateImg}
          title={translations.jokesLanguagesSection.cards.unitedStates.title}
          body={translations.jokesLanguagesSection.cards.unitedStates.body}
        />
        <Card
          img={colombiaImg}
          title={translations.jokesLanguagesSection.cards.germany.title}
          body={translations.jokesLanguagesSection.cards.germany.body}
        />
        <Card
          img={portugalImg}
          title={translations.jokesLanguagesSection.cards.france.title}
          body={translations.jokesLanguagesSection.cards.france.body}
        />
      </section>
      <h3 tabIndex={0}>{translations.typesOfJokesSection.title}</h3>
      <section className={classes["lead-in__sub-main"]} aria-label="Types of jokes" tabIndex={0}>
        <LeadIn
          heading={translations.typesOfJokesSection.classicJokes.heading}
          paragraph={translations.typesOfJokesSection.classicJokes.paragraph}
          variant="secondary"
        />
        <LeadIn
          heading={translations.typesOfJokesSection.surrealAbsurdity.heading}
          paragraph={translations.typesOfJokesSection.surrealAbsurdity.paragraph}
          variant="secondary"
        />
        <LeadIn
          heading={translations.typesOfJokesSection.dadJokes.heading}
          paragraph={translations.typesOfJokesSection.dadJokes.paragraph}
          variant="secondary"
        />
      </section>
      <section className={classes["advise"]} aria-label="Advice and action" tabIndex={0}>
        <span className={classes["advise__heading"]}>
          <h2 tabIndex={0}>
            {translations.adviseSection.mainText.line1}
            <br />
            {translations.adviseSection.mainText.line2}
          </h2>
        </span>
        <Button 
          onClick={handleRedirection} 
          variant="secondary" 
          size="large" 
          aria-label={translations.adviseSection.actionButton.text}
          tabIndex={0}
        >
          {translations.adviseSection.actionButton.text}
        </Button>
      </section>
    </>
  );
}

export default TheMediumSetupPage;
