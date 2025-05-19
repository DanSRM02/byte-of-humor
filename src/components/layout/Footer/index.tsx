import UnorderedList from "@/components/dataDisplay/UnorderedList";
import classes from "./Footer.module.scss";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { informationListOne, informationListThree, informationListTwo } from "@/utils/const";
const Footer = () => {
  return (
    <>
      <footer className={classes["footer"]}>
        <article className={classes["footer__brand-info"]}>
          <h5>Bite of Humor</h5>
          <span className={classes["brand-info__social-icons"]}>
            <FaInstagram size={20} />
            <FaFacebook size={20} />
            <FaYoutube size={20} />
          </span>
        </article>
        <article className={classes["footer__list-info"]}>
          <UnorderedList items={informationListOne} />
          <UnorderedList items={informationListTwo} />
          <UnorderedList items={informationListThree} />
        </article>
      </footer>
    </>
  );
};

export default Footer;
