import styled, { css } from 'styled-components'
const StyledHome = styled.form`
  display: flex;
  justify-content: start;
  padding: 48px 72px 48px 48px;
  position: relative;
  background:${props => props.theme.color1};


  .main-container{
    width: 100%;
  }
  
  .container-page{
    display: flex;
    flex-direction: row;
  }

  

  .btn-banner{
    position: relative;
    color : ${props => props.theme.textColor};
    border: 2px solid #080808;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background:${props => props.theme.color1};
    height: 48px;
    padding: 12px;
    cursor: move;
    font-size: 16px;
}
.btn-banner-timeline{
  position: relative;
  color : ${props => props.theme.textColor};
  border: 2px solid #080808;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background:${props => props.theme.color1};
  height: 48px;
  padding: 12px;
  cursor: move;
  font-size: 16px;
}
.btn-theme{
  position: relative;
  color : ${props => props.theme.textColor};
  border: 2px solid #080808;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background:${props => props.theme.color1};
  height: 48px;
  padding: 12px;
  cursor: move;
  font-size: 16px;
}

  .btn-banner:hover {
    box-shadow: 0 0px 10px rgba(112,112,112,0.5);
    transition: 400ms;
    border :10px solid #080808;
}
.btn-theme:hover {
  box-shadow: 0 0px 10px rgba(112,112,112,0.5);
  transition: 400ms;
  border :10px solid #080808;
}


.container-buttons{
  width: 100%;
  background: ${props => props.theme.color2};
  border: 2px solid #080808;
  border-radius: 20px;
  padding-top: 20px;
  align-content:center;
  max-width: 1056px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

  .container-all-left {
    width: 60%;
    max-width: 1056px;
    display: flex;
    flex-direction: column;
  }

  .container-all-right {
    width: 40%;
    max-width: 1056px;
    display: flex;
    flex-direction: column;
  }


  .separator-vertical{
    border-right: 10px solid #080808;
    border-radius: 20px;
    padding:10px;
    background:${props => props.theme.color5};
  }
  .separator-horizental{
    border-bottom: 2px solid #080808;
    border-radius: 20px;
  }


  /* REPONSIVE CONTAINER */
  ${({ width }) =>
    width <= 560 &&
    css`
      padding: 0 24px 24px 24px;
      input {
        font-size: 12px;
      }

    `}
  

        @media screen and (max-width: 750px) {
    padding: 0 24px 24px 24px;
    
  .btn-theme{
    height: 15px;
    padding: 10px;
    cursor: move;
    font-size: 12px;
}
.btn-banner{

  width:240px;
  padding: 10px;
  cursor: move;
  font-size: 12px;
}
.container-buttons{
display:none;
}
    

  }
        @media screen and (max-width: 380px) {

  }
`

export default StyledHome