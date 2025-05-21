import classes from "./Card.module.scss";
type CardProps = {
  img: string;
  title: string;
  body?: string;
  pill?: boolean;
};
const Card = ({ img, title, body, pill = false }: CardProps) => {
  const styleCard = pill ? "pill" : "card";
  return (
    <>
      <article className={classes[`${styleCard}`]}>
        <img src={img} alt="" className={classes[`${styleCard}__image`]} />
        <h6 className={classes[`${styleCard}__title`]}>{title}</h6>
        {body && <p className={classes[`${styleCard}__body`]}>{body}</p>}
      </article>
    </>
  );
};

export default Card;
