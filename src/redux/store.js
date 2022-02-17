import LunchSlice from './slices/luncheSlice'
import VillageSlice from './slices/villageSlice'
import { configureStore } from "@reduxjs/toolkit";

export default configureStore ({
  reducer: {
    LunchState: LunchSlice,
    VillageState: VillageSlice,  
  },
});