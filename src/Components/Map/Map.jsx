import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Styles from "./Map.module.css";
import { useCities } from "../../Contexts/CitiesContext";
function Map() {
  const { currentCity } = useCities();

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  let lat = searchParams.get("lat");
  let lng = searchParams.get("lng");
  const [mapPosition, setMapPosition] = useState([55.7047, 13.191]);
  return (
    <div className={Styles.mapContainer}>
      <div className={Styles.locationCard}>
        <p>
          Positions: lat:{lat} - lng:{lng}
        </p>
      </div>
      <MapContainer center={mapPosition} zoom={14} scrollWheelZoom={true} className={Styles.map}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
