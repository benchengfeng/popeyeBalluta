import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StyledMenuList from "./styledMenuList";
import { theme } from "../../util/theme";
const MenuList = ({ themeId, character, step, game, pace, journey,handleCharacter, handleJourney, handlePace}) => {
  const lunchState = useSelector((lunchState) => lunchState.LunchState);
  const villageState = useSelector((villageState) => villageState.VillageState);
  const [length, setLength] = useState(0);
  const [clock, setClock] = useState(null);
  const [tripClock, setTripClock] = useState(null);
  const [startDate, setStartDate] = useState(null);

  useEffect(() => {
    if (lunchState && villageState) {
      if (journey === "home" || journey === "work")
        setLength(villageState?.coordinates.length);
      if (journey === "lunch") setLength(lunchState?.coordinates.length);
    }
  }, [lunchState, villageState, journey]);

  return (
    <StyledMenuList>
      <div className="container-page">
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
            <div className="separator-vertical"></div>

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
            <div className="separator-vertical"></div>

            {journey === "home" ? (
              <div
                className="btn-square"
                id="home"
                onClick={handleJourney}
                style={{ border: `10px solid ${theme[themeId].color4}` }}
              >
                <h3 style={{ color: theme[themeId].colorSelect }}>Back Home</h3>
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
          <div className="container-btn-square-column">
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
              <div className="btn-square" id="olive" onClick={handleCharacter}>
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
              <div className="btn-square" id="popeye" onClick={handleCharacter}>
                <h3 id="popeye" onClick={handleCharacter}>
                  Popeye
                </h3>
              </div>
            )}
          </div>
<div className="separator-vertical"></div>
          <div className="container-btn-square-column">
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
                style={{ border: `10px solid ${theme[themeId].color4}` }}
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
          </div>
        </div>
    </StyledMenuList>
  );
};

export default MenuList;