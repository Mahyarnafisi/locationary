import Styles from "./CityItem.module.css";

function CityItem({ city }) {
  const { city_name, id, country } = city;
  return (
    <div className={Styles.cityItem}>
      <p>
        {id}. {city_name}
      </p>
      <p className={Styles.country}>{country}</p>
      <button className={Styles.deleteBtn}>
        <i class="bi bi-x"></i>
      </button>
    </div>
  );
}

export default CityItem;
