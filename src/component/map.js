import Axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

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



const MapComponent = () => {

 

  const lunchState = useSelector((lunchState) => lunchState.LunchState);
  const villageState = useSelector((villageState) => villageState.VillageState);
  
  const [lunch, setLunch] = useState([]);
  const [village, setVillage] = useState([]);
  const [popeye, setPopeye] = useState([]);
  const [positionVillage, setPositionVillage] = useState([35.915087047076575,14.495279788970945]);
  const [positionLunch, setPositionLunch] = useState([35.915087047076575,14.495279788970945]);

  useEffect(() => {
    if (lunchState) setLunch([...lunchState.coordinates]);
  }, [lunchState]);

  useEffect(() => {
    if (villageState?.coordinates.length>0) setVillage(villageState);
  }, [villageState]);

  useEffect(() => {
    if (village.coordinates?.length>0) {
    setPositionVillage (village.coordinates[50])
    console.log('map position Village', village.coordinates[50])
    }
  }, [village]);

  useEffect(() => {
    if (lunch.coordinates?.length>0) {
    setPositionLunch (lunch.coordinates[50])
    console.log('map position lunch', lunch.coordinates[50])
    }
  }, [village]);


  return (
    <>
      <MapContainer
        center={positionVillage}
        zoom={20}
        style={{ height: "440px" ,marginTop: "80px", marginBottom: "90px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

{lunch.coordinates?.map((point,i) => (
  <Marker
                key={i}
                position={[35.915087047076575,14.495279788970945]}
                // icon={popeye ? redIcon : blueIcon}
                // zIndexOffset={place.placeClicked ? 10000 : 0}
                // onClick={e => {
                //   e.target.setIcon(redIcon);
                //   setTimeout(() => {
                //     e.target.setIcon(blueIcon);
                //   }, 1500);
                // }}
              >
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
))}
      </MapContainer>
    </>
  );
};
export default MapComponent;
