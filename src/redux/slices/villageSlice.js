import { createSlice } from "@reduxjs/toolkit";

const initialState = {  title: "village",
coordinates: [],
};

const VillageState = createSlice({
  name: "VillageState",
  initialState,
  reducers: {
   
    setVillageState: (state, action) => {
      state = action.payload;
      console.log('added state is',action.payload);
    },
    
  },
});

export const { setVillageState } = VillageState.actions;
export default VillageState.reducer