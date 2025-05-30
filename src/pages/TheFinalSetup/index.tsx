import LeadIn from "@/components/dataDisplay/LeadIn";
import Card from "@/components/feedback/Card";
import classes from "./TheFinalSetup.module.scss";
import { platformSections } from "@/utils/textConst";
import { LuLaugh } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { CiHeart, CiFilter } from "react-icons/ci";

import Button from "@/components/inputs/Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

function TheFinalSetupPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const platformSectionCard = useMemo(
    () =>
      platformSections.map((section) => {
        const title = t(
          `TheFinalSetupPage.platformCards.${section.title}.title`
        );
        const description = t(
          `TheFinalSetupPage.platformCards.${section.title}.description`
        );
        const badge = t(
          `TheFinalSetupPage.platformCards.${section.title}.badge`
        );
        const features = section.features?.map((featureKey) =>
          t(
            `TheFinalSetupPage.platformCards.${section.title}.features.${featureKey}`
          )
        );
        const icon = section.icon ? (
          <section.icon aria-label={section.title + " icon"} />
        ) : null;
        return {
          key: section.title,
          title,
          body: description,
          icon,
          badge,
          features,
          onExplore: () => handleRedirect(section.title),
          variant: "expandable" as const,
        };
      }),
    [t, navigate]
  );

  const dashboardTranslations = {
    title: t("TheFinalSetupPage.dashboardCard.title"),
    body: t("TheFinalSetupPage.dashboardCard.body"),
    myFavorites: t("TheFinalSetupPage.dashboardButtons.myFavorites"),
    advancedFilters: t("TheFinalSetupPage.dashboardButtons.advancedFilters"),
    preferences: t("TheFinalSetupPage.dashboardButtons.preferences"),
    settings: t("TheFinalSetupPage.dashboardButtons.settings"),
  };

  const dashboardButtons = [
    {
      label: dashboardTranslations.myFavorites,
      icon: <LuLaugh size="1.2rem" aria-hidden="true" />,
      onClick: () => handleRedirect(""),
    },
    {
      label: dashboardTranslations.advancedFilters,
      icon: <CiHeart size="1.2rem" aria-hidden="true" />,
      onClick: () => handleRedirect(""),
    },
    {
      label: dashboardTranslations.preferences,
      icon: <CiFilter size="1.2rem" aria-hidden="true" />,
      onClick: () => handleRedirect("filter"),
    },
    {
      label: dashboardTranslations.settings,
      icon: <IoSettingsOutline size="1.2rem" aria-hidden="true" />,
      onClick: () => handleRedirect("configuration"),
    },
  ];

  const handleRedirect = (typeButton: string) => {
    switch (typeButton) {
      case "filter":
        navigate("../joke-explorer");
        break;
      case "configuration":
        navigate("../configuration");
        break;
      case "premiumExperience":
        navigate("../premium");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <LeadIn
        heading={dashboardTranslations.title}
        paragraph={dashboardTranslations.body}
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
          {platformSectionCard.map((card) => (
            <Card
              key={card.key}
              title={card.title}
              body={card.body}
              icon={card.icon}
              badge={card.badge}
              features={card.features}
              onExplore={card.onExplore}
              variant={card.variant}
            />
          ))}
        </article>
        <article
          className={classes["features__dashboard"]}
          aria-label="User dashboard actions"
          tabIndex={0}
        >
          <Card
            title={dashboardTranslations.title}
            body={dashboardTranslations.body}
          />
          <span className={classes["dashboard__buttons"]}>
            {dashboardButtons.map((btn) => (
              <Button
                key={btn.label}
                onClick={btn.onClick}
                size="large"
                variant="outline"
                aria-label={btn.label}
                tabIndex={0}
              >
                {btn.icon}
                <br />
                {btn.label}
              </Button>
            ))}
          </span>
        </article>
      </section>
    </>
  );
}

export default TheFinalSetupPage;
