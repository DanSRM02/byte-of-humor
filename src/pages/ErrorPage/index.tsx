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
      <main className={classes["error"]}>
        <div className={classes["error__container"]}>
          <div className={classes["error__icon"]}>⚠️</div>
          <h2 className={classes["error__title"]}>
            {t("ErrorPage.content.title")}
          </h2>
          <p className={classes["error__message"]}>
            {t("ErrorPage.content.message")}
          </p>
          <div className={classes["error__actions"]}>
            <Button variant="primary" size="medium" onClick={handleRedirect}>
              {t("ErrorPage.actions.goBack", "Go Back")}
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}

export default ErrorPage;
