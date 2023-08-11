import Styles from "./City.module.css";
import { useParams, useSearchParams } from "react-router-dom";

function City() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { city_name } = useParams();
  let lat = searchParams.get("lat");
  let lng = searchParams.get("lng");

  return (
    <div className={Styles.city}>
      <p>hello {city_name}</p>
      <p>
        {lat}, {lng}
      </p>
    </div>
  );
}

export default City;
