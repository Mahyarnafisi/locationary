import Styles from "./Footer.module.css";

function Footer() {
  return <div className={Styles.footer}>&copy; Copyright {new Date().getFullYear()} by Locationary website.</div>;
}

export default Footer;
