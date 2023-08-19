import PageNav from "../../Components/PageNav/PageNav";
import { Link } from "react-router-dom";
import Styles from "./HomePage.module.css";
function HomePage() {
  return (
    <main className={Styles.homepage}>
      <PageNav />
      <section className={Styles.section}>
        <h1>
          You travels the World <span>Locationary</span> will track your adventures.
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus animi aut illum voluptatum voluptas amet corporis expedita dignissimos ipsam pariatur repellendus, fuga, quasi aliquid obcaecati neque? Libero, hic illum?</p>
        <Link className={Styles.btn} to="app/cities">
          Start tracking now <i class="bi bi-chevron-right"></i>
        </Link>
      </section>
    </main>
  );
}

export default HomePage;
