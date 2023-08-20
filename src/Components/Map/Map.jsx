import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import Styles from "./Map.module.css";
import { useCities } from "../../Contexts/CitiesContext";
function Map() {
  const { cities } = useCities();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mapPosition, setMapPosition] = useState([55.7047, 13.191]);

  let lat = searchParams.get("lat");
  let lng = searchParams.get("lng");

  useEffect(() => {
    if (lat && lng) setMapPosition([lat, lng]);
  }, [lat, lng]);

  return (
    <div className={Styles.mapContainer}>
      <div className={Styles.locationCard}>
        <p>Positions: lat:- lng:</p>
      </div>
      <MapContainer center={mapPosition} zoom={12} scrollWheelZoom={true} className={Styles.map}>
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
        <ChangeCenter position={mapPosition} />
      </MapContainer>
    </div>
  );
}
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default Map;
