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
import type { FilterImpl } from "@/types/FilterImpl";
import { FaArrowLeftLong } from "react-icons/fa6";
function JokePage() {
  const { jokeState, getInitialJokes, getFilteredJokes } = useJoke();
  const { t } = useTranslation();
  const { language } = useOutletContext<OutletCtxImpl>();

  const [filter, setFilter] = useState<FilterImpl>({
    category: "Any",
    searchTerm: "",
    safeMode: true,
  });

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

  const isSafeModeAllowed = filter.category !== "Dark";

  useEffect(() => {
    getInitialJokes(language);
    if (isSafeModeAllowed) {
      getFilteredJokes(filter, language);
    }
  }, [filter, language]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value, type, checkValidity } = e.target;
    setFilter((prev) => ({
      ...prev,
      [id === "search-term"
        ? "searchTerm"
        : id === "select-category"
        ? "category"
        : "safeMode"]: type === "checkbox" ? checkValidity : value,
    }));
  };

  useEffect(() => {
    if (filter.category === "Dark" && filter.safeMode) {
      setFilter((prev) => ({ ...prev, safeMode: false }));
    }
  }, [filter.category]);

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
                defaultChecked={filter.safeMode}
                label={translations.searchForm.safeModeLabel}
                onChange={handleInputChange}
                id="safeMode"
                aria-label={translations.searchForm.safeModeLabel}
                disabled={filter.category === "Dark"}
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
        {jokeState.isLoading && (
          <p className={classes[""]} aria-live="polite">
            {translations.loadingMessage}
          </p>
        )}
        {!isSafeModeAllowed && (
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
