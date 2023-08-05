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
        <div className={Styles.freePlan}>
          <div className={Styles.freePlan__header}>
            <h2>Free Plan</h2>
            <h3>Free</h3>
          </div>
          <div className={Styles.freePlan__body}>
            <h4>Plan included:</h4>
            <p>
              <i class="bi bi-check"></i> &nbsp;Lorem ipsum dolor sit amet.
            </p>
            <p>
              <i class="bi bi-check"></i> &nbsp; Lorem ipsum dolor sit amet consectetur.
            </p>
            <p>
              <i class="bi bi-check"></i> &nbsp; Lorem ipsum dolor sit.
            </p>
            <p>
              <i class="bi bi-check"></i> &nbsp; Lorem ipsum dolor sit, sectetur adipisicing.
            </p>
          </div>
          <Link className={Styles.freePlan__btn} to="login">
            Login
          </Link>
        </div>
        <div className={Styles.proPlan}>pro</div>
      </section>
    </div>
  );
}

export default Pricing;
