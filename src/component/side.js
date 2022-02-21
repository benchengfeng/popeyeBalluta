import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StyledProgressBar from "./styleProgressBar";

const Side = ({ handleSlider, position, journey, step }) => {
  const lunchState = useSelector((lunchState) => lunchState.LunchState);
  const villageState = useSelector((villageState) => villageState.VillageState);
  const [length, setLength] = useState(0);
  

  useEffect(() => {
    if (lunchState && villageState) {
      if (journey === "home" || journey === "work")
        setLength(villageState?.coordinates.length);
      if (journey === "lunch") setLength(lunchState?.coordinates.length);
    }
  }, [lunchState, villageState, journey]);

  

  return (
      <div>
          Side
      </div>
  );
};

export default Side;
