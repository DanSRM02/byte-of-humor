import { useState } from "react";
import classes from "./TheStartSetup.module.scss";
import Button from "@/components/inputs/Button";
import { buttonMessages } from "@/utils/const";

function TheSetup() {
  const [message, setMessage] = useState(buttonMessages[0]);    

  function handleClick() {
    setMessage((prevMessage) => {
      const currentIndex = buttonMessages.indexOf(prevMessage);
      const nextIndex = (currentIndex + 1) % buttonMessages.length;
      changePosition();
      return buttonMessages[nextIndex];
    });
  }  

  const calculateRamdomNumber = (value: number) => Math.random() * value;
  
  function changePosition() {
    const buttonElement = document.querySelector("button")    
    const translateValue = `${calculateRamdomNumber(500)}%, ${calculateRamdomNumber(500)}%`

    if(buttonElement){
      buttonElement.style.transform = `translate(${translateValue})`
      buttonElement.style.transition = "transform .2s ease-out"
    }
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
          <Button size="medium" variant="primary" handleChange={handleClick}>{message}</Button>
        </article>
      </section>
    </main>
  );
}

export default TheSetup;
