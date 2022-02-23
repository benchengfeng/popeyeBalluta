import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MapComponent from "../../component/map/map";
import MenuList from "../../component/menuList/menuList";
import Character from "../../component/character/character";
import { setThemeState } from "../../redux/slices/themeSlice";
import { theme } from "../../util/theme";
import StyledHome from "./StyledHome";
import { IoIosArrowBack } from 'react-icons/io';

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

  const mapRef = useRef(null);
  const executeScroll = () => mapRef.current.scrollIntoView();

  // setting data received from server webSocket //
  console.log('step',step)
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
            // console.log("home socket lunch location", lunchWsLocation);
          }
        }
        if (data[0] === "villageLocation") {
          if (data[1]?.length > 0) {
            let arrayFix = data[1].reverse();
            setVillageWsLocation(arrayFix);
            // console.log("home socket village location", villageWsLocation);
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
      // console.log("lunchState[0]", lunchState.coordinates[0]);
    }
  }, [lunchState]);

  useEffect(() => {
    if (villageState?.coordinates.length > 0) {
      setVillage(villageState);
      // console.log("villageState[0]", villageState.coordinates[0]);
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
      // console.log("back home ", backHome);
    }
  }, [villageState]);

  useEffect(() => {
    if (themeState) {
      setThemeId(themeState.activeId);
    }
  }, [themeState]);

  useEffect(() => {
    if (character ==="corto" ) {
      setThemeId(1);
      dispatch(setThemeState(1));
    }
    if (character ==="popeye" ) {
      setThemeId(4);
      dispatch(setThemeState(4));
    }
    if (character ==="olive" ) {
      setThemeId(2);
      dispatch(setThemeState(2));
    }
  }, [character]);

  const handleTheme = (e) => {
    setThemeId(e.target.id);
    dispatch(setThemeState(e.target.id));
  };

  const handleStart = async (e) => {
    let stepInt = parseInt(step)
    let timing = 1500;
    if (pace === "slow") {
      timing = 10000;
    }

    setGame(true);

    if (journey === "home") {
      setTimeout(() => {
        setBackHomeLocation(backHome[stepInt]);
        setStep(stepInt + 1);
      }, timing);
    }

    if (village?.coordinates) {
      setTimeout(() => {
        connectionSocket.send(stepInt);
        setStep(stepInt + 1);
        console.log("step home ", stepInt);
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
        <div className="main-container">
        <div className="container-page">
        <div className="btn-map">
        <Link to="/" style={{ textDecoration: "none" }}>
                <h3><IoIosArrowBack/>Back</h3>
            </Link>
            </div>
          <div className="container-all-left">
            <MenuList
              themeId={themeId}
              character={character}
              step={step}
              game={game}
              pace={pace}
              journey={journey}
              handleCharacter={handleCharacter}
              handleJourney={handleJourney}
              handlePace={handlePace}
            />
             {(character && pace && journey )? (
              <div
                className="btn-banner"
                style={{  background:theme[themeId].color3, fontSize:"30px"}}
                onClick={executeScroll}
              >
                let's go!
              </div>
            ):(              <div
              className="btn-banner"
              style={{ background:"#000" }}
            >
              Set your Trip
            </div>)}
            <div className="container-buttons">
              {theme &&
                theme.map((o, i) => (
                  <div
                    className="btn-theme"
                    id={i}
                    onClick={(e) => handleTheme(e)}
                  >
                    Theme {i + 1}
                  </div>
                ))}
            </div>
          </div>
          <div className="container-all-right">
            <Character
              handleSlider={handleSlider}
              step={step}
              journey={journey}
              character={character}
            />
          </div>
        </div>
        {lunchWsLocation.length > 0 && villageWsLocation.length > 0 ? (
              <div ref={mapRef} style={{paddingTop:"10px"}}>
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
                  handleSlider={handleSlider}
                />
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
