import classes from "./Card.module.scss";
import { useState, type ReactNode } from "react";

import { BiArrowFromLeft } from "react-icons/bi";

type CardProps = {
  children?: ReactNode;
  img?: string;
  icon?: ReactNode;
  title: string;
  body: string;
  badge?: string;
  features?: string[];
  variant?: "default" | "expandable";
  onExplore?: () => void;
};

const Card = ({
  img,
  icon,
  title,
  body,
  badge,
  features,
  variant = "default",
  onExplore,
}: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    if (variant === "expandable") {
      setIsExpanded(!isExpanded);
    }
  };

  if (variant === "expandable") {
    return (
      <article
        className={`${classes["card"]} ${classes["card--expandable"]} ${
          isExpanded ?? classes["card--expanded"]
        }`}
        onClick={handleCardClick}
      >
        <header className={classes["card__header"]}>
          <div className={classes["card__header-content"]}>
            <div className={classes["card__icon-wrapper"]}>
              {icon && <div className={classes["card__icon"]}>{icon}</div>}
            </div>
            <div className={classes["card__header-text"]}>
              <h6 className={classes["card__title"]}>{title}</h6>
              {badge && <span className={classes["card__badge"]}>{badge}</span>}
            </div>
          </div>
          <BiArrowFromLeft
            className={`${classes["card__arrow"]} ${
              isExpanded ?? classes["card__arrow--rotated"]
            }`}
          />
        </header>

        <div className={classes["card__content"]}>
          <p className={classes["card__body"]}>{body}</p>

          {isExpanded && features && (
            <div className={classes["card__expanded-content"]}>
              <div className={classes["card__separator"]}></div>
              <div className={classes["card__features"]}>
                {features.map((feature, index) => (
                  <div key={index} className={classes["card__feature"]}>
                    <div className={classes["card__feature-dot"]}></div>
                    <span className={classes["card__feature-text"]}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              {onExplore && (
                <button
                  className={classes["card__explore-button"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    onExplore();
                  }}
                >
                  Explore {title}
                </button>
              )}
            </div>
          )}
        </div>
      </article>
    );
  }

  // Default variant
  return (
    <article className={classes["card"]}>
      {img && (
        <img
          src={img || "/placeholder.svg"}
          alt=""
          className={classes["card__image"]}
        />
      )}

      <div className={classes["card__header-content"]}>
        <div className={classes["card__icon-wrapper"]}>
          {icon && <div className={classes["card__icon"]}>{icon}</div>}
        </div>
        <div className={classes["card__header-text"]}>
          <h6 className={classes["card__title"]}>{title}</h6>
          {body && <p className={classes["card__body"]}>{body}</p>}
        </div>
      </div>
      
    </article>
  );
};

export default Card;
