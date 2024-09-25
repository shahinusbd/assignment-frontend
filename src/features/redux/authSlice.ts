import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  email: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.accessToken = null;
      state.email = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
