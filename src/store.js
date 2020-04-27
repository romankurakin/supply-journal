import { configureStore } from "@reduxjs/toolkit";
import supplyReducer from "./features/supply/supplySlice";

export const store = configureStore({
  reducer: { supply: supplyReducer },
});
