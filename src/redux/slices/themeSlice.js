import { createSlice } from "@reduxjs/toolkit";

const initialState = { activeId:0}
  

const ThemeSlice = createSlice({
  name: "ThemeSlice",
  initialState,
  reducers: {
    setThemeState: (state, action) => {
      state.activeId = action.payload;
      console.log('gotcha',action.payload)
    },
  },
});

export const { setThemeState } = ThemeSlice.actions;
export default ThemeSlice.reducer;
