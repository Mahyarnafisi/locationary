import PageNav from "../../Components/PageNav/PageNav";
import Styels from "./Pricing.module.css";
function Pricing() {
  return (
    <div className={Styels.pricing}>
      <PageNav />
      <h1>Pricing</h1>
    </div>
  );
}

export default Pricing;
