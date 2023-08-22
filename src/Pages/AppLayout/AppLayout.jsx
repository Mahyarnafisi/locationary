import Sidebar from "../../Components/Sidebar/Sidebar";
import Map from "../../Components/Map/Map";
import styles from "./AppLayout.module.css";
import { motion } from "framer-motion";

function AppLayout() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.appLayout}>
      <Sidebar />
      <Map />
    </motion.div>
  );
}

export default AppLayout;
