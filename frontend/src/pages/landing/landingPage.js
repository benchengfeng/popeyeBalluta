import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StyledLanding from "./StyledLanding";
import { Link } from "react-router-dom";
import { theme } from "../../util/theme";
import { ThemeProvider } from "styled-components";
import styled, { css } from "styled-components";
import DecorationLanding from "./decoration";
import TextAnimation from "./animation/textAnimation";
import { keyframes } from "styled-components";

const LandingPage = () => {
  const [animate, setAnimate] = useState(false);
  const handleStart = () => {
    setTimeout(()=>{
      
      const urlWindow = window.location.href;
      window.location.href=(urlWindow+'home')

    },1000)
    setAnimate(true)
  };

  return (
    <ThemeProvider theme={theme[0]}>
      <StyledLanding animate={animate}>

        <div className="container-all">
          <DecorationLanding/>
            <div className="btn-landing" name="theme1" onClick={handleStart} >
              {animate ? (
                <Wrapper>
                  <span>Start journey</span>
                </Wrapper>
              ) : (
                <span>Start journey</span>
              )}
            </div>
          <div className="text-animation">
            <TextAnimation />
          </div>
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

const fadingBg = keyframes`
  0% { opacity: 1;}
  25% { opacity: 0.75;}
  75% { opacity: 0.25;}
  100% { opacity: 0;}
`

const animation = keyframes`
  0% { opacity: 1; transform: translateY(0px); }
  10% { opacity: 1; transform: translateY(-10px); }
  75% { opacity: 1; transform: translateY(1px); }
  100% { opacity: 1; transform: translateY(10px); }
`;

const Wrapper = styled.span`
  display: inline-block;

  span {
    opacity: 0;
    display: inline-block;
    animation-name: ${animation};
    animation-duration: 1s;
    animation-timing-function: linear;
  }
  span:nth-child(1) {
    animation-delay: 0.1s;
  }
`;

const WrapperBg = styled.span`
  display: inline-block;

  div {
    opacity: 0;
    display: inline-block;
    animation-name: ${fadingBg};
    animation-duration: 2s;
    animation-timing-function: linear;
  }
  div:nth-child(1) {
    animation-delay: 0.1s;
  }
`;
