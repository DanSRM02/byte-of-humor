import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import { Outlet, useOutletContext } from "react-router-dom";
import classes from "./PublicLayout.module.scss";
import type { OutletCtxImpl } from "@/types/OutletImpl";

function PublicLayout() {
  const languageContext = useOutletContext<OutletCtxImpl>();
  return (
    <div
      className={classes["layout"]}
      aria-label="Public layout wrapper"
      tabIndex={0}
    >
      <Navigation />
      <main
        className={classes["layout__content"]}
        aria-label="Main content area"
        tabIndex={0}
      >
        <Outlet context={languageContext} />
      </main>
      <Footer />
    </div>
  );
}

export default PublicLayout;
