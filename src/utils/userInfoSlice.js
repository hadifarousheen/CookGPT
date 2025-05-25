import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "UserInfo",
  initialState: {
    userdata: {
      name: "",
      email: "",
      password: "",
    },
  },
  reducers: {
    addUserInfo: (state, action) => {
      state.userdata = action.payload;
    },
  },
});

export const { addUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
