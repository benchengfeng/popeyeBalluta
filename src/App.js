import "./App.css";
import { useEffect, useState } from "react";
import MapComponent from "./component/map";
import { Provider, useDispatch, useSelector } from "react-redux";
import PagesNavigation from "./pages/pagesNavigation";
import store from "./redux/store";
import { setLunchState } from "./redux/slices/luncheSlice";
import { setVillageState } from "./redux/slices/villageSlice";
import Axios  from "axios";


function App() {
  const lunchState = useSelector((lunchState) => lunchState.LunchState);
  const villageState = useSelector((villageState) => villageState.VillageState);
  const dispatch = useDispatch();

  const [lunch, setLunch] = useState([]);
  const [village, setVillage] = useState([]);

  const socket = new WebSocket("ws://localhost:8000");

  // setting data received from server webSocket //

  socket.addEventListener("message", function (event) {
    const data = eval(event.data);
    if (data[0] === "lunch") {
      setLunch(data[1]);
    }
    if (data[0] === "village") {
      setVillage(data[1]);
    }
    storeInDatabase()
  });

  const storeInDatabase = async ()=>{
    var res = null;
    try {
      res = await Axios.get("http://localhost:8000/");

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (lunch !== null) dispatch(setLunchState(lunch));
  }, []);


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
