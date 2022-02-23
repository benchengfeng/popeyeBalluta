import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StyledLanding from "./StyledLanding";
import { Link } from "react-router-dom";
import { theme } from "../../util/theme";
import { ThemeProvider } from "styled-components";
import styled, { css } from "styled-components";
import DecorationLanding from "./decoration";


const LandingPage = () => {

  return (
    <ThemeProvider theme={theme[0]}>
      <StyledLanding>
        <div className="container-all">
        <DecorationLanding />
          <Link to="/home" style={{ textDecoration: "none"}}>
            <div className="btn-landing" name="theme1">
              Start journey
            </div>
          </Link>
          <div className="container-characters">
          <img src="https://cdn.filestackcontent.com/RNyg3rpCTNOKL3zNPym9" />
          <img src="https://cdn.filestackcontent.com/hvxOktvyRf6ik74Di6kY" />
        
          
          </div>
        </div>
        <img src="https://cdn.filestackcontent.com/OfzCHSW2T6yVoxuPkcxU" />
      </StyledLanding>
    </ThemeProvider>
  );
};
export default LandingPage;
