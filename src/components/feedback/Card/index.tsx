import classes from "./Card.module.scss";
import { useState, type ReactNode } from "react";
import { BiArrowFromLeft } from "react-icons/bi";

type CardProps = {
  children?: ReactNode;
  img?: string;
  icon?: ReactNode;
  title: string;
  body?: string;
  badge?: string;
  features?: string[];
  variant?: "default" | "expandable" | "joke";
  onExplore?: () => void;
  jokeSetup?: string;
  jokePunchline?: string;
  jokeType?: string;
};

const Card = ({
  img,
  icon,
  title,
  body,
  badge,
  features,
  children,
  variant = "default",
  onExplore,
  jokeSetup,
  jokePunchline,
  jokeType,
}: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleCardClick = () => {
    if (variant === "expandable") {
      setIsExpanded(!isExpanded);
    }
  };

  let contentVariant;

  switch (variant) {
    case "expandable":
      contentVariant = (
        <article
          className={`${classes["card"]} ${classes["card--expandable"]} ${
            isExpanded ? classes["card--expanded"] : ""
          }`}
          onClick={handleCardClick}
          tabIndex={0}
          aria-label={
            title +
            (badge ? `, ${badge}` : "") +
            (isExpanded ? ", expanded" : ", collapsed")
          }
          role="button"
          aria-expanded={isExpanded}
        >
          <header className={classes["card__header"]}>
            <div className={classes["card__header-content"]}>
              <div className={classes["card__icon-wrapper"]}>
                {icon && (
                  <div className={classes["card__icon"]} aria-hidden="true">
                    {icon}
                  </div>
                )}
              </div>
              <div className={classes["card__header-text"]}>
                <h6 className={classes["card__title"]}>{title}</h6>
                {badge && (
                  <span className={classes["card__badge"]}>{badge}</span>
                )}
              </div>
            </div>
            <BiArrowFromLeft
              className={`${classes["card__arrow"]} ${
                isExpanded ? classes["card__arrow--rotated"] : ""
              }`}
              aria-hidden="true"
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
                      <div
                        className={classes["card__feature-dot"]}
                        aria-hidden="true"
                      ></div>
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
                    aria-label={`Explore ${title}`}
                  >
                    Explore {title}
                  </button>
                )}
              </div>
            )}
          </div>
        </article>
      );
      break;
    case "joke":
      contentVariant = (
        <article
          className={`${classes["card"]} ${classes["card--joke"]}`}
          tabIndex={0}
          aria-label={title}
        >
          {title && (
            <h6 className={classes["card__category-title"]}>{title}</h6>
          )}
          {jokeType === "twopart" ? (
            <>
              <p
                className={`${classes["card__body"]} ${classes["card__joke-setup"]}`}
              >
                {jokeSetup || body}
              </p>
              {jokePunchline && (
                <p
                  className={`${classes["card__body"]} ${classes["card__joke-punchline"]}`}
                >
                  {jokePunchline}
                </p>
              )}
            </>
          ) : (
            <p
              className={`${classes["card__body"]} ${classes["card__joke-punchline"]}`}
            >
              {jokeSetup}
            </p>
          )}
          {badge && <span className={classes["card__badge"]}>{badge}</span>}
          {children && (
            <div className={classes["card__joke-actions"]}>{children}</div>
          )}
        </article>
      );
      break;
    default:
      contentVariant = (
        <article className={classes["card"]} tabIndex={0} aria-label={title}>
          {img && (
            <img
              src={img || "/placeholder.svg"}
              alt={title || "Card image"}
              className={classes["card__image"]}
            />
          )}
          <div className={classes["card__main-content"]}>
            {icon && (
              <div className={classes["card__icon-wrapper"]}>
                <div className={classes["card__icon"]} aria-hidden="true">
                  {icon}
                </div>
              </div>
            )}
            <div className={classes["card__text-content"]}>
              <h6 className={classes["card__title"]}>{title}</h6>
              {body && <p className={classes["card__body"]}>{body}</p>}
              {badge && <span className={classes["card__badge"]}>{badge}</span>}
            </div>
          </div>
          {children && (
            <div className={classes["card__children-content"]}>{children}</div>
          )}
        </article>
      );
      break;
  }
  return contentVariant;
};

export default Card;
