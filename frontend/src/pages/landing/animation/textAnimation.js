import React from "react"
import styled, { keyframes } from "styled-components"
import animationText from './animationText.json';

const  TextAnimation = () =>
{
    const jsonText=animationText
    console.log(jsonText)
    const arrayText= jsonText.split(' ');
  return (
  <Wrapper>

  {arrayText.map((letter, index) => (
    <span key={index}>{letter } &nbsp;</span>
  ))}
</Wrapper>
  )
}
export default TextAnimation;



const animation = keyframes`
  0% { opacity: 0; transform: translateY(-100px); }
  30% { opacity: 0; transform: translateY(-100px); }
  40% { opacity: 1; transform: translateY(0px); }
  75% { opacity: 1; transform: translateX(0px); }
  100% { opacity: 0; transform: translateX(100px); }
`


// const Wrapper = styled.span`
//   animation-name: ${animation};
//   animation-duration: 6s;
//   animation-fill-mode: forwards;
//   animation-iteration-count: infinite;
// `

// const animation = keyframes`
//   0% { opacity: 0; transform: translateY(-100px) skewX(10deg) skewY(10deg) rotateZ(30deg); filter: blur(10px); }
//   25% { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(0px); }
//   75% { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(1px); }
//   100% { opacity: 0; transform: translateY(-100px) skewX(10deg) skewY(10deg) rotateZ(30deg); filter: blur(10px); }
// `



const Wrapper = styled.span`
  display: inline-block;

  span {
        opacity: 0;
        display: inline-block;
        animation-name: ${animation};
        animation-duration: 10s;
        animation-timing-function: linear;


      }
      span:nth-child(1) {
            animation-delay: 0.1s;
          }
  span:nth-child(2) {
        animation-delay: 0.2s;
      }
      span:nth-child(3) {
            animation-delay: 0.3s;
          }
          span:nth-child(4) {
                animation-delay: 0.4s;
              }
              span:nth-child(5) {
                    animation-delay: 0.5s;
                  }
                  span:nth-child(6) {
                    animation-delay: 0.6s;
                  }
                  span:nth-child(7) {
                    animation-delay: 0.7s;
                  }
                  span:nth-child(8) {
                    animation-delay: 0.8s;
                  }
                  span:nth-child(9) {
                    animation-delay: 0.9s;
                  }
                  span:nth-child(10) {
                    animation-delay: 0.10s;
                  }
                  `
                