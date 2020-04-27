import { configureStore } from "@reduxjs/toolkit";
import supplyDataReducer from "./features/supplyData/supplySlice";

export const store = configureStore({
  reducer: { supplyData: supplyDataReducer },
});
