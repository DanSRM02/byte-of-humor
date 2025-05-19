import { useState } from "react";
import classes from "./TheStartSetup.module.scss";
import Button from "@/components/inputs/Button";
import { buttonMessages } from "@/utils/const";
import { modifyPositionElement } from "./helper";
import { useNavigate } from "react-router-dom";

function TheStartSetupPage() {
  const navigate = useNavigate();
  const [message, setMessage] = useState(buttonMessages[0]);
  const [timesClicked, setTimesClicked] = useState(0);

  function handleClick() {
    setTimesClicked((prev) => prev + 1);
    const buttonUtil = modifyPositionElement("button");
    const shouldRedirectToNextStep = timesClicked === 4;
    const shouldChangePosition = timesClicked <= 2;
    const shouldDefaultPosition = timesClicked === 3;

    if (shouldChangePosition) {
      buttonUtil.changePosition({ maxOffsetX: 25, maxOffsetY: 25 });
    }

    if (shouldDefaultPosition) {
      buttonUtil.defaultPosition();
    }

    if (shouldRedirectToNextStep) {
      navigate("/en/setup/medium");
    }

    const currentIndex = buttonMessages.indexOf(message);
    const nextIndex = (currentIndex + 1) % buttonMessages.length;

    setMessage(buttonMessages[nextIndex]);
  }

  return (
    <main className={classes["first-setup"]}>
      <h1 className={classes["first-setup__heading"]}>Bite Of Humor</h1>
      <section className={classes["first-setup__container"]}>
        <article
          className={`${classes["first-setup__question"]} ${classes["question"]}`}
        >
          <h2 className={classes["question__subtitle"]}>Why are you here?</h2>
          <h5 className={classes["question__remark"]}>
            You want to laugh or what?
          </h5>
          <p className={classes["question__paragraph"]}>
            If the answer is “yes”, I'm
            <em> so sorry </em> that's not the place.
          </p>
          <p className={classes["question__paragraph"]}>
            Or I'm <em>joking?</em>
          </p>
          <p className={classes["question__paragraph"]}>
            There only <strong>one</strong> way to know...
          </p>
        </article>
        <article className={classes["first-setup__interaction"]}>
          <Button size="medium" variant="primary" handleChange={handleClick}>
            {message}
          </Button>
        </article>
      </section>
    </main>
  );
}

export default TheStartSetupPage;
