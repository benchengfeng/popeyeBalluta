import styled, { css } from 'styled-components'
const StyledLanding = styled.form`
display: flex;
justify-content: start;
padding: 48px 72px 48px 48px;
position: 100%;
min-height:90vh;
background:${props => props.theme.color1};


.container-page{
  width: 100%;
  display: flex;
  flex-direction: row;
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

  .btn-landing:hover {
    box-shadow: 0 0px 10px rgba(112,112,112,0.5);
    transition: 400ms;
    border :20px solid #080808;
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
    font-size: 16px;
  }

.btn-square{
  position: relative;
  border: 2px solid #080808;
  width: 150px;
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

.container-characters{
  width: 100%;
  background:#FFF;
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
  
    
    @media only screen  and (max-width:750px) {
      .responsive-style{
         display:none;
      }


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