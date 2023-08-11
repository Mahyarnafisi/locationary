import Styles from "./CountriesList.module.css";

import Spinner from "../Spinner/Spinner";
import CountryItem from "../CountryItem/CountryItem";

function CountriesList(props) {
  if (props.isLoading) {
    return <Spinner />;
  }

  return (
    <div className={Styles.countriesList}>
      <ul>
        {props.countriesList.map((item) => {
          return (
            <li key={item.id}>
              <CountryItem country={item.country} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CountriesList;
