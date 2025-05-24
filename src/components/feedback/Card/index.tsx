import classes from "./Card.module.scss";
type CardProps = {
  img: string;
  title: string;
  body: string;
};
const Card = ({ img, title, body }: CardProps) => {
  return (
    <>
      <article className={classes[`card`]}>
        <img src={img} alt="" className={classes["card__image"]} />
        <h6 className={classes["card__title"]}>{title}</h6>
        {body && <p className={classes["card__body"]}>{body}</p>}
      </article>
    </>
  );
};

export default Card;
