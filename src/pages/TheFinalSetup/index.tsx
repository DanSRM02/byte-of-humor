import LeadIn from "@/components/dataDisplay/LeadIn";
import Card from "@/components/feedback/Card";
import classes from "./TheFinalSetup.module.scss";
import { platformSections } from "@/utils/const";
import { AiOutlineBarChart } from "react-icons/ai";
import { LuLaugh } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { CiHeart, CiFilter } from "react-icons/ci";

import Button from "@/components/inputs/Button";

function TheFinalSetupPage() {
  return (
    <>
      <LeadIn
        icon
        heading="Welcome to Bite of Humor"
        paragraph="Your setup is complete! Explore the different sections of your personalized humor experience."
      />
      <section className={classes["features"]}>
        <article className={classes["features__container"]}>
          {platformSections.map((card) => (
            <Card
              key={card.badge[2]}
              title={card.title}
              body={card.description}
              icon={<card.icon />}
              badge={card.badge}
              features={card.features}
              variant="expandable"
            />
          ))}
        </article>
        <article className={classes["features__dashboard"]}>
          <Card
            icon={<AiOutlineBarChart />}
            title="Quick Access Dashboard"
            body="Jump directly to your favorite platform features"
          />
          <span className={classes["dashboard__buttons"]}>
            <Button size="large" variant="outline">
              <LuLaugh size={"1.2rem"} />
              <br />
              My Favorites
            </Button>
            <Button size="large" variant="outline">
              <CiHeart size={"1.2rem"} /> <br />
              Advanced Filters
            </Button>
            <Button size="large" variant="outline">
              <CiFilter size={"1.2rem"} />
              <br />
              Preferences
            </Button>
            <Button size="large" variant="outline">
              <IoSettingsOutline size={"1.2rem"} />
              <br />
              Settings
            </Button>
          </span>
        </article>
      </section>
    </>
  );
}

export default TheFinalSetupPage;
