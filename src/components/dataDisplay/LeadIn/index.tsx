import { HiOutlineSparkles } from "react-icons/hi2";
import classes from "./LeadIn.module.scss";
type LeadInProps = {
  icon?: boolean;
  heading: string;
  paragraph: string;
  variant?: string;
};
const LeadIn = ({
  heading,
  paragraph,
  variant = "primary",
  icon = false,
}: LeadInProps) => {
  let contentVariant;

  switch (variant) {
    case "secondary":
      contentVariant = (
        <article className={classes["lead-in"]}>
          <h5 className={classes["lead-in__heading"]}>{heading}</h5>
          <p className={classes["lead-in__paragraph"]}>{paragraph}</p>
        </article>
      );
      break;

    default:
      contentVariant = (
        <article className={classes["lead-in"]}>
          {icon && (
            <HiOutlineSparkles
              className={classes["lead-in__icon"]}
              size={"10rem"}
              color="white"
            />
          )}
          <span>
            <h1 className={classes["lead-in__heading"]}>{heading}</h1>
            <p className={classes["lead-in__paragraph"]}>{paragraph}</p>
          </span>
        </article>
      );
      break;
  }
  return contentVariant;
};

export default LeadIn;
