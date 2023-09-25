import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  pass: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginUser: {
      prepare(email, pass) {
        return {
          payload: {
            email,
            pass,
          },
        };
      },
      reducer(state, action) {
        state.email = action.payload.email;
        state.pass = action.payload.pass;
      },
    },
    logoutUser(state, action) {
      state.email = "";
      state.pass = "";
    },
  },
});

export const { loginUser, logoutUser } = loginSlice.actions;

export default loginSlice.reducer;
