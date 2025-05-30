import { useEffect, useRef, useState } from "react";
import classes from "./TheStartSetup.module.scss";
import Button from "@/components/inputs/Button";
import { modifyPositionElement } from "./helper";
import { useNavigate } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

function TheStartSetupPage() {
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { t } = useTranslation();
  const [message, setMessage] = useState("");
  const [timesClicked, setTimesClicked] = useState(2);

  const translations = {
    intro: {
      title: t("FirstSetup.introduction.title"),
      remark: t("FirstSetup.introduction.remark"),
      paragraph1: t("FirstSetup.introduction.paragraph1"),
      paragraph2: t("FirstSetup.introduction.paragraph2"),
      paragraph3: t("FirstSetup.introduction.paragraph3"),
    },
    actions: {
      buttonMessage: message || t("FirstSetup.actions.buttonMessages.message1"),
    },
  };

  useEffect(() => {
    setMessage(t("FirstSetup.actions.buttonMessages.message1"));
  }, [t]);

  function handleClick() {
    setTimesClicked((prev) => prev + 1);
    const buttonUtil = modifyPositionElement(buttonRef.current);
    const shouldRedirectToNextStep = timesClicked === 6;
    const shouldChangePosition = timesClicked <= 4;
    const shouldDefaultPosition = timesClicked === 5;

    if (shouldChangePosition) {
      buttonUtil.changePosition({ maxOffsetX: 25, maxOffsetY: 25 });
    }

    if (shouldDefaultPosition) {
      buttonUtil.defaultPosition();
    }

    if (shouldRedirectToNextStep) {
      navigate("setup");
    }

    const messageTranslated = t(
      `FirstSetup.actions.buttonMessages.message${timesClicked}`
    );

    setMessage(messageTranslated);
  }

  return (
    <main
      className={classes["first-setup"]}
      tabIndex={0}
      aria-label="First setup main content"
    >
      <h1
        className={classes["first-setup__heading"]}
        tabIndex={0}
        aria-label="Bite Of Humor heading"
      >
        Bite Of Humor
      </h1>
      <section
        className={classes["first-setup__container"]}
        tabIndex={0}
        aria-label="Setup question and interaction"
      >
        <article
          className={`${classes["first-setup__question"]} ${classes["question"]}`}
          tabIndex={0}
          aria-label="Setup introduction and description"
        >
          <h2
            className={classes["question__subtitle"]}
            tabIndex={0}
            aria-label={translations.intro.title}
          >
            {translations.intro.title}
          </h2>
          <h5
            className={classes["question__remark"]}
            tabIndex={0}
            aria-label={translations.intro.remark}
          >
            {translations.intro.remark}
          </h5>
          <p className={classes["question__paragraph"]}>
            <Trans i18nKey="FirstSetup.introduction.paragraph1">
              {translations.intro.paragraph1}
            </Trans>
          </p>
          <p className={classes["question__paragraph"]}>
            <Trans i18nKey="FirstSetup.introduction.paragraph2">
              {translations.intro.paragraph2}
            </Trans>
          </p>
          <p className={classes["question__paragraph"]}>
            <Trans i18nKey="FirstSetup.introduction.paragraph3">
              {translations.intro.paragraph3}
            </Trans>
          </p>
        </article>
        <article className={classes["first-setup__interaction"]}>
          <Button
            size="medium"
            variant="primary"
            ref={buttonRef}
            onClick={handleClick}
            aria-label={translations.actions.buttonMessage}
            tabIndex={0}
          >
            {message}
          </Button>
        </article>
      </section>
    </main>
  );
}

export default TheStartSetupPage;
