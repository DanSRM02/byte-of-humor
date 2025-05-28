import { useTranslation } from "react-i18next";
import classes from "./ErrorPage.module.scss";
import Button from "@/components/inputs/Button";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("..");
  };
  return (
    <>
      <main className={classes["error"]} aria-label="Error page" tabIndex={0}>
        <div
          className={classes["error__container"]}
          aria-label="Error message container"
          tabIndex={0}
        >
          <div className={classes["error__icon"]} aria-hidden="true">
            ⚠️
          </div>
          <h2 className={classes["error__title"]} tabIndex={0}>
            {t("ErrorPage.content.title")}
          </h2>
          <p className={classes["error__message"]} tabIndex={0}>
            {t("ErrorPage.content.message")}
          </p>
          <div className={classes["error__actions"]}>
            <Button
              variant="primary"
              size="medium"
              onClick={handleRedirect}
              aria-label={t("ErrorPage.actions.goBack", "Go Back")}
              tabIndex={0}
            >
              {t("ErrorPage.actions.goBack", "Go Back")}
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}

export default ErrorPage;
