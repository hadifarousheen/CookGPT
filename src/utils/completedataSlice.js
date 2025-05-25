import { createSlice } from "@reduxjs/toolkit";

const completedataSlice = createSlice({
  name: "CompleteData",
  initialState: {
    searchResultInfo: [],
  },
  reducers: {
    addResultInfo: (state, action) => {
      state.searchResultInfo = [...state.searchResultInfo, ...action.payload];
    },
    removeResultInfo: () => {
      return { searchResultInfo: [] };
    },
  },
});

export const { addResultInfo, removeResultInfo } = completedataSlice.actions;
export default completedataSlice.reducer;
