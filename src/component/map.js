import Axios from "axios";
import { useEffect, useState } from "react";
import { URL } from "../util/config";


const MapComponent =()=>{


    const [coordinates, setCoordinates] = useState([]);

    useEffect(() => {
        getCoordinates();
      }, []);

    const getCoordinates = async () => {
      var res = null;
      try {
        res = await Axios.get(`http://localhost:8000/village`);
        
      } catch (err) {
        console.log(err);
      }
      if (res.data[0]?.coordinates?.length!==0){
        let array = res.data[0].coordinates
        array.map((point)=>{
          coordinates.push(point)
        })
      }
      return res.data[0].coordinates;
    };
   


    return(

        <div>
heeeeere
        </div>
    )

}
export default MapComponent;


