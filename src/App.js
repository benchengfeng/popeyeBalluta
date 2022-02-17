import "./App.css";
import { useEffect, useState } from "react";
import MapComponent from "./component/map";
import { Provider, useSelector } from "react-redux";

function App() {

  const lunchState = useSelector((lunchState) => lunchState.LunchState);
  const villageState = useSelector((villageState) => villageState.VillageState);
 

  const [lunch, setLunch] = useState([]);
  const [village, setVillage] = useState([]);

  const socket = new WebSocket('ws://localhost:8000');

  // socket.addEventListener('open',function(event){
  // })

  // setting data received from server webSocket //

  socket.addEventListener('message',function(event){
    const data = eval(event.data)
    console.log(data)
    if (data[0]==='lunch'){
      setLunch(data[1]);
    }
    if (data[0]==='village'){
      setVillage(data[1]);
    }
  })

  // ******************* //

  useEffect(()=>{
    
  },[])

  return (

    <div>
      <MapComponent/>
    {/* <PagesNavigation /> */}
    </div>
  );
}

export default App;
