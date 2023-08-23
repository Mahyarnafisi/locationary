import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import { useCities } from "../../Contexts/CitiesContext";
import Styles from "./Map.module.css";
import Spinner from "../Spinner/Spinner";
import { useUrlLocation } from "../../Hooks/useUrlLocation";

function Map() {
  const { cities, currentCity, isLoading } = useCities();
  const [mapPosition, setMapPosition] = useState([55.7047, 13.191]);
  // Custom Hook
  const [lat, lng] = useUrlLocation();

  useEffect(() => {
    if (lat && lng) setMapPosition([lat, lng]);
  }, [lat, lng]);

  return (
    <div className={Styles.mapContainer}>
      {/* Location card on the map */}
      {currentCity.city_name && <div className={Styles.locationCard}>{isLoading ? <Spinner /> : <h4>{currentCity.city_name.charAt(0).toUpperCase() + currentCity.city_name.slice(1)}</h4>}</div>}

      {/* Leaftlet Map */}
      <MapContainer center={mapPosition} maxZoom={15} minZoom={8} zoom={10} scrollWheelZoom={true} className={Styles.map}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />

        {cities.map((city) => {
          return (
            <Marker key={city.id} position={[city.position.lat, city.position.lng]} className={Styles.marker}>
              <Popup className={Styles.popup}>
                <div>
                  <h4>{city.city_name}</h4>
                  <div>
                    <p>Comment:</p>
                    <p>{city.comment}</p>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
        <DetectClick />
        <ChangeCenter position={mapPosition} />
      </MapContainer>
    </div>
  );
}
// custom components fro changing location automatic
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

// Custom function for opening th new form on click
function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default Map;
