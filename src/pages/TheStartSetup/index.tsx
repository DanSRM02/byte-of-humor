import Button from "../../components/inputs/button";
import classes from "./TheStartSetup.module.scss";

function TheSetup() {
  function click (){
    console.log("I've been clicked")
  }
  return (
    <main className={classes["first-setup"]}>
      <h1>Byte Of Humor</h1>
      <section className={classes["first-setup--container"]}>
        <article className={classes["first-setup--question"]}>
          <h2>Why are you here?</h2>
          <h4>You want to laugh or what?</h4>
          <p>
            If the answer is “yes”, I'm
            <em> so sorry </em> that's not the place.
          </p>
          <p>
            Or I'm <em>joking?</em>
          </p>
          <p>
            There only <strong>one</strong> way to know...
          </p>
        </article>
        <article className={classes["first-setup--interaction"]}>
          <Button handleChange={click}>{message}</Button>
        </article>
      </section>
    </main>
  );
}

export default TheSetup;
