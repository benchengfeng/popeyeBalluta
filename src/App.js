import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import MapComponent from "./component/map";
import { WebSocketServer } from 'ws';

function App() {
 

  const socket = new WebSocket('ws://localhost:3001');

  socket.addEventListener('open',function(event){
    console.log('connected client frontend')
  })

  socket.addEventListener('message',function(event){
    console.log('message from server',event.data)
  })

  const sendMessageSocket=()=>{
    socket.send('hello from client one')
  }
  return (
    <div className="App">

      
      <h1>poppey Red Acre</h1>
<MapComponent></MapComponent>

    </div>
  );
}

export default App;
