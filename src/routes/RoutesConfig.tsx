import TheMediumSetup from "@/pages/TheMediumSetup";
import TheStartSetup from "@/pages/TheStartSetup";
import PublicLayout from "@/pages/PublicLayout";
import ErrorPage from "@/pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import TheFinalSetupPage from "@/pages/TheFinalSetup";
import LogIn from "@/pages/LogIn";
import SignUp from "@/pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TheStartSetup />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:lang/setup",
    element: <PublicLayout />,
    children: [
      {
        path: "medium",
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
        path: "final",
        element: <TheFinalSetupPage />,
      },
    ],
  },
]);

export default router;
