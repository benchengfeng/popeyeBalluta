import { createSlice } from "@reduxjs/toolkit";

const initialState = {  title: "lunch",
coordinates: [],
};

const LunchState = createSlice({
  name: "LunchState",
  initialState,
  reducers: {
   
    setLunchState: (state, action) => {
      const arrayFix = []
       action.payload.map((o)=>{
          arrayFix.push(o.reverse())
      })
      state.coordinates = arrayFix;
    },
  },
});

export const { setLunchState } = LunchState.actions;
export default LunchState.reducer