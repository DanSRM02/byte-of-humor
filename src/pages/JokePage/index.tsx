import LeadIn from "@/components/dataDisplay/LeadIn";
import classes from "./JokePage.module.scss";
import TextField from "@/components/inputs/TextField";
import useJoke from "@/services/useJoke";
import { useEffect, useState, useMemo } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import type { OutletCtxImpl } from "@/types/OutletImpl";
import Card from "@/components/feedback/Card";
import { useTranslation } from "react-i18next";
import { _AVAILABLE_CATEGORIES } from "@/utils/const";
import type { FilterImpl } from "@/types/JokesAPITypes";
import { FaArrowLeftLong } from "react-icons/fa6";
function JokePage() {
  const { jokeState, getInitialJokes, getFilteredJokes } = useJoke();
  const { t } = useTranslation();
  const { language, localizationRouter } = useOutletContext<OutletCtxImpl>();
  const [filter, setFilter] = useState<FilterImpl>({
    category: "Any",
    searchTerm: "",
    safeMode: true,
  });  
  const isSafeModeAllowed = filter.category !== "Dark";

  const translations = useMemo(
    () => ({
      navkLink: {
        text: t("plans.navLink.text"),
      },
      loadingMessage: t("JokePage.loadingMessage", "loading..."),
      safeModeWarning: t(
        "JokePage.safeModeWarning",
        "Safe mode is not allowed for the 'Dark' category."
      ),
      searchFilters: {
        heading: t("JokePage.searchFilters.heading"),
        paragraph: t("JokePage.searchFilters.paragraph"),
      },
      searchForm: {
        safeModeLabel: t("JokePage.searchForm.safeModeLabel"),
        categoryLabel: t("JokePage.searchForm.categoryLabel"),
        placeholder: t("JokePage.searchForm.placeholder"),
        label: t("JokePage.searchForm.label"),
      },
    }),
    [t]
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFilter((prevFilter) => {
      let newFilter = { ...prevFilter };
      switch (type) {
        case "search":
          newFilter.searchTerm = value;
          break;
        case "checkbox":          
          if (isSafeModeAllowed) {
            newFilter.safeMode = checked;
          }
          break;
        case "select-one":
          newFilter.category = value;          
          if (value === "Dark") {
            newFilter.safeMode = false;
          }
          break;
      }
      return newFilter;
    });
  };

  useEffect(() => {
    getInitialJokes(language);
  }, [language, localizationRouter]);

  useEffect(() => {
    getFilteredJokes(filter, language);
  }, [filter.category, filter.searchTerm, filter.safeMode, language]);

  return (
    <>
      <section aria-label="Joke explorer section" tabIndex={0}>
        <span className={classes["joke__header-container"]}>
          <NavLink to={"../final"}>
            <FaArrowLeftLong size={"2rem"} />
          </NavLink>
          <div
            className={classes["joke__header"]}
            aria-label="Joke search and filters"
            tabIndex={0}
          >
            <LeadIn
              variant="secondary"
              heading={translations.searchFilters.heading}
              paragraph={translations.searchFilters.paragraph}
            />

            <span
              className={classes["joke__header-filter"]}
              aria-label="Joke filter controls"
              tabIndex={0}
            >
              <TextField
                type="checkbox"
                color="primary"
                checked={isSafeModeAllowed ? filter.safeMode : false}
                disabled={!isSafeModeAllowed}
                label={translations.searchForm.safeModeLabel}
                onChange={handleInputChange}
                id="safeMode"
                aria-label={translations.searchForm.safeModeLabel}
              />
              <TextField
                select
                id="select-category"
                color="secondary"
                label={translations.searchForm.categoryLabel}
                value={filter.category}
                onChange={handleInputChange}
                aria-label={translations.searchForm.categoryLabel}
              >
                <option value="Any">Any</option>
                {_AVAILABLE_CATEGORIES.map((optionValue) => (
                  <option key={optionValue} value={optionValue}>
                    {optionValue}
                  </option>
                ))}
              </TextField>
              <TextField
                onChange={handleInputChange}
                color="primary"
                id="search-term"
                placeholder={translations.searchForm.placeholder}
                type="search"
                label={translations.searchForm.label}
                aria-label={translations.searchForm.label}
                value={filter.searchTerm}
              />
            </span>
          </div>
        </span>
        {jokeState.error && (
          <p className={classes["joke__error"]} role="alert">
            {jokeState.error}
          </p>
        )}
        {jokeState.isLoading && (
          <p className={classes["joke_loading"]} aria-live="polite">
            {translations.loadingMessage}
          </p>
        )}
        {/* Show warning only if category is 'Dark' */}
        {filter.category === "Dark" && (
          <span className={classes["joke__safe-mode-warning"]}>
            {translations.safeModeWarning}
          </span>
        )}
        <menu className={classes["joke__menu"]} aria-label="Joke results list">
          {jokeState.jokes &&
            jokeState.jokes.map((joke) => (
              <Card
                key={joke.id}
                variant="joke"
                title={joke.lang}
                jokePunchline={joke.delivery}
                jokeSetup={joke.setup || joke.joke}
                jokeType={joke.type}
                badge={joke.category}
              />
            ))}
        </menu>
      </section>
    </>
  );
}

export default JokePage;
