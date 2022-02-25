import { useEffect, useState } from "react";

const Character = ({ character }) => {

  const [iconCharacter, setIconCharacter] = useState(null);

  useEffect(()=>{
    if(character ==="popeye")setIconCharacter("https://cdn.filestackcontent.com/8RjwAhARSeGhRLdcxsGm")
    if(character ==="olive")setIconCharacter("https://cdn.filestackcontent.com/hvxOktvyRf6ik74Di6kY")
    if(character ==="corto")setIconCharacter("https://cdn.filestackcontent.com/2IPGbGK4TQ2IyHr1QC7t")
  },[character])

  

  return (
      <div>
          <div>
{character && 
          <img src={iconCharacter} alt=" " width="500" height="600"/>
}
          </div>
      </div>
  );
};

export default Character;
