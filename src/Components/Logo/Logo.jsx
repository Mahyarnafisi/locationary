import Styles from "./Logo.module.css";
import LogoIcon from "../../assets/brand_icon.png";

function Logo() {
  return (
    <div className={Styles.logo}>
      <img src={LogoIcon} alt="brand icon" />
      <h2>Locationary app</h2>
    </div>
  );
}

export default Logo;
