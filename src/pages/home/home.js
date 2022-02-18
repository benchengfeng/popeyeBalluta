import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MapComponent from "../../component/map";
import { setThemeState } from "../../redux/slices/themeSlice";
import { theme } from "../../util/theme";
import StyledHome from "./StyledHome";


const Home = () => {

  const dispatch = useDispatch()

  const themeState = useSelector((themeState) => themeState.ThemeState);
  const lunchState = useSelector((lunchState) => lunchState.LunchState);
  const villageState = useSelector((villageState) => villageState.VillageState);

  const [themeId, setThemeId] = useState(0);
  const [lunch, setLunch] = useState();
  const [village, setVillage] = useState();

  console.log("lucnh from home",lunch);

  useEffect(() => {
    if (lunchState) {setLunch(lunchState);
    console.log("lucnhstate from home",lunchState);
    }
  }, [lunchState]);

  useEffect(() => {
    if (villageState) {setVillage(villageState);
    console.log("village state from home",villageState);
    }
  }, [villageState]);


  useEffect(() => {
  if (themeState){
    setThemeId(themeState.activeId)
    console.log('theme state',themeState.activeId)
  }
  }, []);
  

  

  const handleTheme = (e) => {
    if (e.target.id === "theme1") {
      setThemeId(0);
      dispatch(setThemeState(0))
    } else if (e.target.id === "theme2") {
      setThemeId(1);
      dispatch(setThemeState(1))
    } else if (e.target.id === "theme3") {
      setThemeId(2);
      dispatch(setThemeState(2))
    }
  };

  return (
    <ThemeProvider theme={theme[themeId]}>
      <StyledHome>
        <div className="container-all" >
          <div className="container-buttons">
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="btn-square" >
                Back
              </div>
            </Link>
            <div className="btn-square">
              start
            </div>
          </div>
          <div className="">
            <h1>Home</h1>
            <div
              className="btn-banner"
              id = "theme1"
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
            <div
              className="btn-banner"
              id="theme3"
              onClick={(e) => handleTheme(e)}
            >
              Theme 3
            </div>
            <div
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
            </div>
          </div>
          {(lunch && village ) ? (          <div>  
            <MapComponent  lunch={lunch} village={village}/>
          </div>):(<div>loading ...</div>)}

        </div>
      </StyledHome>
    </ThemeProvider>
  );
};
export default Home;
