import { configureStore } from "@reduxjs/toolkit";
import getSupplyReducer from "./features/getSupply/supplySlice";

export const store = configureStore({
  reducer: { getSupply: getSupplyReducer }
});
