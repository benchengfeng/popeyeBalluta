import { useEffect, useState } from "react";
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

const MapComponent = ({ lunch, village, step}) => {


  const [popeye, setPopeye] = useState([]);
  const [positionVillage, setPositionVillage] = useState(village);
  const [positionLunch, setPositionLunch] = useState(lunch);



  useEffect(() => {
    if (village?.length > 0) {
      setPositionVillage(village);
      console.log("map position Village", positionVillage);

    }

  }, [village,step]);

  useEffect(() => {
    if (lunch?.length > 0) {
      setPositionLunch(lunch);
      console.log("map position lunch", positionLunch);
    }
  }, [lunch,step]);


  return (
    <>
  
        <div>
          {" "}
          {lunch.length>0 && village.length>0 &&
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
}
        </div>

    </>
  );
};
export default MapComponent;
