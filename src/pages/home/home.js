import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MapComponent from "../../component/map";
import { setThemeState } from "../../redux/slices/themeSlice";
import { theme } from "../../util/theme";
import StyledHome from "./StyledHome";

const Home = () => {
  const dispatch = useDispatch();

  const themeState = useSelector((themeState) => themeState.ThemeState);
  const lunchState = useSelector((lunchState) => lunchState.LunchState);
  const villageState = useSelector((villageState) => villageState.VillageState);
  const [step, setStep] = useState(0);
  const [game, setGame] = useState(false);

  const [themeId, setThemeId] = useState(0);
  const [lunch, setLunch] = useState();
  const [village, setVillage] = useState();
  const [lunchWsLocation, setLunchWsLocation] = useState([]);
  const [villageWsLocation, setVillageWsLocation] = useState([]);
  const [connection, setConnection] = useState(false);
  const [connectionSocket, setConnectionSocket] = useState(null);

  // setting data received from server webSocket //

  useEffect(() => {
    if (connection === false) {
      const socket = new WebSocket("ws://localhost:8000");
      setConnection(true);
      setConnectionSocket(socket);
    }
  }, []);
  

  useEffect(() => {
    if (connectionSocket) {
      connectionSocket.addEventListener("message", function (event) {
        const data = eval(event.data);

        if (data[0] === "lunchLocation") {
          let arrayFix = data[1].reverse();
          setLunchWsLocation(arrayFix);
          console.log("home socket lunch location", lunchWsLocation);
        }
        if (data[0] === "villageLocation") {
          let arrayFix = data[1].reverse();
          setVillageWsLocation(arrayFix);
          console.log("home socket village location", villageWsLocation);
        }
      });
    }
  }, [connection,step]);

  // ***************** //

  useEffect(() => {
    if (lunchState?.coordinates.length>0) {
      setLunch(lunchState);
      setLunchWsLocation(lunchState.coordinates[0])
      console.log('lunchState[0]',lunchState.coordinates[0])

    }
  }, [lunchState]);

  useEffect(() => {
    if (villageState?.coordinates.length>0) {
      setVillage(villageState);
      console.log('villageState[0]',villageState.coordinates[0])
      setVillageWsLocation(villageState.coordinates[0])
    }
  }, [villageState]);

  useEffect(() => {
    if (themeState) {
      setThemeId(themeState.activeId);
    }
  }, []);

  const handleStart = async () => {
    setGame(true);

    if (village?.coordinates) {
      setTimeout(() => {
        connectionSocket.send(step);
        setStep(step + 1);
        console.log("step home ", step);
      }, 1500);
    }
  };

  useEffect(() => {
    if (game) handleStart();
  }, [step]);

  const handleTheme = (e) => {
    if (e.target.id === "theme1") {
      setThemeId(0);
      dispatch(setThemeState(0));
    } else if (e.target.id === "theme2") {
      setThemeId(1);
      dispatch(setThemeState(1));
    } else if (e.target.id === "theme3") {
      setThemeId(2);
      dispatch(setThemeState(2));
    }
  };

  return (
    <ThemeProvider theme={theme[themeId]}>
      <StyledHome>
        <div className="container-all">
          <div className="container-buttons">
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="btn-square">
                <h3>Back</h3>
              </div>
            </Link>
            {game ? (
              <div className="btn-square" onClick={() => setGame(false)}>
                <h3>Stop</h3>
              </div>
            ) : (
              <div className="btn-square" onClick={() => handleStart()}>
                <h1>Start</h1>
              </div>
            )}
          </div>
          <div className="">
            <h1>Home</h1>
            <div
              className="btn-banner"
              id="theme1"
              onClick={(e) => handleTheme(e)}
            >
              Theme 1
            </div>
            <div
              className="btn-banner"
              id="theme2"
              onClick={(e) => handleTheme(e)}
            >
              Theme 2
            </div>
            {/* <div
              className="btn-banner"
              id="theme3"
              onClick={(e) => handleTheme(e)}
            >
              Theme 3
            </div> */}
            {/* <div
              className="btn-banner"
              id="theme4"
              onClick={(e) => handleTheme(e)}
            >
              full Screen
            </div>
            <div
              className="btn-banner"
              id="theme5"
              onClick={(e) => handleTheme(e)}
            ></div>
            <div
              className="btn-banner"
              id="theme4"
              onClick={(e) => handleTheme(e)}
            >
              full Screen
            </div> */}
          </div>
          {lunchWsLocation.length>0 && villageWsLocation.length>0 ? (
            <div>
              <MapComponent lunch={lunchWsLocation} village={villageWsLocation} step={step} />
            </div>
          ) : (
            <div>loading ...</div>
          )}
        </div>
      </StyledHome>
    </ThemeProvider>
  );
};
export default Home;
