import CityItem from "../CityItem/CItyItem";
import Spinner from "../Spinner/Spinner";
import Styles from "./CityList.module.css";
import prototypes from "prop-types";

function CityList(props) {
  if (props.isLoading) {
    return <Spinner />;
  }

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
