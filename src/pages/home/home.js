import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MapComponent from "../../component/map";
import { theme } from "../../util/theme";
import StyledHome from "./StyledHome";



// const themeApp = [
//   {
//     color1:
//       "background: linear-gradient(90deg, rgba(161,45,45,1) 0%, rgba(8,0,40,1) 39%, rgba(12,58,68,1) 68%, rgba(195,17,17,1) 100%);",
//     color2:
//       "linear-gradient(90deg, rgba(145,139,139,1) 5%, rgba(8,0,40,1) 89%)",
//     color3:
//       "linear-gradient(90deg, rgba(227,227,227,1) 5%, rgba(122,107,16,1) 74%);  ",
//   },
//   { color1: "#000", color2: "#000", color3: "#000" },
//   { color1: "FFF", color2: "FFF", color3: "FFF" },
// ];

const Home = () => {
  const lunchState = useSelector((lunchState) => lunchState.LunchState);
  const villageState = useSelector((villageState) => villageState.VillageState);

  const [themeId, setThemeId] = useState(0);
  const [lunch, setLunch] = useState([]);
  const [village, setVillage] = useState([]);

  useEffect(() => {
    if (lunchState) setLunch(lunchState);
  }, [lunchState]);

  useEffect(() => {
    if (villageState) setVillage(villageState);
    console.log("village", villageState);
  }, [villageState]);

  const handleTheme = (e) => {
    if (e.target.name === "theme1") {
      setThemeId(0);
    } else if (e.target.name === "theme2") {
      setThemeId(1);
    } else {
      setThemeId(2);
    }
  };

  return (
    <ThemeProvider theme={theme[themeId]}>
      <StyledHome>
        <div className="container-all" >
          <div className="container-buttons">
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="btn-square" style={{ width: "40px" }}>
                Back
              </div>
            </Link>
            <div className="btn-square" style={{ width: "40px" }}>
              start
            </div>
          </div>
          <div className="">
            <h1>Home</h1>
            <div
              className="btn-banner"
              name="theme1"
              onClick={(e) => handleTheme(e)}
            >
              Theme 1
            </div>
            <div
              className="btn-banner"
              name="theme2"
              onClick={(e) => handleTheme(e)}
            >
              Theme 2
            </div>
            <div
              className="btn-banner"
              name="theme3"
              onClick={(e) => handleTheme(e)}
            >
              Theme 3
            </div>
            <div
              className="btn-banner"
              name="theme4"
              onClick={(e) => handleTheme(e)}
            >
              full Screen
            </div>
            <div
              className="btn-banner"
              name="theme5"
              onClick={(e) => handleTheme(e)}
            ></div>
                        <div
              className="btn-banner"
              name="theme4"
              onClick={(e) => handleTheme(e)}
            >
              full Screen
            </div>
            <div
              className="btn-banner"
              name="theme5"
              onClick={(e) => handleTheme(e)}
            ></div>
          </div>
          <div>
            <MapComponent lunch={lunch} village={village} />
          </div>
        </div>
      </StyledHome>
    </ThemeProvider>
  );
};
export default Home;
