import LeadIn from "@/components/dataDisplay/LeadIn";
import Button from "@/components/inputs/Button";
import TextField from "@/components/inputs/TextField";
import classes from "./LogIn.module.scss";

function LogIn() {
  return (
    <>
      <LeadIn
        heading="Returning legend? Log in to keep the mic"
        paragraph="A satire-powered playground blending cultural wit and creative rebellion — discover the story, the mission, and why laughter hits harder when it's honest."
      />
      <section className={classes["log-in"]}>
        <form className={classes["log-in__form"]}>
          <span className={classes["fieldset__first-elements"]}>
            <TextField
              placeholder="Pick a comedian name"
              label="Comedian Name"
              color="primary"
              type="text"
            />

            <TextField
              placeholder="email@janesfakedomain.net"
              label="Comedian Email"
              color="primary"
              type="email"
            />
          </span>
          <TextField
            label="Comedian Joke"
            placeholder="Enter your joke"
            color="primary"
            multiline
            rows={5}
          />
          <Button variant={"primary"} size="medium">
            Join us
          </Button>
        </form>
      </section>
    </>
  );
}

export default LogIn;
