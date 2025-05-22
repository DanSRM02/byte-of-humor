import type { Ref } from "react";
import classes from "./Card.module.scss";
type CardProps = {
  img: string;
  title: string;
  body?: string;
  pill?: boolean;
  ref?: Ref<HTMLElement> | null;
};
const Card = ({ img, title, body, pill = false, ref }: CardProps) => {
  const styleCard = pill ? "pill" : "card";
  return (
    <>
      <article ref={ref} className={classes[`${styleCard}`]}>
        <img src={img} alt="" className={classes[`${styleCard}__image`]} />
        <h6 className={classes[`${styleCard}__title`]}>{title}</h6>
        {body && <p className={classes[`${styleCard}__body`]}>{body}</p>}
      </article>
    </>
  );
};

export default Card;
