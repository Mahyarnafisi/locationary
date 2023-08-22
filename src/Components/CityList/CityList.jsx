import { useCities } from "../../Contexts/CitiesContext";
import { motion } from "framer-motion";
import CityItem from "../CityItem/CItyItem";
import EmptyListMessage from "../EmptyListMessage/EmptyListMessage";
import Spinner from "../Spinner/Spinner";
import Styles from "./CityList.module.css";

function CityList() {
  const { isLoading, cities } = useCities();

  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length) return <EmptyListMessage message="Please add your first place by clicking on a city in the map" />;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={Styles.cityList}>
      <ul>
        {cities.map((city) => {
          return <CityItem city={city} key={city.id} />;
        })}
      </ul>
    </motion.div>
  );
}

export default CityList;
