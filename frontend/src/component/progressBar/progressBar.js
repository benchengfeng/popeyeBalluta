import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StyledProgressBar from "./styleProgressBar";
import { theme} from "../../util/theme"

const ProgressBar = ({ handleSlider, journey, step, game, pace}) => {
  const lunchState = useSelector((lunchState) => lunchState.LunchState);
  const villageState = useSelector((villageState) => villageState.VillageState);
  const [length, setLength] = useState(0);
  const [tripClock, setTripClock] = useState(null);
  const [startDate, setStartDate] = useState(null);



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
        <div className="btn-banner-timeline" data-testId="progressBar-1">
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
