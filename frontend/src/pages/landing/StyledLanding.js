import styled, { css } from 'styled-components'
import { keyframes } from "styled-components";

const StyledLanding = styled.form`
display: flex;
justify-content: sctart;
padding: 48px 72px 48px 48px;
position: 100%;
min-height:90vh;
background:${props => props.theme.color1};

div{
  animation: turnOnBg 1000ms linear forwards;
}

@keyframes turnOnBg{
  0% { opacity: 0;}
  25% { opacity: 0.25;}
  75% { opacity: 0.75;}
  100% { opacity: 1;}    
}

.container-characters{
  width: 100%;
  max-width: 1056px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

  .container-all {
    width: 100%;
    max-width: 1056px;
    display: flex;
    flex-direction: column;
  }

  .text-animation{
    position: relative;
    color : white;
    font-size:20px;
    border: 2px solid #080808;
    background: green;
    display: flex;
    align-items: start;
    justify-content: start;
    border-radius: 20px;
    height: 200px;
    padding: 42px;
    cursor: pointer;
    margin-bottom: 24px;
  }


  .btn-landing:hover {
    box-shadow: 0 0px 10px rgba(112,112,112,0.5);
    transition: 400ms;
    border :20px solid #080808;
  }

  .btn-landing{
    position: relative;
    color : white;
    font-size:30px;
    border: 2px solid #080808;
    background: #be230f;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    height: 48px;
    padding: 12px;
    cursor: pointer;
    margin-bottom: 24px;
    font-size: 40px;
  }




  ${props => props.animate === true && ` 
  div{
    animation: fadingBg 1000ms linear forwards !important;
  }

  }` }

  @keyframes fadingBg{
    0% { opacity: 1;}
    25% { opacity: 0.75;}
    75% { opacity: 0.25;}
    100% { opacity: 0;}    
  }



  


 img{
    width:500px;
    height:600px;
  }

  /* REPONSIVE CONTAINER */

  ${({ width }) =>
    width <= 480 &&
    css`
      .container-all {
        padding-bottom: 72px;
      }
    `}
  
    
    @media only screen  and (max-width:750px) {
      .responsive-style{
         display:none;
      }
      .btn-landing{
        font-size: 20px;
      }

      img{
        width:100px;
        height:300px;
      }
      .container-characters{
        display: flex;
        flex-direction: column;
      }

        @media screen and (max-width: 1100px) {
    padding: 0 24px 24px 24px;
  }

  }
`

export default StyledLanding


