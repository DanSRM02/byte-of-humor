import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import { Outlet, useOutletContext } from "react-router-dom";
import classes from "./PublicLayout.module.scss";
import type { OutletCtxType } from "@/types/OutletType";

function PublicLayout() {
  const languageContext = useOutletContext<OutletCtxType>();

  return (
    <div className={classes["layout"]}>
      <Navigation />
      <main className={classes["layout__content"]}>
        <Outlet context={languageContext} />
      </main>
      <Footer />
    </div>
  );
}

export default PublicLayout;
