import { createSlice } from "@reduxjs/toolkit";

const initialState = {  title: "village",
coordinates: [],
};

const VillageSlice = createSlice({
  name: "VillageSlice",
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

export const { setVillageState } = VillageSlice.actions;
export default VillageSlice.reducer