import { NavLink, type NavLinkRenderProps } from "react-router-dom";
import classes from "./Navigation.module.scss";
import { useTranslation } from "react-i18next";
const Navigation = () => {
  const activeClass = (isActive: NavLinkRenderProps) =>
    isActive ? classes["header__nav-link"] : classes["header__nav-link:active"];

  const { t } = useTranslation();

  return (
    <>
      <header className={classes["header"]}>
        <h5 className={classes["header__title"]}>Bite of Humor</h5>
        <nav className={classes["header__nav"]}>
          <ul className={classes["header__nav-list"]}>
            <li className={classes["header__nav-item"]}>
              <NavLink to={"."} className={(isActive) => activeClass(isActive)}>
                {t("HeaderNavigation.navItems.home")}
              </NavLink>
            </li>
            <li className={classes["header__nav-item"]}>
              <NavLink
                to={"sign-up"}
                className={(isActive) => activeClass(isActive)}
              >
                {t("HeaderNavigation.navItems.signUp")}
              </NavLink>
            </li>
            <li className={classes["header__nav-item"]}>
              <NavLink
                to={"log-in"}
                className={(isActive) => activeClass(isActive)}
              >
                {t("HeaderNavigation.navItems.logIn")}
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
