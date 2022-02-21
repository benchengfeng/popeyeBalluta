import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MapComponent from "../../component/map";
import ProgressBar from "../../component/progressBar";
import Side from "../../component/side";
import { setThemeState } from "../../redux/slices/themeSlice";
import { theme } from "../../util/theme";
import StyledHome from "./StyledHome";

const Home = () => {
  const dispatch = useDispatch();

  const themeState = useSelector((themeState) => themeState.ThemeState);
  const lunchState = useSelector((lunchState) => lunchState.LunchState);
  const villageState = useSelector((villageState) => villageState.VillageState);
  const [connectionSocket, setConnectionSocket] = useState(null);
  const [lunchWsLocation, setLunchWsLocation] = useState([]);
  const [villageWsLocation, setVillageWsLocation] = useState([]);
  const [backHomeLocation, setBackHomeLocation] = useState([]);

  const [step, setStep] = useState(0);
  const [game, setGame] = useState(false);
  const [themeId, setThemeId] = useState(0);
  const [lunch, setLunch] = useState();
  const [village, setVillage] = useState();
  const [backHome, setBackHome] = useState();
  const [connection, setConnection] = useState(false);
  const [journey, setJourney] = useState();
  const [pace, setPace] = useState("fast");
  const [character, setCharacter] = useState(null);

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
          if (data[1]?.length > 0) {
            let arrayFix = data[1].reverse();
            setLunchWsLocation(arrayFix);
            console.log("home socket lunch location", lunchWsLocation);
          }
        }
        if (data[0] === "villageLocation") {
          if (data[1]?.length > 0) {
            let arrayFix = data[1].reverse();
            setVillageWsLocation(arrayFix);
            console.log("home socket village location", villageWsLocation);
          }
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
   
      setThemeId(e.target.id );
      dispatch(setThemeState(0));

  };

  const handleStart = async (e) => {
    let timing = 1500;
    if (pace === "slow") {
      timing = 10000;
    }

    setGame(true);

    if (journey === "home") {
      setTimeout(() => {
        setBackHomeLocation(backHome[step]);
        setStep(step + 1);
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
    setLunchWsLocation(lunchState.coordinates[0]);
    setVillageWsLocation(villageState.coordinates[0]);
    setBackHomeLocation(backHome[0]);
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

  const handleCharacter = (e) => {
    setCharacter(e.target.id);
  };

  const handleSlider = (e) => {
    setStep(e.target.value);
    setGame(false);
    if (journey === "home" || journey === "work") {
      setVillageWsLocation(villageState.coordinates[e.target.value]);
      setBackHomeLocation(backHome[e.target.value]);
    }
    if (journey === "lunch") {
      setLunchWsLocation(lunchState.coordinates[e.target.value]);
    }
  };

  return (
    <ThemeProvider theme={theme[themeId]}>
      <StyledHome>
        <div className="container-page">
          <div className="container-all-left">
            <div className="container-btn-square">
              {character === "olive" ? (
                <div
                  className="btn-square"
                  id="olive"
                  style={{ border: "10px solid #080808" }}
                  onClick={handleCharacter}
                  style={{ border: `10px solid ${theme[themeId].color4}` }}
                >
                  <h3 style={{ color: theme[themeId].colorSelect }}>Olive</h3>
                </div>
              ) : (
                <div
                  className="btn-square"
                  id="olive"
                  onClick={handleCharacter}
                >
                  <h3 id="olive" onClick={handleCharacter}>
                    Olive
                  </h3>
                </div>
              )}

              {character === "popeye" ? (
                <div
                  className="btn-square"
                  id="popeye"
                  onClick={handleCharacter}
                  style={{ border: `10px solid ${theme[themeId].color4}` }}
                >
                  <h3 style={{ color: theme[themeId].colorSelect }}>Popeye</h3>
                </div>
              ) : (
                <div
                  className="btn-square"
                  id="popeye"
                  onClick={handleCharacter}
                >
                  <h3 id="popeye" onClick={handleCharacter}>
                    Popeye
                  </h3>
                </div>
              )}
            </div>

            <div className="container-btn-square">
              {journey === "work" ? (
                <div
                  className="btn-square"
                  id="work"
                  onClick={handleJourney}
                  style={{ border: `10px solid ${theme[themeId].color4}` }}
                >
                  <h3 style={{ color: theme[themeId].colorSelect }}>
                    Village To Work
                  </h3>
                </div>
              ) : (
                <div className="btn-square" id="work" onClick={handleJourney}>
                  <h3 id="work" onClick={handleJourney}>
                    Village To Work
                  </h3>
                </div>
              )}

              {journey === "lunch" ? (
                <div
                  className="btn-square"
                  id="lunch"
                  onClick={handleJourney}
                  style={{ border: `10px solid ${theme[themeId].color4}` }}
                >
                  <h3 style={{ color: theme[themeId].colorSelect }}>
                    Going for Lunch
                  </h3>
                </div>
              ) : (
                <div className="btn-square" id="lunch" onClick={handleJourney}>
                  <h3 id="lunch" onClick={handleJourney}>
                    Going for Lunch
                  </h3>
                </div>
              )}

              {journey === "home" ? (
                <div
                  className="btn-square"
                  id="home"
                  onClick={handleJourney}
                  style={{ border: `10px solid ${theme[themeId].color4}` }}
                >
                  <h3 style={{ color: theme[themeId].colorSelect }}>
                    Back Home
                  </h3>
                </div>
              ) : (
                <div className="btn-square" id="home" onClick={handleJourney}>
                  <h3 id="home" onClick={handleJourney}>
                    Back Home
                  </h3>
                </div>
              )}
            </div>

            <div className="container-btn-square">
              {pace === "fast" ? (
                <div
                  className="btn-square"
                  id="fast"
                  onClick={handlePace}
                  style={{ border: `10px solid ${theme[themeId].color4}` }}
                >
                  <h3 style={{ color: theme[themeId].colorSelect }}>1.5 sec</h3>
                </div>
              ) : (
                <div className="btn-square" id="fast" onClick={handlePace}>
                  <h3 id="fast" onClick={handlePace}>
                    1.5 sec
                  </h3>
                </div>
              )}

              {pace === "slow" ? (
                <div
                  className="btn-square"
                  id="slow"
                  onClick={handlePace}
                  style={{ border: `10px solid ${theme[themeId].color4}`}}
                >
                  <h3 style={{ color: theme[themeId].colorSelect }}>10 sec</h3>
                </div>
              ) : (
                <div className="btn-square" id="slow" onClick={handlePace}>
                  <h3 id="slow" onClick={handlePace}>
                    10 sec
                  </h3>
                </div>
              )}
            </div>
            <div className="container-buttons">
              {theme && theme.map((o,i)=>
              <div
              className="btn-banner"
              id={i}
              onClick={(e) => handleTheme(e)}
            >
              Theme {i+1}
            </div>
              )}

         
              <ProgressBar
                handleSlider={handleSlider}
                step={step}
                journey={journey}
                game={game}
                pace={pace}
              />
            </div>
            {lunchWsLocation.length > 0 && villageWsLocation.length > 0 ? (
              <div>
                <MapComponent
                  lunch={lunchWsLocation}
                  village={villageWsLocation}
                  step={step}
                  journey={journey}
                  backHome={backHomeLocation}
                  game={game}
                  handleRestart={handleRestart}
                  handleStart={handleStart}
                  handleStop={handleStop}
                  theme={theme}
                  pace={pace}
                  character={character}
                />
              </div>
            ) : (
              <div>loading ...</div>
            )}
          </div>
          <div className="container-all-right">
            <Side
              handleSlider={handleSlider}
              step={step}
              journey={journey}
              character={character}
            />
          </div>
        </div>
      </StyledHome>
    </ThemeProvider>
  );
};
export default Home;
