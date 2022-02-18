import "./App.css";
import { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import PagesNavigation from "./pages/pagesNavigation";
import store from "./redux/store";
import { setLunchState } from "./redux/slices/luncheSlice";
import { setVillageState } from "./redux/slices/villageSlice";
import Axios  from "axios";


function App() {
  const dispatch = useDispatch();

  const [lunch, setLunch] = useState([]);
  const [village, setVillage] = useState([]);
  const [connection, setConnection] = useState(false);
  const [connectionSocket, setConnectionSocket] = useState(null);
  

  // setting data received from server webSocket //



  useEffect(()=>{


    if (connection=== false){
   const socket = new WebSocket("ws://localhost:8000");
    setConnection(true) 
    setConnectionSocket(socket)
    }
  },[])


  useEffect(()=>{

    if (connectionSocket){
    connectionSocket.addEventListener("message", function (event) {
      const data = eval(event.data);
      if (data[0] === "lunch") {
        setLunch(data[1]);
      }
      if (data[0] === "village") {
        setVillage(data[1]);
      }
      storeInDatabase()
    });
  }

  },[connection])





  const storeInDatabase = async ()=>{
    var res = null;
    try {
      res = await Axios.get("http://localhost:8000/");

    } catch (err) {
      console.log(err);
    }
  }

  // ******************* //
  

  // Storing in redux ***** //

  useEffect(() => {
    if (lunch !== null) dispatch(setLunchState(lunch));
  }, [lunch]);

  useEffect(() => {
    if (village !== null) dispatch(setVillageState(village));
  }, [village]);

  // ******************* //

  return (
    <Provider store={store}>
      <PagesNavigation />
    </Provider>
  );
}

export default App;
