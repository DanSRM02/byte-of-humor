import { useTranslation } from "react-i18next";

function ErrorPage() {
  const { t } = useTranslation();
  return (
    <>
      <main>
        <h2>{t("ErrorPage.content.title")}</h2>
        <p>{t("ErrorPage.content.message")}</p>
      </main>
    </>
  );
}

export default ErrorPage;
