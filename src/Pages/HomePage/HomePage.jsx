import PageNav from "../../Components/PageNav/PageNav";
import { Link } from "react-router-dom";
import Styles from "./HomePage.module.css";
function HomePage() {
  return (
    <main className={Styles.homepage}>
      <PageNav />
      <h1>home page</h1>
      <Link to="app">To the APP</Link>
    </main>
  );
}

export default HomePage;
