import { createSlice } from "@reduxjs/toolkit";

const initialState = {  title: "village",
coordinates: [],
};

const VillageState = createSlice({
  name: "VillageState",
  initialState,
  reducers: {
   
    setVillageState: (state, action) => {
      const arrayFix = []
      action.payload.map((o)=>{
         arrayFix.push(o.reverse())
     })
     state.coordinates = arrayFix;
   },
    
  },
});

export const { setVillageState } = VillageState.actions;
export default VillageState.reducer