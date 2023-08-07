import Sidebar from "../../Components/Sidebar/Sidebar";
import Map from "../../Components/Map/Map";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
