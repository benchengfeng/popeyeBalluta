import styled, { css } from 'styled-components'
const StyledMenuList = styled.form`
  display: flex;
  justify-content: start;
  position: relative;
  background:${props => props.theme.color1};


  .container-page{
    display: flex;
    flex-direction: column !important;
  }


  .container-btn-square{
    width: 100%;
    background: ${props => props.theme.color2};
    border: 2px solid #080808;
    border-radius: 20px;
    padding-top: 20px;
    color:${props => props.theme.color2};
    align-content:center;
    min-height:150px;
    max-width: 1056px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
  }
  .container-btn-square-column{
    width: 100%;
    background: ${props => props.theme.color2};
    padding-top: 20px;
    color:${props => props.theme.color2};
    align-content:center;
    min-height:150px;
    max-width: 1056px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items : center;
    
  }

.container-btn-square:hover {
  box-shadow: 0 0px 10px rgba(112,112,112,0.5);
  transition: 400ms;
  border :10px solid #080808;
}

.btn-square:hover{
  box-shadow: 0 0px 10px rgba(112,112,112,0.5);
  transition: 400ms;
  border :10px solid #080808;
}

.btn-square{
  position: relative;
  border: 2px solid #080808;
  color : ${props => props.theme.textColor}!important;
  width: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.color3};
  border-radius: 20px;
  height: 48px;
  padding: 12px;
  margin: 10px;
  cursor: move;
  margin-bottom: 24px;
  font-size: 16px;
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

    `}

  

        @media screen and (max-width: 750px) {
 
    .container-btn-square{
     
    
      align-content:center;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      
    }
  }



  }
`

export default StyledMenuList