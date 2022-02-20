import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MapComponent from "../../component/map";
import ProgressBar from "../../component/progressBar";
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
  const [backHome, setBackHome] = useState();
  const [lunchWsLocation, setLunchWsLocation] = useState([]);
  const [villageWsLocation, setVillageWsLocation] = useState([]);
  const [backHomLocation, setBackHomeWsLocation] = useState([]);
  const [connection, setConnection] = useState(false);
  const [connectionSocket, setConnectionSocket] = useState(null);
  const [journey, setJourney] = useState();
  const [pace, setPace] = useState();

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
  }, [connection, step]);

  // ***************** //

  useEffect(() => {
    if (lunchState?.coordinates.length > 0) {
      setLunch(lunchState);
      setLunchWsLocation(lunchState.coordinates[0]);
      console.log("lunchState[0]", lunchState.coordinates[0]);
    }
  }, [lunchState]);

  useEffect(() => {
    if (villageState?.coordinates.length > 0) {
      setVillage(villageState);
      console.log("villageState[0]", villageState.coordinates[0]);
      setVillageWsLocation(villageState.coordinates[0]);
    }
  }, [villageState]);

  useEffect(() => {
    if (villageState?.coordinates.length > 0) {
      let arrayFix = [];
      villageState.coordinates.map((o) => {
        arrayFix.unshift(o);
      });
      setBackHome(arrayFix);
      console.log("back home ", backHome);
    }
  }, [villageState]);

  useEffect(() => {
    if (themeState) {
      setThemeId(themeState.activeId);
    }
  }, []);

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

  const handleStart = async (e) => {
    let timing = 1500;
    if (pace === "slow") {
      timing = 10000;
    }

    setGame(true);

    if (journey === "home") {
      setTimeout(() => {
        setBackHomeWsLocation(backHome[step]);
        setStep(step + 1);
        console.log("step home ", step);
      }, timing);
    }

    if (village?.coordinates) {
      setTimeout(() => {
        connectionSocket.send(step);
        setStep(step + 1);
        console.log("step home ", step);
      }, timing);
    }
  };

  const handleStop = async () => {
    setGame(false);
  };

  const handleRestart = async (e) => {
    setLunchWsLocation(lunchState.coordinates[0])
    setVillageWsLocation(villageState.coordinates[0]);
    setBackHomeWsLocation(backHome[0]);
     setStep(0);
     setGame(false);
  };

  useEffect(() => {
    if (
      ((journey === "home" || journey === "work") &&
        step < village?.coordinates.length) ||
      (journey === "lunch" && step < lunch?.coordinates.length)
    ) {
      if (game) handleStart();
    } else {
      setGame(false);
      setStep(0);
    }
  }, [step]);

  const handleJourney = (e) => {
    setJourney(e.target.id);
  };
  const handlePace = (e) => {
    setPace(e.target.id);
  };

  return (
    <ThemeProvider theme={theme[themeId]}>
      <StyledHome>
        <div className="container-page">
          <div className="container-all-left">
            <div className="container-btn-square">
              <div className="btn-square" id="work" onClick={handleJourney}>
                {journey === "work" ? (
                  <h3 style={{ color: "red" }}>Village To Work</h3>
                ) : (
                  <h3 id="work" onClick={handleJourney}>
                    Village To Work
                  </h3>
                )}
              </div>
              <div className="btn-square" id="lunch" onClick={handleJourney}>
                {journey === "lunch" ? (
                  <h3 style={{ color: "red" }}>Going for Lunch</h3>
                ) : (
                  <h3 id="lunch" onClick={handleJourney}>
                    Going for Lunch
                  </h3>
                )}
              </div>

              <div className="btn-square" id="home" onClick={handleJourney}>
                {journey === "home" ? (
                  <h3 style={{ color: "red" }}>Back Home</h3>
                ) : (
                  <h3 id="home" onClick={handleJourney}>
                    Back Home
                  </h3>
                )}
              </div>
            </div>

            <div className="container-btn-square">
              <div className="btn-square" id="fast" onClick={handlePace}>
                {pace === "fast" ? (
                  <h3 style={{ color: "red" }}>1.5 sec</h3>
                ) : (
                  <h3 id="fast" onClick={handlePace}>
                    1.5 sec
                  </h3>
                )}
              </div>
              <div className="btn-square" id="slow" onClick={handlePace}>
                {pace === "slow" ? (
                  <h3 style={{ color: "red" }}>10 sec</h3>
                ) : (
                  <h3 id="slow" onClick={handlePace}>
                    10 sec
                  </h3>
                )}
              </div>
            </div>

            <div className="">
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
            </div>
            {lunchWsLocation.length > 0 && villageWsLocation.length > 0 ? (
              <div>
                <MapComponent
                  lunch={lunchWsLocation}
                  village={villageWsLocation}
                  step={step}
                  journey={journey}
                  backHome={backHomLocation}
                  game={game}
                  handleRestart={handleRestart}
                  handleStart={handleStart}
                  handleStop={handleStop}
                />
              </div>
            ) : (
              <div>loading ...</div>
            )}
          </div>
          <div className="container-all-right">
            <ProgressBar></ProgressBar>
          </div>
        </div>
      </StyledHome>
    </ThemeProvider>
  );
};
export default Home;
