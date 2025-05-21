import LeadIn from "@/components/dataDisplay/LeadIn";
import Button from "@/components/inputs/Button";
import classes from "./SelectCountry.module.scss";
import TextField from "@/components/inputs/TextField";
import Card from "@/components/feedback/Card";
import flagUSA from "@assets/flag-united-states.png";
import flagCO from "@assets/flag-colombia.png";
import flagPT from "@assets/flag-portugal.png";

function SelectCountry() {
  return (
    <>
      <section className={classes["select-country"]}>
        <aside className={classes["select-country__aside"]}>
          <LeadIn
            heading="Choose Your Global Stage!"
            paragraph="Bite of Humor connects you with comedy from every corner. Tell us where you want to start your humor journey."
          />

          <TextField
            color="primary"
            placeholder="Search Your Country..."
            type="search"
            size="medium"
          />
          <Button variant="primary" size="medium">
            Continue with "SelectCountry"
          </Button>
        </aside>
        <article className={classes["select-country__article"]}>
          <Card img={flagUSA} title="United States" body="" pill />
          <Card img={flagPT} title="Portugal" body="" pill />
          <Card img={flagCO} title="Colombia" body="" pill />
        </article>
      </section>
    </>
  );
}

export default SelectCountry;
