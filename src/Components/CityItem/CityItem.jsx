import Styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
function CityItem({ city }) {
  const { city_name, id, country, position } = city;
  return (
    <div>
      <Link className={Styles.cityItem} to={`${city_name}?lat=${position.lat}&lng=${position.lng}`}>
        <p>
          {id}. {city_name}
        </p>
        <p className={Styles.country}>{country}</p>
        <button className={Styles.deleteBtn}>
          <i class="bi bi-x"></i>
        </button>
      </Link>
    </div>
  );
}

export default CityItem;
