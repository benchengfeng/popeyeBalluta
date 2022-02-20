import { useEffect, useState } from "react";
import { useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

var markerIcon = L.icon({
  iconUrl: 'https://cdn.filestackcontent.com/Il58ulSQ0SqH7YuoG3no',

  iconSize:     [18, 75], // size of the icon
  shadowSize:   [0, 0], // size of the shadow
  iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});



const MapComponent = ({ lunch, village, backHome, step, journey , game, handleRestart, handleStart, handleStop}) => {
  const [popeye, setPopeye] = useState([]);
  const [positionVillage, setPositionVillage] = useState(village);
  const [positionLunch, setPositionLunch] = useState(lunch);
  const [position, setPosition] = useState([0.1, 0.1]);

  const animateRef = useRef(false);

  function SetViewOnClick({ animateRef, position }) {
  
    const map = useMap();
    map.setView(position, map.getZoom(), {
      animate: animateRef.current || false,
    });
    const markerPoint = L.marker(position, {icon: markerIcon})
    markerPoint.addTo(map);
    
    setTimeout(()=>{
      map.removeLayer(markerPoint)
    },1000)
  
    return null;
  }

  useEffect(() => {
    if (village?.length > 0) {
      setPositionVillage(village);
      console.log("map position Village", positionVillage);
    }
  }, [village]);

  useEffect(() => {
    if (lunch?.length > 0) {
      setPositionLunch(lunch);
      console.log("map position lunch", positionLunch);
    }
  }, [lunch]);

  useEffect(() => {
    if (journey === "lunch") {
      setPosition(lunch);
    }
    if (journey === "work") {
      setPosition(village);
    }
    if (journey === "home") {
      setPosition(backHome);
    }
  }, [lunch, village, backHome]);

  return (
    <>
      <div>
        {" "}
        <div className="">
        <div className="container-btn-square">
                <div className="btn-square">
                  <h3>Back</h3>
                </div>
              {game ? (
                <div className="btn-square" onClick={handleStop}>
                  <h3 onClick={handleStop}>Stop</h3>
                </div>
              ) : (
                <div className="btn-square" onClick={handleStart}>
                  <h3 onClick={handleStart}>start</h3>
                </div>
              )}
              <div className="btn-square" onClick={handleRestart}>
                <h3 onClick={handleRestart}>Reset</h3>
              </div>
            </div>
              </div>
        {lunch.length > 0 && village.length > 0 && (
          <MapContainer
            center={positionLunch}
            zoom={19}
            style={{ height: "440px", marginTop: "80px", marginBottom: "90px" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
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
            
            <SetViewOnClick animateRef={animateRef} position={position} />
          </MapContainer>
        )}
      </div>
    </>
  );
};
export default MapComponent;
