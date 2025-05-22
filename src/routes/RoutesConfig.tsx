import TheMediumSetup from "@/pages/TheMediumSetup";
import TheStartSetup from "@/pages/TheStartSetup";
import PublicLayout from "@/pages/PublicLayout";
import ErrorPage from "@/pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import TheFinalSetupPage from "@/pages/TheFinalSetup";
import LogIn from "@/pages/LogIn";
import SignUp from "@/pages/SignUp";
import SelectCountry from "@/pages/SelectCountry";
import LanguageWrapper from "@/components/wrapper/LanguageWrapper";

const router = createBrowserRouter([
  {
    path: "/:lang",
    element: <LanguageWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TheStartSetup />,
      },
      {
        path: "setup",
        element: <PublicLayout />,
        children: [
          {
            index: true,
            element: <TheMediumSetup />,
          },
          {
            path: "log-in",
            element: <LogIn />,
          },
          {
            path: "sign-up",
            element: <SignUp />,
          },
          {
            path: "select-country",
            element: <SelectCountry />,
          },
          {
            path: "final",
            element: <TheFinalSetupPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
