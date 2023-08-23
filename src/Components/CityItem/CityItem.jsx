import { Link } from "react-router-dom";
import Styles from "./CityItem.module.css";
function CityItem({ city }) {
  const { city_name, id, country, position } = city;

  const onDeleteHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
      <Link className={Styles.cityItem} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <p>
          {id}. {city_name}
        </p>
        <p className={Styles.country}>{country}</p>
        <button className={Styles.deleteBtn} onClick={onDeleteHandler}>
          <i class="bi bi-x"></i>
        </button>
      </Link>
    </div>
  );
}

export default CityItem;
