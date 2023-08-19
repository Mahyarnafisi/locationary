import { useCities } from "../../Contexts/CitiesContext";
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
    <div className={Styles.cityList}>
      <ul>
        {cities.map((city) => {
          return <CityItem city={city} key={city.id} />;
        })}
      </ul>
    </div>
  );
}

export default CityList;
