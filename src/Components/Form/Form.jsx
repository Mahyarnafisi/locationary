import Styles from "./Form.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  return (
    <form className={Styles.form}>
      form
      <div className={Styles.row}>
        <label htmlFor="cityName">City Name:</label>
        <input id="cityName" type="text" />
      </div>
      <div className={Styles.row}>
        <label htmlFor="Date">Date:</label>
        <input id="Date" type="text" />
      </div>
      <div className={Styles.row}>
        <label htmlFor="comment">Comment:</label>
        <textarea id="comment" type="text" />
      </div>
      <div className={Styles.buttons}>
        <Button type="primary">Add</Button>
        <Button
          type="back"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          Get Back
        </Button>
      </div>
    </form>
  );
}

export default Form;
