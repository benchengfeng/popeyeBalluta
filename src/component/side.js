import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StyledProgressBar from "./styleProgressBar";

const Side = ({ handleSlider, position, journey, step,character }) => {
  const lunchState = useSelector((lunchState) => lunchState.LunchState);
  const villageState = useSelector((villageState) => villageState.VillageState);
  const [length, setLength] = useState(0);
  const [iconCharacter, setIconCharacter] = useState(null);

  useEffect(() => {
    if (lunchState && villageState) {
      if (journey === "home" || journey === "work")
        setLength(villageState?.coordinates.length);
      if (journey === "lunch") setLength(lunchState?.coordinates.length);
    }
  }, [lunchState, villageState, journey]);

  useEffect(()=>{
    if(character ==="popeye")setIconCharacter("https://cdn.filestackcontent.com/8RjwAhARSeGhRLdcxsGm")
    if(character ==="olive")setIconCharacter("https://cdn.filestackcontent.com/hvxOktvyRf6ik74Di6kY")
  },[character])

  

  return (
      <div>
          <div>
{character && 
          <img src={iconCharacter} width="500" height="600"/>
}
          </div>
      </div>
  );
};

export default Side;
