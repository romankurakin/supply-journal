import { createSlice } from "@reduxjs/toolkit";
import { getSupply } from "../../api/getSupply";

const SupplyInitialState = {
  supply: null,
  isLoading: false,
  error: null
};

const supply = createSlice({
  name: "supply",
  initialState: SupplyInitialState,
  reducers: {
    getSupplyStart(state) {
      state.isLoading = true;
    },
    getSupplySuccess(state, { payload }) {
      state.supply = payload;
      state.isLoading = false;
    },
    getSupplyFailed(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    }
  }
});

export const {
  getSupplyStart,
  getSupplySuccess,
  getSupplyFailed
} = supply.actions;

export default supply.reducer;

export const fetchSupply = () => async dispatch => {
  try {
    dispatch(getSupplyStart());
    const supply = await getSupply();
    dispatch(getSupplySuccess(supply));
  } catch (error) {
    dispatch(getSupplyFailed(error.toString()));
  }
};
