import Axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MapComponent = () => {

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

  return     <div className="App">
  <h1>popeye Red Acre</h1>

{lunch.length>0 && lunch.map((point,i)=>
<div>
<span>{point[0]}latitude {point[1]} longitude point number {i}</span>
</div>
)}
{lunch.length>0 && village.map((point,i)=>
<div>
<span>{point[0]}latitude {point[1]} longitude point number {i}</span>
</div>
)}
</div>;
};
export default MapComponent;
