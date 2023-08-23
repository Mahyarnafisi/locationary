import { useEffect } from "react";
import { motion } from "framer-motion";

import { useCities } from "../../Contexts/CitiesContext";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import Styles from "./City.module.css";
import Wiki from "./Wiki/Wiki";

function City() {
  const { getCity, currentCity, isLoading } = useCities();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getCity(id);
  }, [id]);

  if (isLoading) return <Spinner />;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={Styles.city}>
      <h3>{currentCity.city_name}</h3>
      <h5 className={Styles.badge}>{currentCity.country}</h5>
      <br />

      {currentCity.comment === "" ? (
        <p>There is no comment yet</p>
      ) : (
        <>
          <p>{`Here is last visitors think about ${currentCity.city_name}: `}</p>
          <p className={Styles.comment}>{currentCity.comment}</p>
        </>
      )}

      <Wiki />
      <button className={Styles.btn__back} onClick={() => navigate(-1)}>
        Get back to city list
      </button>
    </motion.div>
  );
}

export default City;
