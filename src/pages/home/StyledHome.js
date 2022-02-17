import styled, { css } from 'styled-components'
const StyledHome = styled.form`
  display: flex;
  justify-content: start;
  padding: 48px 72px 48px 48px;
  position: relative;


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

  .btn-upload{
    position: relative;
    border: 2px solid #080808;
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

  .nav-link {
    padding: 0;
    & > ul {
      display: flex;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 90px;
        height: 90px;
        cursor: pointer;
        border-radius: 12px;
        span {
            font-size: 14px;
            font-family: 'work sans';
            font-weight: 500;
            text-transform: uppercase;
            margin-top: 6px;
            color: ${(props) => props.theme.color8};
        }
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 44px;
          width: 44px;
          background: ${(props) => props.theme.color7};
          border-radius: 50%;
          & > svg {
            font-size: 16px;
            color: ${(props) => props.theme.color8};
          }
        }
      }
      .active {
        background: ${props => props.theme.color2};
        span {
          color: ${(props) => props.theme.color3};
        }
        a {
          background: ${(props) => props.theme.color3};
          & > svg {
            color: ${(props) => props.theme.color1};
          }
        }
      }
    }
  }

  ${({ width }) =>
  width <= 1100 &&
  css`
  .nav-link {
    padding: 20px 0;
  }
  `}

  /* REPONSIVE CONTAINER */
  ${({ width }) =>
    width <= 560 &&
    css`
      padding: 0 24px 24px 24px;
      input {
        font-size: 12px;
      }
      #btn-add-link, #explore-btn {
        font-size: 12px;
        line-height: 16px;
      }
      .input-field-wrapper {
        flex: 1;
        max-width: 100%;
      }
      .container-btn span {
        margin-bottom: 24px;
      }
      .wrapper-right {
        padding: 12px !important;
        width: 48px !important;
      }
      .wrapper-right .trash {
        bottom: 19px !important;
        right: 12px !important;
      }

      .container-main {
        padding: 12px 0 12px 12px !important;
      }

      .nav-link {
        display: flex;
        justify-content: center;
        & > ul {
          display: flex;
          li {

              height: unset;
              width: 72px;
              background: unset;
              margin: 0 6px;
            span {
              font-size: 12px;
            }
          }
          .active {
            padding: 4px;
          }
        }
      }

    `}
  ${({ width }) =>
    width <= 480 &&
    css`
      .container-all {
        padding-bottom: 72px;
      }
      .wrapper-grab {
        width: 24px !important;
      }
      .container-thumbnail {
        width: 56px !important;
        min-width: 56px !important;
      }
      .container-thumbnail .wrapper-thumbnail {
        width: 48px !important;
        height: 48px !important;
      }
      .wrapper-right {
        padding: 6px !important;
        width: 40px !important;
      }

    `}

    @media screen and (max-width: 420px) {
    .nav-link {
      & > ul {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
        & > li {
          flex: 1 0 38%;
          width: unset;
        }
      }
    }

        @media screen and (max-width: 1100px) {
    padding: 0 24px 24px 24px;

    .wrapper-icon-info {
      left: 6px !important;
      top: 6px !important;
    }
  }
        @media screen and (max-width: 380px) {
          .common-search-dropdown-selector  {
            min-width: 100% !important;
          }
          .social-selector-wrapper {
              width: 100% !important;
              flex-shrink: 0;
            } 
          .content {
            font-size: 13px !important;
            line-height: 14px !important;
          }
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