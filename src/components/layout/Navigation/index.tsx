import { NavLink, type NavLinkRenderProps } from "react-router-dom";
import classes from "./Navigation.module.scss";
const Navigation = () => {
  const activeClass = (isActive: NavLinkRenderProps) =>
    isActive ? classes["header__nav-link"] : classes["header__nav-link:active"];

  return (
    <>
      <header className={classes["header"]}>
        <h5 className={classes["header__title"]}>Bite of Humor</h5>
        <nav className={classes["header__nav"]}>
          <ul className={classes["header__nav-list"]}>
            <li className={classes["header__nav-item"]}>
              <NavLink
                to={"sign-up"}
                className={(isActive) => activeClass(isActive)}
              >
                "Sign Up"
              </NavLink>
            </li>
            <li className={classes["header__nav-item"]}>
              <NavLink
                to={"login"}
                className={(isActive) => activeClass(isActive)}
              >
                "Log In"
              </NavLink>
            </li>
            <li className={classes["header__nav-item"]}>
              <NavLink
                to={"sign-up"}
                className={(isActive) => activeClass(isActive)}
              >
                Sign Up
              </NavLink>
            </li>
            <li className={classes["header__nav-item"]}>
              <NavLink
                to={"login"}
                className={(isActive) => activeClass(isActive)}
              >
                Log In
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
