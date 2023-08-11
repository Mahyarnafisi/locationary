import Styles from "./CountryItem.module.css";

function CountryItem(props) {
  return (
    <div className={Styles.countryItem}>
      <p>{props.country}</p>
    </div>
  );
}

export default CountryItem;
