import Axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import styled, { css } from 'styled-components'

const StyledBloc = styled.div`
  width: ${({ width }) => width};
  background: grey;
  box-shadow: 0px 1px 16px 1px rgba(206, 206, 206, 0.36);
  border-radius: 16px;
  padding: 24px 48px;
  position: relative;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;

    h3 {
      font-family: 'Work Sans';
      font-style: normal;
      font-weight: 500;
      font-size: 19px;
      line-height: 28px;
      display: flex;
      align-items: center;
      color: #080808;
      margin-bottom: 24px;

      @media screen and (min-width: 450px) {
        justify-content: space-between;
      }
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

const Bloc = ({ title, width, children, widthSection }) => {
  return (
    <StyledBloc widthSection={widthSection} width={width}>
      <h3>
        {title}
      </h3>
      {children}
    </StyledBloc>
  )
}

const MapComponent = () => {
  const lunchState = useSelector((lunchState) => lunchState.LunchState);

  const [lunch, setLunch] = useState([]);
  const [village, setVillage] = useState([]);

  return (
    <div>

<Bloc widthSection={600} width='100px' title={'On My Way!'}>

<MapContainer center={[14.340945482254028,35.96093506939264]} zoom={13}>
<TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer> 

        </Bloc>



    </div>
  );
};
export default MapComponent;
