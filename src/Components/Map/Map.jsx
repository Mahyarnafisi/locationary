import { useSearchParams } from "react-router-dom";
import Styles from "./Map.module.css";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  let lat = searchParams.get("lat");
  let lng = searchParams.get("lng");
  return (
    <div className={Styles.map}>
      <h1>map:</h1>
      <h2>
        Positions: lat:{lat} - lng:{lng}
      </h2>
    </div>
  );
}

export default Map;
