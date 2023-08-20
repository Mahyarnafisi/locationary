import { Link } from "react-router-dom";
import { useCities } from "../../../Contexts/CitiesContext";
import Styles from "./Wiki.Module.css";
function Wiki() {
  const { currentCity } = useCities();
  return (
    <div className={Styles.wiki}>
      <p>Link to wikipedia:</p>
      <Link target="_blank" to={`https://en.wikipedia.org/wiki/${currentCity.city_name}`}>{`https://en.wikipedia.org/wiki/${currentCity.city_name}`}</Link>
    </div>
  );
}

export default Wiki;
