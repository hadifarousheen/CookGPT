import { configureStore } from "@reduxjs/toolkit";
import Resultreducer from "../utils/resultSlice";
import InfoReducer from "../utils/completedataSlice";

export const appStore = configureStore({
  reducer: {
    Result: Resultreducer,
    CompleteData: InfoReducer,

  },
});

export default appStore;
