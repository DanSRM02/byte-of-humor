import { Link, useParams } from "react-router-dom";
import classes from "./Footer.module.scss";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

import UnorderedList from "@/components/dataDisplay/UnorderedList";

import {
  informationListEN,
  informationListFR,
  informationListDE,
} from "@/utils/const";
import { type UnorderedListImpl } from "@/types/UnorderedListImpl";

const Footer = () => {
  const { lang } = useParams<{ lang?: string }>();
  const currentYear = new Date().getFullYear();

  let currentInfoList: UnorderedListImpl[];

  const languageAndLocale = lang?.split("-");
  let currentLanguage = languageAndLocale?.[0].toUpperCase();

  switch (currentLanguage) {
    case "FR":
      currentInfoList = informationListFR;
      break;
    case "DE":
      currentInfoList = informationListDE;
      break;
    case "EN":
    default:
      currentInfoList = informationListEN;
      break;
  }

  return (
    <>
      <footer className={classes["footer"]}>
        <article className={classes["footer__brand-info"]}>
          <h5>Bite of Humor</h5>
          <div className={classes["brand-info__social-icons"]}>
            <Link
              to="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </Link>
            <Link
              to="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube size={20} />
            </Link>
          </div>
          <p className={classes["brand-info__copyright"]}>
            &copy; {currentYear} Bite of Humor. All rights reserved.
          </p>
        </article>

        <article className={classes["footer__list-info"]}>
          {currentInfoList &&
            currentInfoList.map((listData, index) => (
              <UnorderedList key={listData.title || index} items={listData} />
            ))}
        </article>
      </footer>
    </>
  );
};

export default Footer;
