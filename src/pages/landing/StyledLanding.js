import styled, { css } from 'styled-components'
const StyledLanding = styled.form`
  display: flex;
  justify-content: start;
  padding: 48px 72px 48px 48px;
  position: relative;
  background:${props => props.theme.color2};


  .wrapper-input-options {
    margin-bottom: 6px;
    position: relative;
    svg {
      position: absolute;
      right: 6px;
      cursor: pointer;
      height: 20px;
      top: 8px;
      width: 20px;
    }
  }


  .btn-banner{
    position: relative;
    text-color : white;
    border: 2px solid #080808;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: ${props => props.theme.color2});
    height: 48px;
    padding: 12px;
    cursor: pointer;
    margin-bottom: 24px;
    font-size: 16px;
}

  .btn-landing{
    position: relative;
    text-color : white;
    border: 2px solid #080808;
    background: ${props => props.theme.color4};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    height: 48px;
    padding: 12px;
    cursor: pointer;
    margin-bottom: 24px;
    font-size: 16px;
  }

.btn-square{
  position: relative;
  border: 2px solid #080808;
  width: 50px
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.color3};
  border-radius: 20px;
  height: 48px;
  padding: 12px;
  cursor: pointer;
  margin-bottom: 24px;
  font-size: 16px;
}

.container-buttons{
  width: 100%;
  background:${props => props.theme.color1};
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
    cursor: pointer;
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

export default StyledLanding