import styled, { css } from 'styled-components'

const StyledMap = styled.div`
  width: 100%;
  background: ${props => props.theme.color1};
  box-shadow: 0px 1px 16px 1px rgba(206, 206, 206, 0.36);
  border-radius: 16px;
  padding: 20px 20px;
  position: relative;
  display: flex;
  flex-direction: column;

  .container-btn-map{
      display:flex;
  }

  .btn-map{
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

  .btn-map:hover{
    box-shadow: 30px 10px 0px rgba(112,11,11,112);
    transition: 400ms;
    border :10px solid #080808;
  }
  

      /* REPONSIVE CONTAINER */

      ${({ widthSection }) => widthSection <= 1100 && css`
          padding: 24px;
      `}
      
      ${({ widthSection }) => widthSection <= 880 && css`
          width: 100% !important;
      `}

      @media screen and (max-width: 450px) {
        padding: 12px;
      }
`

export default StyledMap