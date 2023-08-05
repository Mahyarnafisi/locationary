import { NavLink, Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Styles from "./PageNav.module.css";
function PageNav() {
  return (
    <nav className={Styles.page_nav}>
      <Link className={Styles.link} to="/">
        <Logo />
      </Link>

      <ul>
        <li>
          <NavLink className={Styles.nav_link} to="/pricing">
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink className={Styles.nav_link} to="/products">
            Products
          </NavLink>
        </li>

        <li>
          <NavLink className={Styles.ctaLink} to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
