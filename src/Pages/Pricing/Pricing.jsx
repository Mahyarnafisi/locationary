import PageNav from "../../Components/PageNav/PageNav";
import { Link } from "react-router-dom";
import Styles from "./Pricing.module.css";
import saveMoneyImage from "../../assets/savemoney__pricing.png";
function Pricing() {
  return (
    <div className={Styles.pricing}>
      <PageNav />
      <section className={Styles.planes}>
        <div className={Styles.saveMoney}>
          <h1 className={Styles.saveMoney__title}>
            Save your <span> Money Now</span>
          </h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloremque iusto commodi consectetur quibusdam? Doloribus.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel similique repellendus ipsam quasi.</p>
          <img src={saveMoneyImage} alt="" />
        </div>
        <div className={Styles.title}>
          <div className={Styles.title__header}>
            <h1>Start now</h1>
            <h1>
              Your <span> Free Plan</span>
            </h1>
          </div>
          <div className={Styles.title__readMore}>
            <p>Are you interested?</p>
            <Link to="/products" className={Styles.title__link}>
              Read More
            </Link>
          </div>
        </div>
        <div className={Styles.freePlan}>free</div>
        <div className={Styles.proPlan}>pro</div>
      </section>
    </div>
  );
}

export default Pricing;
