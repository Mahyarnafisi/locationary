import Styles from "./CountriesList.module.css";

import Spinner from "../Spinner/Spinner";
import CountryItem from "../CountryItem/CountryItem";
import { useCities } from "../../Contexts/CitiesContext";

function CountriesList() {
  const { isLoading, countriesList } = useCities();
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={Styles.countriesList}>
      <ul>
        {countriesList.map((item) => {
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
