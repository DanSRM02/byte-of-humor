import TheMediumSetup from "@/pages/TheMediumSetup";
import TheStartSetup from "@/pages/TheStartSetup";
import PublicLayout from "@/pages/PublicLayout";
import ErrorPage from "@/pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import TheFinalSetupPage from "@/pages/TheFinalSetup";

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
        path: "final",
        element: <TheFinalSetupPage />,
      },
    ],
  },
]);

export default router;
