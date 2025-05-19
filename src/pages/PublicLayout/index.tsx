import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import { Outlet } from "react-router-dom";
import classes from "./PublicLayout.module.scss";

function PublicLayout() {
  
  return (
    <div className={classes["layout"]}>
      <Navigation />
      <main className={classes["layout__content"]}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default PublicLayout;
