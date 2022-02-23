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
            <div className="btn-landing" name="theme1" style={{ fontSize:"30px"}}>
              start the journey
            </div>
          </Link>
        </div>
      </StyledLanding>
    </ThemeProvider>
  );
};
export default LandingPage;
