import Styles from "./City.module.css";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";

function City({ cities }) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  const { comment, city_name } = cities[id - 1];

  let lat = searchParams.get("lat");
  let lng = searchParams.get("lng");

  return (
    <div className={Styles.city}>
      <h3>{city_name}</h3>
      <p>{comment}</p>
      <br />
      <p>
        Position: {lat}, {lng}
      </p>
      <button className={Styles.btn__back} onClick={() => navigate(-1)}>
        Get back to city list
      </button>
    </div>
  );
}

export default City;
