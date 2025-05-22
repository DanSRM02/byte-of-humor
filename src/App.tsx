import { RouterProvider } from "react-router-dom";
import router from "./routes/RoutesConfig";
import "./i18n/i18nconfig";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, []);
  
  return <RouterProvider router={router} />;
}

export default App;
