import LeadIn from "@/components/dataDisplay/LeadIn";
import Card from "@/components/feedback/Card";
import colombiaImg from "../../assets/dark_colombia.png";
import unitedStateImg from "../../assets/dark_image_united.png";
import portugalImg from "../../assets/dar_portugal.png";
import classes from "./TheMediumSetup.module.scss";
import Button from "@/components/inputs/Button";
function TheMediumSetupPage() {
  return (
    <>
      <LeadIn      
        heading="What is Bite of Humor?"
        paragraph="Bite of Humor is a digital experience crafted to inject a quick, clever dose of laughter into your day. Blending design with humor, it offers curated jokes, playful interactions, and creative content that aim to entertain while challenging the ordinary. It's not just about making you laugh—it's about making you think, smile, and enjoy the unexpected."
        variant=""
      />
      <h3>Jokes from multiple languages</h3>
      <section className={classes["card-content"]}>
        <Card
          img={unitedStateImg}
          title="United States"
          body="An American eagle on grill duty? A superhero zipping by on a scooter? A tiny horse for a tiny cowboy? This scene's got more layers than a deep-fried Twinkie. What's the punchline in this stars-and-stripes spectacle?"
        />
        <Card
          img={colombiaImg}
          title="Colombia"
          body="Survival of the quickest in Bogotá! As Transmilenio commuters make a mad dash, a man clutches his empanada like a prize. Street vendors hawk humor amidst the urban chaos, under the watchful eye of a weary guard."
        />
        <Card
          img={portugalImg}
          title="Portugal"
          body="Cobblestone streets, a determined grandma, a basket of bread, and a surprisingly speedy fish! This Portuguese pursuit is as charming as a Lisbon tram. What's the catch in this bizarre race?"
        />
      </section>
      <h3>Types Of Jokes</h3>
      <section className={classes["lead-in"]}>
        <LeadIn
          heading="Classic Jokes"
          paragraph="Enjoy a collection of timeless jokes! These are the tried-and-true classics that have been shared and chuckled over for generations, often with familiar setups and satisfying punchlines."
          variant="secondary"
        />
        <LeadIn
          heading="Surreal Absurdity"
          paragraph="Step into the bizarre and illogical! These jokes embrace the unexpected and nonsensical, where the humor comes from the delightful violation of reality and the sheer absurdity of the situation."
          variant="secondary"
        />
        <LeadIn
          heading="Dad Jokes"
          paragraph="Get ready for the signature blend of corniness and puns! These dad jokes feature slightly longer setups that build anticipation for the inevitably groan-worthy (yet sometimes charming) punchline. You've been warned!"
          variant="secondary"
        />
      </section>
      <section className={classes["advise"]}>
        <span>
          <h2>Tell us a joke to enter.</h2>
          <h2>Make us laugh, or at least try.</h2>
        </span>
        <Button variant="secondary" size="large"> Sign Up </Button>
      </section>
    </>
  );
}

export default TheMediumSetupPage;
