import LeadIn from "@/components/dataDisplay/LeadIn";
import classes from "./JokePage.module.scss";
import TextField from "@/components/inputs/TextField";
import useJoke from "@/services/useJoke";
import { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import type { OutletCtxImpl } from "@/types/OutletImpl";
import Card from "@/components/feedback/Card";
import { useTranslation } from "react-i18next";
import { _AVAILABLE_CATEGORIES, _AVAILABLE_FLAGS } from "@/utils/const";
import type { FilterImpl } from "@/types/FilterImpl";

function JokePage() {
  const { isLoading, jokes, getInitialJokes, getFilteredJokes } = useJoke();
  const { t } = useTranslation();
  const { language } = useOutletContext<OutletCtxImpl>();
  const searchRef = useRef<HTMLInputElement>(null);
  const safeModeRef = useRef<HTMLInputElement>(null);
  const selectCategoryRef = useRef<HTMLSelectElement>(null);
  const [filter, setFilter] = useState<FilterImpl>({
    category: "Any",
    searchTerm: "",
    safeMode: true,
  });

  const handleFilter = () => {
    setFilter(() => ({
      category: selectCategoryRef.current?.value,
      searchTerm: searchRef.current?.value,
      safeMode: safeModeRef.current?.checked,
    }));
  };

  const isSafeModeAllowed = () => {
    if (filter.safeMode && filter.category === "Dark") {
      filter.safeMode = false;
      safeModeRef.current!.checked = false;
      return false;
    }
    return true;
  };

  useEffect(() => {
    getInitialJokes(language);
    if (filter && isSafeModeAllowed()) {
      getFilteredJokes(filter, language);
    }
  }, [filter, language]);

  return (
    <>
      <section
        className={classes[""]}
        aria-label="Joke explorer section"
        tabIndex={0}
      >
        <div
          className={classes["joke__header"]}
          aria-label="Joke search and filters"
          tabIndex={0}
        >
          <LeadIn
            variant="secondary"
            heading={t("JokePage.searchFilters.heading")}
            paragraph={t("JokePage.searchFilters.paragraph")}
          />
          <span
            className={classes["joke__header-filter"]}
            aria-label="Joke filter controls"
            tabIndex={0}
          >
            <TextField
              refInput={safeModeRef}
              type="checkbox"
              color="primary"
              value="safe-mode"
              label={t("JokePage.searchForm.safeModeLabel")}
              defaultChecked={!!filter.safeMode}
              onChange={handleFilter}
              id={`safe-mode-checkbox`}
              aria-label={t("JokePage.searchForm.safeModeLabel")}
            />
            <TextField
              refSelect={selectCategoryRef}
              select
              id="select-category"
              color="secondary"
              label={t("JokePage.searchForm.categoryLabel")}
              onChange={handleFilter}
              aria-label={t("JokePage.searchForm.categoryLabel")}
            >
              <option selected >
                Any
              </option>
              {_AVAILABLE_CATEGORIES.map((optionValue) => (
                <option
                  key={`${optionValue[-2]}${optionValue}`}
                  value={optionValue}
                >
                  {optionValue}
                </option>
              ))}
            </TextField>
            <TextField
              onChange={handleFilter}
              refInput={searchRef}
              color="primary"
              id="search-term"
              placeholder={t("JokePage.searchForm.placeholder")}
              type="search"
              label={t("JokePage.searchForm.label")}
              aria-label={t("JokePage.searchForm.label")}
            />
          </span>
        </div>
        {isLoading && (
          <p className={classes[""]} aria-live="polite">
            {t("JokePage.loadingMessage", "loading...")}
          </p>
        )}
        {!isSafeModeAllowed() && (
          <span className={classes["joke__safe-mode-warning"]}>
            Safe mode is not allowed for the "Dark" category.
          </span>
        )}
        <menu className={classes["joke__menu"]} aria-label="Joke results list">
          {jokes &&
            jokes.map((joke) => (
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
