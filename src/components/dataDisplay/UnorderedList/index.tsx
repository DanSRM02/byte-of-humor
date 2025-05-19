import type { UnorderedListImpl } from "@/types/UnorderedListImpl";
import { Link } from "react-router-dom";
import classes from "./UnorderedList.module.scss";

type UnorderedListProps = {
  items: UnorderedListImpl;
};

const UnorderedList = ({ items }: UnorderedListProps) => {
  return (
    <div className={classes["list-info"]}>
      <h6>{items.title}</h6>
      <ul className={classes["list-info__items"]}>
        {items.topics.map((item) => (
          <li key={item.link}>
            <Link to={item.link}>{item.subtitle}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UnorderedList;
