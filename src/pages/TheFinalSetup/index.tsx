import LeadIn from "@/components/dataDisplay/LeadIn";
import Card from "@/components/feedback/Card";
import classes from "./TheFinalSetup.module.scss";
import { platformSections } from "@/utils/textConst";
import { LuLaugh } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { CiHeart, CiFilter } from "react-icons/ci";

import Button from "@/components/inputs/Button";
import { useTranslation } from "react-i18next";
import { useNavigate, useOutletContext } from "react-router-dom";
import type { OutletCtxImpl } from "@/types/OutletImpl";

function TheFinalSetupPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { localizationRouter } = useOutletContext<OutletCtxImpl>();

  const handleRedirect = (typeButton: string) => {
    switch (typeButton) {
      case "filter":
        navigate(`/${localizationRouter}/setup/joke-explorer`);
        break;
      case "configuration":
        navigate(`/${localizationRouter}/setup/configuration`);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <LeadIn
        heading={t("TheFinalSetupPage.leadIn.heading")}
        paragraph={t("TheFinalSetupPage.leadIn.paragraph")}
      />
      <section
        className={classes["features"]}
        aria-label="Platform features and dashboard"
        tabIndex={0}
      >
        <article
          className={classes["features__container"]}
          aria-label="Platform features list"
          tabIndex={0}
        >
          {platformSections.map((card) => (
            <Card
              key={card.featureTitle}
              title={t(
                `TheFinalSetupPage.platformCards.${card.featureTitle}.title`
              )}
              body={t(
                `TheFinalSetupPage.platformCards.${card.featureTitle}.description`
              )}
              icon={<card.icon aria-label={card.featureTitle + " icon"} />}
              badge={t(
                `TheFinalSetupPage.platformCards.${card.featureTitle}.badge`
              )}
              features={card.features.map((featureKey) =>
                t(
                  `TheFinalSetupPage.platformCards.${card.featureTitle}.features.${featureKey}`
                )
              )}
              variant="expandable"
            />
          ))}
        </article>
        <article
          className={classes["features__dashboard"]}
          aria-label="User dashboard actions"
          tabIndex={0}
        >
          <Card
            title={t("TheFinalSetupPage.dashboardCard.title")}
            body={t("TheFinalSetupPage.dashboardCard.body")}
          />
          <span className={classes["dashboard__buttons"]}>
            <Button
              onClick={() => handleRedirect("")}
              size="large"
              variant="outline"
              aria-label={t("TheFinalSetupPage.dashboardButtons.myFavorites")}
              tabIndex={0}
            >
              <LuLaugh size={"1.2rem"} aria-hidden="true" />
              <br />
              {t("TheFinalSetupPage.dashboardButtons.myFavorites")}
            </Button>
            <Button
              onClick={() => handleRedirect("")}
              size="large"
              variant="outline"
              aria-label={t(
                "TheFinalSetupPage.dashboardButtons.advancedFilters"
              )}
              tabIndex={0}
            >
              <CiHeart size={"1.2rem"} aria-hidden="true" /> <br />
              {t("TheFinalSetupPage.dashboardButtons.advancedFilters")}
            </Button>
            <Button
              onClick={() => handleRedirect("filter")}
              size="large"
              variant="outline"
              aria-label={t("TheFinalSetupPage.dashboardButtons.preferences")}
              tabIndex={0}
            >
              <CiFilter size={"1.2rem"} aria-hidden="true" />
              <br />
              {t("TheFinalSetupPage.dashboardButtons.preferences")}
            </Button>
            <Button
              onClick={() => handleRedirect("configuration")}
              size="large"
              variant="outline"
              aria-label={t("TheFinalSetupPage.dashboardButtons.settings")}
              tabIndex={0}
            >
              <IoSettingsOutline size={"1.2rem"} aria-hidden="true" />
              <br />
              {t("TheFinalSetupPage.dashboardButtons.settings")}
            </Button>
          </span>
        </article>
      </section>
    </>
  );
}

export default TheFinalSetupPage;
