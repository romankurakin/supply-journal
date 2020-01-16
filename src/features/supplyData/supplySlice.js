import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getSupply } from "../../api/getSupply";

const SupplyInitialState = {
  supply: [],
  isLoading: false,
  errorOfFetch: null,
  searchText: ""
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
      state.errorOfFetch = payload;
    },
    setSearchText(state, { payload }) {
      state.searchText = payload;
    }
  }
});

export const {
  getSupplyStart,
  getSupplySuccess,
  getSupplyFailed,
  setSearchText
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

const supplySelector = state => state.supplyData.supply;
const searchTextSelector = state => state.supplyData.searchText;

function filterByValue(array, string) {
  return array.filter(o =>
    Object.keys(o).some(k =>
      String(o[k])
        .toLowerCase()
        .includes(string.toLowerCase())
    )
  );
}

export const filteredSupplySelector = createSelector(
  supplySelector,
  searchTextSelector,
  (supply, searchText) => {
    return filterByValue(supply, searchText);
  }
);
