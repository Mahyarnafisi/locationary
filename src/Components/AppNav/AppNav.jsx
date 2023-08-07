import { NavLink } from "react-router-dom";
import Styles from "./AppNav.module.css";

function AppNav() {
  return (
    <div className={Styles.appNav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>

        <li>
          <NavLink to="Countries">Countries</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AppNav;
