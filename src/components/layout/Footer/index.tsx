import { Link, useParams } from "react-router-dom";
import classes from "./Footer.module.scss";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

import UnorderedList from "@/components/dataDisplay/UnorderedList";

import {
  informationListEN,
  informationListFR,
  informationListDE,
} from "@/utils/textConst";
import { type UnorderedListImpl } from "@/types/UnorderedListType";

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
      <footer
        className={classes["footer"]}
        aria-label="Site footer"
        tabIndex={0}
      >
        <article
          className={classes["footer__brand-info"]}
          aria-label="Brand and social links"
          tabIndex={0}
        >
          <h5 tabIndex={0}>Bite of Humor</h5>
          <div
            className={classes["brand-info__social-icons"]}
            aria-label="Social media links"
            tabIndex={0}
          >
            <Link
              to="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              tabIndex={0}
            >
              <FaInstagram size={20} aria-hidden="true" />
            </Link>
            <Link
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              tabIndex={0}
            >
              <FaFacebook size={20} aria-hidden="true" />
            </Link>
            <Link
              to="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              tabIndex={0}
            >
              <FaYoutube size={20} aria-hidden="true" />
            </Link>
          </div>
          <p className={classes["brand-info__copyright"]} tabIndex={0}>
            &copy; {currentYear} Bite of Humor. All rights reserved.
          </p>
        </article>

        <article
          className={classes["footer__list-info"]}
          aria-label="Information links"
          tabIndex={0}
        >
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
