import LeadIn from "@/components/dataDisplay/LeadIn";
import Card from "@/components/feedback/Card";
import { plans } from "@/utils/textConst";
import classes from "./PremiumExpPage.module.scss";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useMemo } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

function PremiunExpPage() {
  const { t } = useTranslation();

  const mappingPlan = useMemo(
    () =>
      plans.map((plan) => {
        const name = t(`plans.${plan.title}.name`);
        const price = t(`plans.${plan.title}.price`, { value: plan.price });
        const description = t(`plans.${plan.title}.description`);
        const features = plan.features?.map((feature) =>
          t(`plans.${plan.title}.features.${feature}`)
        );
        const icon = plan.icon ? (
          <plan.icon aria-label={plan.title + " icon"} />
        ) : null;
        return {
          key: plan.title,
          title: name + " - " + price,
          body: description,
          features: features,
          icon: icon,
          variant: "expandable" as const,
        };
      }),
    [t]
  );

  const translations = useMemo(
    () => ({
      navkLink: {
        text: t("plans.navLink.text"),
      },
      leadIn: {
        heading: t("plans.LeadIn.heading"),
        paragraph: t("plans.LeadIn.paragraph"),
      },
      plans: mappingPlan,
    }),
    [t, mappingPlan]
  );

  return (
    <>
      <section>
        <span className={classes["plans__header"]}>
          <NavLink to={"../final"}>
            <FaArrowLeftLong size={"2rem"} />
          </NavLink>
          <LeadIn
            heading={translations.leadIn.heading}
            paragraph={translations.leadIn.paragraph}
          />
        </span>
        <article className={classes["plans__menu"]}>
          {translations.plans.map((card) => (
            <Card
              key={card.key}
              title={card.title}
              body={card.body}
              features={card.features}
              icon={card.icon}
              variant={card.variant}
            />
          ))}
        </article>
      </section>
    </>
  );
}

export default PremiunExpPage;
