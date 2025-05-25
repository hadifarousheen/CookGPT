import { configureStore } from "@reduxjs/toolkit";
import Resultreducer from "../utils/resultSlice";
import InfoReducer from "../utils/completedataSlice";
import userReducer from "../utils/userInfoSlice";

export const appStore = configureStore({
  reducer: {
    Result: Resultreducer,
    CompleteData: InfoReducer,
    UserInfo: userReducer,
  },
});

export default appStore;
