import classes from "./Card.module.scss";
type CardProps = {
  img: string;
  title: string;
  body: string;
};
const Card = ({ img, title, body }: CardProps) => {
  return (
    <>
      <div className={classes["card"]}>
        <img src={img} alt="" className={classes["card__image"]} />
        <h6 className={classes["card_title"]}>{title}</h6>
        <p className={classes["card_body"]}>{body}</p>
      </div>
    </>
  );
};

export default Card;
