import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StyledProgressBar from "./styleProgressBar";
import { theme} from "../../util/theme"

const ProgressBar = ({ handleSlider, position, journey, step, game, pace}) => {
  const themeState = useSelector((themeState) => themeState.ThemeState);
  const lunchState = useSelector((lunchState) => lunchState.LunchState);
  const villageState = useSelector((villageState) => villageState.VillageState);
  const [length, setLength] = useState(0);
  const [clock, setClock] = useState(null);
  const [tripClock, setTripClock] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [themeId, setThemeId] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       var date = new Date();
//       if (date) var time = getTime(date);
//       setClock(time);
//     }, 1000);
//   }, [journey]);


useEffect(() => {
  if (themeState) {
    setThemeId(themeState.activeId);
  }
}, []);

  useEffect(() => {
    if (!startDate && game) {
      var date = new Date();
      if (date) {
        setStartDate(date);
        var time = getTime(date);
      }
      setTripClock(time);
    } else if (!game && step === 0) {
      setTripClock(null);
      setStartDate(null);
    }
  }, [step]);

  useEffect(() => {
      let x = null
      if (pace === "fast") x = 1500;
      if (pace === "slow") x = 10000;
    if (startDate) {
       let timer= startDate.getTime()
       let count = (timer + (step*x))
       let newTimer= new Date (count)
       let newCount = getTime(newTimer)
      setTripClock(newCount);
    } 
  }, [step]);

  function getTime(date) {
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hour = date.getHours();
    var time = hour + ":" + minutes + ":" + seconds;
    return time;
  }

  useEffect(() => {
    if (lunchState && villageState) {
      if (journey === "home" || journey === "work")
        setLength(villageState?.coordinates.length);
      if (journey === "lunch") setLength(lunchState?.coordinates.length);
    }
  }, [lunchState, villageState, journey]);

  return (
    <StyledProgressBar>
      <div>
        <div class="btn-banner-timeline">
          <span>trip clock {tripClock}</span>
          {/* <span>{clock}</span> */}
          <input
            type="range"
            min={0}
            max={length - 1}
            value={step}
            onChange={handleSlider}
            className="slider"
          />
        </div>
      </div>
    </StyledProgressBar>
  );
};

export default ProgressBar;
