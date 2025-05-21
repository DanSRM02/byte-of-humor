import LeadIn from "@/components/dataDisplay/LeadIn";
import classes from "./SignUp.module.scss";
import TextField from "@/components/inputs/TextField";
import Button from "@/components/inputs/Button";

function SignUp() {
  return (
    <>
      <LeadIn
        heading="Returning legend? Log in to keep the mic"
        paragraph="A satire-powered playground blending cultural wit and creative rebellion — discover the story, the mission, and why laughter hits harder when it's honest."
      />
      <section className={classes["sign-up"]}>
        <form className={classes["sign-up__form"]}>
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

          <Button variant={"primary"} size="medium">
            Enter into the Humor
          </Button>
        </form>
      </section>
    </>
  );
}

export default SignUp;
