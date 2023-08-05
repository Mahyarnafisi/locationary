import { Link } from "react-router-dom";
import Styles from "./PageNotFound.module.css";
function PageNotFound() {
  return (
    <div>
      <h1>Error</h1>
      <Link to="/">Go back to home</Link>
    </div>
  );
}

export default PageNotFound;
