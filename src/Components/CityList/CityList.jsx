import CityItem from "../CityItem/CItyItem";
import EmptyListMessage from "../EmptyListMessage/EmptyListMessage";
import Spinner from "../Spinner/Spinner";
import Styles from "./CityList.module.css";
import prototypes from "prop-types";

function CityList(props) {
  if (props.isLoading) {
    return <Spinner />;
  }

  if (!props.cities.length) return <EmptyListMessage message="Please add your first place by clicking on a city in the map" />;

  return (
    <div className={Styles.cityList}>
      <ul>
        {props.cities.map((city) => {
          return <CityItem city={city} key={city.id} />;
        })}
      </ul>
    </div>
  );
}
CityList.prototypes = {
  isLoading: prototypes.bool,
  cities: prototypes.array,
};
export default CityList;
