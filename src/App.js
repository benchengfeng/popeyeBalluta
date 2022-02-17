import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import MapComponent from "./component/map";

function App() {
 
  const [coordinates, setCoordinates] = useState([]);

  const socket = new WebSocket('ws://localhost:8000');

  socket.addEventListener('open',function(event){
    console.log('connected client frontend')
  })

  socket.addEventListener('message',function(event){
    const data = eval(event.data)
    console.log(data)
    setCoordinates(data)

  })

  const sendMessageSocket=()=>{
    socket.send('hello from client one')
  }
  return (
    <div className="App">

  
      <h1>poppey Red Acre</h1>
<MapComponent></MapComponent>
<button onClick={()=>sendMessageSocket()}> USE SOCKET </button>

{coordinates.length>0 && coordinates.map((point,i)=>
<div>
<span>{point[0]}latitude {point[1]} longitude point number {i}</span>
</div>
)}


    </div>
  );
}

export default App;
