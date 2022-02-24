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

  {arrayText.map((word, index) => (
    <span key={index}>{word } &nbsp;</span>
  ))}
</Wrapper>
  )
}
export default TextAnimation;



const animation = keyframes`
  0% { opacity: 0; transform: translateY(-100px); }
  10% { opacity: 0; transform: translateY(-100px); }
  20% { opacity: 1; transform: translateY(0px); }
  90% { opacity: 1; transform: translateX(0px); }
  100% { opacity: 0; }
`


const Wrapper = styled.span`
  display: inline-block;

  span {
        opacity: 0;
        display: inline-block;
        animation-name: ${animation};
        animation-duration: 30s;
        animation-timing-function: linear;


      }
      span:nth-child(1) {
            animation-delay: 0.1s;
          }
  span:nth-child(2) {
        animation-delay: 0.3s;
      }
      span:nth-child(3) {
            animation-delay: 0.5s;
          }
          span:nth-child(4) {
                animation-delay: 0.7s;
              }
              span:nth-child(5) {
                    animation-delay: 0.9s;
                  }
                  span:nth-child(6) {
                    animation-delay: 1.1s;
                  }
                  span:nth-child(7) {
                    animation-delay: 1.3s;
                  }
                  span:nth-child(8) {
                    animation-delay: 1.5s;
                  }
                  span:nth-child(9) {
                    animation-delay: 1.7s;
                  }
                  span:nth-child(10) {
                    animation-delay: 1.9s;
                  }
                  `
                
                  