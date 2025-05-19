import LeadIn from "@/components/dataDisplay/LeadIn";
import Card from "@/components/feedback/Card";
import imageOne from "@"
import classes from "./TheMediumSetup.module.scss";
function TheMediumSetupPage() {
  return (
    <>
      <LeadIn
        heading="What is Bite of Humor?"
        paragraph="Bite of Humor is a digital experience crafted to inject a quick, clever dose of laughter into your day. Blending design with humor, it offers curated jokes, playful interactions, and creative content that aim to entertain while challenging the ordinary. It's not just about making you laugh—it's about making you think, smile, and enjoy the unexpected."
      />
      <h3 className={classes[""]}>Jokes from multiple languages.</h3>
      <div className={classes["card-content"]}>
        <Card img={imageOne} title="United States" body="asd" />
        <Card img="" title="United States" body="asd" />
        <Card img="" title="United States" body="asd" />
      </div>
    </>
  );
}

export default TheMediumSetupPage;
