import Styles from "./Form.module.css";
import Button from "../Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [comment, setComment] = useState("");

  const navigate = useNavigate();

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
