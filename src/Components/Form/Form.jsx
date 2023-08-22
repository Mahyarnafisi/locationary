import Styles from "./Form.module.css";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUrlLocation } from "../../Hooks/useUrlLocation";
const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const [isLoadingGeocode, setIsLoadingGeocode] = useState(false);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  // custom hook
  const [lat, lng] = useUrlLocation();

  // FETCH DATA FROM REVERSE GEO LOCATION
  useEffect(() => {
    async function fetchingClickedPosition() {
      setIsLoadingGeocode(true);
      try {
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}&localityLanguage=en`);
        const data = await res.json();
        console.log(data);
        setCityName(data.city || "");
        setCountry(data.countryName || "");
      } catch (error) {
        console.log("error");
      } finally {
        setIsLoadingGeocode(false);
      }
    }
    fetchingClickedPosition();
  }, [lat, lng]);

  return (
    <form className={Styles.form}>
      <div className={Styles.row}>
        <label htmlFor="cityName">City Name:</label>
        <input id="cityName" type="text" onChange={(e) => setCityName(e.target.value)} value={cityName} />
      </div>
      <div className={Styles.row}>
        <label htmlFor="Date">Date:</label>
        <input id="Date" type="text" onChange={(e) => setDate(e.target.value)} value={date} />
      </div>
      <div className={Styles.row}>
        <label htmlFor="comment">Comment:</label>
        <textarea id="comment" type="text" maxLength={200} onChange={(e) => setComment(e.target.value)} value={comment} />
      </div>
      <div className={Styles.buttons}>
        <Button
          type="back"
          onClick={(e) => {
            e.preventDefault();
            navigate("/app/cities");
          }}
        >
          &larr; &nbsp; Get Back
        </Button>
        <Button type="primary">Add </Button>
      </div>
    </form>
  );
}

export default Form;
