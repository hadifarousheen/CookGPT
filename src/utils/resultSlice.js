import { createSlice } from "@reduxjs/toolkit";

export const resultSlice = createSlice({
  name: "Result",
  initialState: {
    searchResult: [],
  },
  reducers: {
    addResult: (state, action) =>{return {
    ...state,
    searchResult: action.payload, 
    }
  },
    clearResult: () => {
      return [];
    },
  },
});

export const { addResult, clearResult } = resultSlice.actions;

export default resultSlice.reducer;
