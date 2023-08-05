import PageNav from "../../Components/PageNav/PageNav";
import Styles from "./Products.module.css";
import productImage from "../../assets/product_image.webp";
import { Link } from "react-router-dom";
function Products() {
  return (
    <div className={Styles.products}>
      <PageNav />
      <section>
        <div className={Styles.boxLeft}>
          <h1>About Locationary</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, voluptates. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nisi, suscipit officiis dignissimos quos accusamus? Sunt, accusantium perspiciatis
            officia quaerat odit asperiores ratione voluptates accusamus ipsa inventore?
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum accusantium nisi magnam minima laboriosam rerum?</p>
          <Link className={Styles.ctaPricing} to="/pricing">
            go to pricing <i class="bi bi-chevron-right"></i>
          </Link>
        </div>

        <div className={Styles.boxRight}>
          <img src={productImage} alt="product info picture" />
        </div>
      </section>
    </div>
  );
}

export default Products;
