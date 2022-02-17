import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import MapComponent from "../../component/map";
import StyledHome from "./StyledHome";

const Home = () => {
  const lunchState = useSelector((lunchState) => lunchState.LunchState);
  const [themeApp, setThemeApp] = useState([
    { theme1: { color1: "#FFF", color2: "#FFF", color3: "#FFF" } },
    { theme2: { color1: "#000", color2: "#000", color3: "#000" } },
    { theme3: { color1: "red", color2: "red", color3: "yellow" } },
  ]);
  const [themeId, setThemeId] = useState(0);
  const [lunch, setLunch] = useState([]);
  const [village, setVillage] = useState([]);
  

  const handleTheme = (e) => {

    if (e.target.name==="theme1"){
setThemeId(0)
    }
    else if (e.target.name==="theme1"){
      setThemeId(1)
    }
    else {
      setThemeId(2)
    }

  };

  return (
    <div className="container-all">
      <StyledHome>
        <div>
          <h1>Home</h1>
          <div className="btn-upload" name ="theme1" onClick={(e)=>handleTheme(e)}>Theme 1</div>
          <div className="btn-upload" name ="theme2" onClick={(e)=>handleTheme(e)}>Theme 2</div>
          <div className="btn-upload" name ="theme3" onClick={(e)=>handleTheme(e)}>Theme 3</div>
        </div>
        <div>
          <ThemeProvider theme={themeApp[themeId]}>
            <MapComponent />
          </ThemeProvider>
        </div>
      </StyledHome>
    </div>
  );
};
export default Home;
