import { createSlice } from "@reduxjs/toolkit";

const initialState = {  title: "lunch",
coordinates: [],
};

const LunchState = createSlice({
  name: "LunchState",
  initialState,
  reducers: {
   
    setLunchState: (state, action) => {
      state.coordinates = action.payload;
      console.log('added state is',action.payload);
    },
  },
});

export const { setLunchState } = LunchState.actions;
export default LunchState.reducer