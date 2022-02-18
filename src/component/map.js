import Axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// const redIcon = L.icon({
//   iconUrl: "https://assets.stickpng.com/images/580b585b2edbce24c47b2a24.png",
//   iconSize: [38, 95],
//   iconAnchor: [22, 94],
//   popupAnchor: [-3, -76]
// });

// const blueIcon = L.icon({
//   iconUrl: "https://assets.stickpng.com/images/580b585b2edbce24c47b2a24.png",
//   iconSize: [38, 95],
//   iconAnchor: [22, 94],
//   popupAnchor: [-3, -76]
// });

const MapComponent = ({ lunch, village }) => {
  const [popeye, setPopeye] = useState([]);
  const [positionVillage, setPositionVillage] = useState([]);
  const [positionLunch, setPositionLunch] = useState([]);
  const [step, setStep] = useState(0);

  // const [positionLunch, setPositionLunch] = useState([]);

  useEffect(() => {
    if (lunch)
      // setLunch([...lunch.coordinates]);
      console.log("lucnh from map", lunch);
  }, [lunch]);

  useEffect(() => {
    if (lunch?.coordinates.length > 0)
      // setVillage(villageState);
      console.log("lucnh from map", lunch);
  }, [village]);

  useEffect(() => {
    if (village.coordinates?.length > 0) {
      setPositionVillage(village.coordinates[0]);
      console.log("map position Village", village.coordinates[0]);
      setStep(0);
    }

  }, [village]);

  useEffect(() => {
    if (lunch.coordinates?.length > 0) {
      setPositionLunch(lunch.coordinates[0]);
      console.log("map position lunch", lunch.coordinates[0]);
    }
  }, [village]);

  useEffect(() => {
    if (village.coordinates?.length > 0) {
    setPositionVillage(village.coordinates[step]);
    }
  }, [step]);

  const handleStep = (e) => {
    if(step < 115)
    setStep(step + 1);
    console.log("step map ", step);
  };

  return (
    <>
      {positionVillage.length > 0 && positionLunch.length > 0 ? (
        <div>
          {" "}
          <div
            className="btn-banner"
            id="theme1"
            onClick={(e) => handleStep(e)}
          >
            next
          </div>
          <MapContainer
            center={positionVillage}
            zoom={20}
            style={{ height: "440px", marginTop: "80px", marginBottom: "90px" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={positionVillage}>
              <Popup>
                <p className="place-name">{"[place.venue.name]"}</p>
                <p className="place-address">
                  {"[place.venue.location.address]"}
                </p>
                <p className="place-category">
                  {"[place.venue.categories[0].name]"}
                </p>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      ) : (
        <div>loading ...</div>
      )}
    </>
  );
};
export default MapComponent;
