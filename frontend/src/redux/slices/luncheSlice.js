import { createSlice } from "@reduxjs/toolkit";

const initialState = {  title: "lunch",
coordinates: [],
};

const LunchSlice = createSlice({
  name: "LunchSlice",
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

export const { setLunchState } = LunchSlice.actions;
export default LunchSlice.reducer