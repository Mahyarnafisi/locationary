import Styles from "./CountriesList.module.css";
import { motion } from "framer-motion";
import Spinner from "../Spinner/Spinner";
import CountryItem from "../CountryItem/CountryItem";
import { useCities } from "../../Contexts/CitiesContext";

function CountriesList() {
  const { isLoading, countriesList } = useCities();
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={Styles.countriesList}>
      <ul>
        {countriesList.map((item) => {
          return (
            <li key={item.id}>
              <CountryItem country={item.country} />
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}

export default CountriesList;
