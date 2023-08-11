import Styles from "./Sidebar.module.css";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
import { Outlet, Link } from "react-router-dom";
import AppNav from "../AppNav/AppNav";

function Sidebar() {
  return (
    <div className={Styles.sidebar}>
      <Link to="/">
        <Logo />
      </Link>
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Sidebar;
