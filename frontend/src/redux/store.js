import LunchSlice from './slices/luncheSlice'
import VillageSlice from './slices/villageSlice'
import ThemeSlice from './slices/themeSlice';
import { configureStore } from "@reduxjs/toolkit";

export default configureStore ({
  reducer: {
    LunchState: LunchSlice,
    VillageState: VillageSlice,
    ThemeState: ThemeSlice,  
  },
});