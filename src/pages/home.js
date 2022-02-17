import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MapComponent from "../component/map";

const Home = () => {
  const lunchState = useSelector((lunchState) => lunchState.LunchState);

  const [lunch, setLunch] = useState([]);
  const [village, setVillage] = useState([]);

  // useEffect(() => {
  //     getCoordinates();
  //   }, []);

  // const getCoordinates = async () => {
  //   var res = null;
  //   try {
  //     res = await Axios.get(`http://localhost:8000/village`);

  //   } catch (err) {
  //     console.log(err);
  //   }
  //   if (res.data[0]?.coordinates?.length!==0){
  //     let array = res.data[0].coordinates
  //     array.map((point)=>{
  //       coordinates.push(point)
  //     })
  //   }
  //   return res.data[0].coordinates;
  // };

  return (
    <div>
      <h1>Home</h1>
      <MapComponent></MapComponent>
    </div>
  );
};
export default Home;
