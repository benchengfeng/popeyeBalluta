import styled, { css } from 'styled-components'
const StyledHome = styled.form`
  display: flex;
  justify-content: start;
  padding: 48px 72px 48px 48px;
  position: relative;
  background:${props => props.theme.color1};


  .container-page{
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .wrapper-input-options {
    margin-bottom: 6px;
    position: relative;
    svg {
      position: absolute;
      right: 6px;
      cursor: move;
      height: 20px;
      top: 8px;
      width: 20px;
    }
  }

  button:hover{
    cursor:move;
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

  .btn-landing{
    position: relative;
    text-color : white;
    border: 2px solid #080808;
    background: linear-gradient(90deg, rgba(161,45,45,1) 0%, rgba(8,0,40,1) 39%, rgba(12,58,68,1) 68%, rgba(195,17,17,1) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    height: 48px;
    padding: 12px;
    cursor: move;
    margin-bottom: 24px;
    font-size: 16px;
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

  .btn-banner:hover {
    box-shadow: 0 0px 10px rgba(112,112,112,0.5);
    transition: 400ms;
    border :10px solid #080808;
}
.btn-landing:hover {
  box-shadow: 0 0px 10px rgba(112,112,112,0.5);
  transition: 400ms;
  border :10px solid #080808;
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

  .container-all {
    width: 100%;
    max-width: 1056px;
    display: flex;
    flex-direction: column;
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

  .container-btn {
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }

  #btn-add-link {
    position: relative;
    width: 216px;
    height: 48px;
    background: ${props => props.theme.color3};
    box-shadow: 0px 1px 16px 1px rgba(206, 206, 206, 0.36);
    border-radius: 30px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${props => (props.theme.color3)};
    outline: none;
    cursor: move;
    margin-right: 12px;

    &:focus {
      outline: none;
    }
    &:hover {
      opacity: 0.9;
    }
  }


  /* REPONSIVE CONTAINER */
  ${({ width }) =>
    width <= 560 &&
    css`
      padding: 0 24px 24px 24px;
      input {
        font-size: 12px;
      }
      .input-field-wrapper {
        flex: 1;
        max-width: 100%;
      }
      .container-btn span {
        margin-bottom: 24px;
      }
      .container-main {
        padding: 12px 0 12px 12px !important;
      }

    `}
  ${({ width }) =>
    width <= 480 &&
    css`
      .container-all {
        padding-bottom: 72px;
      }
    `}
  

        @media screen and (max-width: 1100px) {
    padding: 0 24px 24px 24px;
  }
        @media screen and (max-width: 380px) {
          .input-field-wrapper {
            margin: 0 !important;
          min-width: 100% !important;
          }
          .input-field-wrapper  .input-field input {
          max-width: 100% !important;
          min-width: 100% !important;
          width: 100%;
        }
        .buttons-block, .buttons-block button {
          width: 100%;
          min-width: 100% !important;
          line-height: 17px !important;
        }
  }
`

export default StyledHome