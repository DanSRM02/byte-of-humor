import type { UnorderedListImpl } from "@/types/UnorderedListType";
import { Link } from "react-router-dom";
import classes from "./UnorderedList.module.scss";
import type { ReactNode } from "react";

type UnorderedListProps = {
  items?: UnorderedListImpl;
  children?: ReactNode;
};

const UnorderedList = ({ items, children }: UnorderedListProps) => {
  return (
    <div
      className={classes["list-info"]}
      aria-label={items?.title || "Information list"}
      tabIndex={0}
    >
      {items && <h6 tabIndex={0}>{items.title}</h6>}
      <ul
        className={classes["list-info__items"]}
        aria-label={items?.title ? `${items.title} topics` : "List topics"}
      >
        {children}
        {items &&
          items.topics.map((item) => (
            <li key={item.link} tabIndex={0}>
              <Link
                to={item.link}
                aria-label={item.subtitle}
                tabIndex={0}
              >
                {item.subtitle}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UnorderedList;
