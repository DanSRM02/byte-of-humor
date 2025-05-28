import LeadIn from "@/components/dataDisplay/LeadIn";
import Card from "@/components/feedback/Card";
import { plans } from "@/utils/textConst";
import classes from "./Configuration.module.scss";
import { useTranslation } from "react-i18next";

function PremiunExpPage() {
  const { t } = useTranslation();
  return (
    <>
      <section>
        <LeadIn
          heading="Do you want a Premium Experience!"
          paragraph="Is that a joke! There only one way to find out!"
        />
        <article className={classes["plans__menu"]}>
          {plans.map((plan, index) => (
            <Card
              key={index}
              title={t(`plans.${plan.title}.name`)}
              body={`${t(`plans.${plan.title}.description`)} ${t(
                `plans.${plan.title}.price`,
                {
                  value: plan.price,
                }
              )} `}
              features={plan.features?.map((feature) =>
                t(`plans.${plan.title}.features.${feature}`)
              )}
              icon={
                plan.icon ? (
                  <plan.icon aria-label={plan.title + " icon"} />
                ) : null
              }
              variant="expandable"
            />
          ))}
        </article>
      </section>
    </>
  );
}

export default PremiunExpPage;
