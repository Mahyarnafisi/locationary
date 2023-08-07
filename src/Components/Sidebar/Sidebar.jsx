import Styles from "./Sidebar.module.css";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import AppNav from "../AppNav/AppNav";

function Sidebar() {
  return (
    <div className={Styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Sidebar;
