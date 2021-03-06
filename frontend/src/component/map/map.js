import { useEffect, useState } from "react";
import { useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import ProgressBar from "../progressBar/progressBar";
import StyledMap from "./styledMap";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapComponent = ({
  lunch,
  village,
  backHome,
  step,
  journey,
  game,
  handleRestart,
  handleStart,
  handleStop,
  themeId,
  pace,
  character,
  handleSlider,
}) => {
  const [position, setPosition] = useState([0.1, 0.1]);
  const [tripIcon, setTripIcon] = useState(
    "https://cdn.filestackcontent.com/Il58ulSQ0SqH7YuoG3no"
  );
  const [tripIconSize, setTripIconSize] = useState([0, 0]);

  const animateRef = useRef(false);

  useEffect(() => {
    if (journey === "home" || journey === "work") {
      if (character === "corto") {
        setTripIcon("https://cdn.filestackcontent.com/rqqOErISHG4TupnLWGLD");
        setTripIconSize([100, 100]);
      } else {
        setTripIcon("https://cdn.filestackcontent.com/npQv8efxRDusdhV8bVs9");
        setTripIconSize([100, 100]);
      }
    }
    if (journey === "lunch") {
      if (character === "olive") {
        setTripIcon("https://cdn.filestackcontent.com/3ekvsyYgSMq2oaP7WyEP");
        setTripIconSize([18, 95]);
      } else if (character === "popeye") {
        setTripIcon("https://cdn.filestackcontent.com/Il58ulSQ0SqH7YuoG3no");
        setTripIconSize([18, 95]);
      } else if (character === "corto") {
        setTripIcon("https://cdn.filestackcontent.com/2IPGbGK4TQ2IyHr1QC7t");
        setTripIconSize([28, 95]);
      }
    }
  }, [journey, character]);

  var markerIcon = L.icon({
    iconUrl: tripIcon,

    iconSize: tripIconSize,
    shadowSize: [0, 0],
    iconAnchor: [0, 0], 
    shadowAnchor: [4, 62], 
  });

  function SetViewOnClick({ animateRef, position }) {
    let timer = 1000;
    if (pace === "slow") timer = 9000;
    const map = useMap();
    map.setView(position, map.getZoom(), {
      animate: animateRef.current || false,
    });
    const markerPoint = L.marker(position, { icon: markerIcon });
    markerPoint.addTo(map);

    setTimeout(() => {
      map.removeLayer(markerPoint);
    }, timer);

    return null;
  }

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
      <StyledMap>
        {" "}
        <div className="" data-testId="map-1">
          <div>
            <ProgressBar
              handleSlider={handleSlider}
              step={step}
              journey={journey}
              game={game}
              pace={pace}
              themeId={themeId}
            />
          </div>
          {character && journey && pace && (
            <div className="container-btn-map">
              {game ? (
                <div className="btn-map" onClick={handleStop}>
                  <h3 onClick={handleStop}>Stop</h3>
                </div>
              ) : (
                <div className="btn-map" onClick={handleStart}>
                  <h3 onClick={handleStart}>start</h3>
                </div>
              )}
              <div className="btn-map" onClick={handleRestart}>
                <h3 onClick={handleRestart}>Reset</h3>
              </div>
            </div>
          )}
        </div>
        {lunch?.length > 0 && village?.length > 0 && (
          <div style={{ width: "100%" }}>
            <MapContainer
              center={position}
              zoom={16}
              style={{ height: "440px", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker position={position}>
              </Marker>

              <SetViewOnClick animateRef={animateRef} position={position} />
            </MapContainer>
          </div>
        )}
      </StyledMap>
    </>
  );
};
export default MapComponent;
