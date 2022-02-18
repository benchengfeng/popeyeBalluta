import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StyledLanding from "./StyledLanding";
import {Link}from "react-router-dom";

const LandingPage = () => {
  const lunchState = useSelector((lunchState) => lunchState.LunchState);

  const [lunch, setLunch] = useState([]);
  const [village, setVillage] = useState([]);


  return (
    <StyledLanding> 
    <div className="container-all">

<Link to="/home" style={{textDecoration:'none'}}>

<div className="btn-landing" name ="theme1">start the journey</div>
</Link>
    </div>
    </StyledLanding>

  );
};
export default LandingPage;
