import styled from "styled-components";
import { theme } from "../../util/theme";


const DecorationTop = ({ color3 }) => {
  return (
    <StyledDecorationTop>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="306"
        height="280"
        viewBox="0 0 306 280"
        fill="none"
      >
        <rect
          x="294.842"
          y="-2.26196"
          width="7.62247"
          height="149.987"
          rx="3.81124"
          transform="rotate(52.655 294.842 -2.26196)"
          fill="white"
        />
        <rect
          x="264.653"
          y="96.3525"
          width="7.84708"
          height="99.0408"
          rx="3.92354"
          transform="rotate(50.7901 264.653 96.3525)"
          fill="#cfcfcf"
        />
        <rect
          x="334.459"
          y="-6.50784"
          width="14.3879"
          height="429.821"
          rx="7.19393"
          transform="rotate(50.9364 334.459 -6.50784)"
          fill={color3 ?? ""}
        />
        <rect
          x="476.484"
          y="16.6082"
          width="12.161"
          height="407.064"
          rx="6.08051"
          transform="rotate(51.5022 476.484 16.6082)"
          fill="#cfcfcf"
        />
      </svg>
    </StyledDecorationTop>
  );
};

const StyledDecorationTop = styled.div`
  position: absolute;
  right: 0px;
  top: 1px;
  z-index: 3;
  svg {
    width: 175px;
    height: 131px;
  }
`;
const DecorationBottom = ({ color3 }) => {
  return (
    <StyledDecorationBotom>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="313"
        height="219"
        viewBox="0 0 313 219"
        fill="none"
      >
        <rect
          x="250.956"
          width="12.7556"
          height="245.162"
          rx="6.37781"
          transform="rotate(51.8378 250.956 0)"
          fill={color3 ?? ""}
        />
        <rect
          x="190.875"
          y="123"
          width="12.5882"
          height="242.762"
          rx="6.29412"
          transform="rotate(51.8378 190.875 123)"
          fill={color3 ?? ""}
        />
        <rect
          x="129.903"
          y="135"
          width="9.70869"
          height="100.352"
          rx="4.85435"
          transform="rotate(51.8378 129.903 135)"
          fill="white"
        />
        <path
          d="M299.381 99.0726C302.243 96.8233 306.387 97.3202 308.636 100.182V100.182C310.885 103.044 310.388 107.188 307.526 109.437L70.327 295.841C67.4649 298.091 63.3214 297.594 61.0721 294.732V294.732C58.8229 291.87 59.3198 287.726 62.1819 285.477L299.381 99.0726Z"
          fill="#cfcfcf"
        />
      </svg>
    </StyledDecorationBotom>
  );
};

const StyledDecorationBotom = styled.div`
  position: absolute;
  left: -36px;
  bottom: 1px;
  z-index: 3;
  svg {
    width: 174px;
    height: 137px;
  }
`;



const StyledDecorationBackgroundBubble = styled.div`
  position: absolute;
  right: 1px;
  bottom: 0px;
  z-index: 3;
  svg {
    width: 92px;
    height: 105px;
  }
`;

const DecorationBackgroundBuble = ({ color3 }) => {
  return (
    <StyledDecorationBackgroundBubble>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="134"
        height="76"
        viewBox="0 0 134 180"
        fill="none"
      >
        <circle
          r="19.5"
          transform="matrix(-1 0 0 1 41.5 66.5)"
          fill="#cfcfcf"
        />
        <circle
          r="7.67514"
          transform="matrix(-0.938391 0.345574 0.345574 0.938391 70.4453 9.85462)"
          fill="white"
        />
        <circle
          r="12"
          transform="matrix(-1 0 0 1 137 86)"
          fill={color3 ?? ""}
        />
        <ellipse
          rx="86"
          ry="55.5"
          transform="matrix(-1 0 0 1 86 159.5)"
          fill={color3 ?? ""}
        />
      </svg>
    </StyledDecorationBackgroundBubble>
  );
};

const StyledDecorationBackgroundSun = styled.div`
  position: absolute;
  left: -44px;
  top: -86px;
  z-index: 1;
  svg {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 1100px) {
    svg {
      width: 200px;
      height: 200px;
    }
  }
`;

const DecorationBackgroundSun = ({ color3 }) => {
  return (
    <StyledDecorationBackgroundSun>
      <svg viewBox="0 0 105 206" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M-3.8147e-06 154.06C28.7188 154.06 52 131.295 52 103.214C52 75.1337 28.7188 52.3691 -3.8147e-06 52.3691C-28.7188 52.3691 -52 75.1337 -52 103.214C-52 131.295 -28.7188 154.06 -3.8147e-06 154.06Z"
          fill="#cfcfcf"
        />
        <path
          d="M0 173.189C39.7645 173.189 72 141.635 72 102.711C72 63.7867 39.7645 32.2324 0 32.2324C-39.7645 32.2324 -72 63.7867 -72 102.711C-72 141.635 -39.7645 173.189 0 173.189Z"
          stroke={color3 ?? ""}
          strokeWidth="26"
          strokeMiterlimit="10"
        />
        <path
          d="M7.62939e-06 203.395C56.3331 203.395 102 158.54 102 103.214C102 47.8867 56.3331 3.03418 7.62939e-06 3.03418C-56.333 3.03418 -102 47.8867 -102 103.214C-102 158.54 -56.333 203.395 7.62939e-06 203.395Z"
          stroke="white"
          strokeWidth="3"
          strokeMiterlimit="20"
          strokeLinecap="round"
          strokeDasharray="30 30"
        />
      </svg>
    </StyledDecorationBackgroundSun>
  );
};


const DecorationLanding = () => {

    const color3 = theme[8].color1

    return (
            <div className="responsive-style">
              <DecorationTop color3={color3} />
              <DecorationBottom color3={color3} />
              <DecorationBackgroundBuble color3={color3} />
              <DecorationBackgroundSun color3={color3} />
            </div>
    );
  };
  export default DecorationLanding;
  