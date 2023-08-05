import PageNav from "../../Components/PageNav/PageNav";
import Styles from "./Products.module.css";
function Products() {
  return (
    <div className={Styles.products}>
      <PageNav />
      <h1>products</h1>
    </div>
  );
}

export default Products;
