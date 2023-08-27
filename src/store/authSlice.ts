import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "@/store/store.ts";

interface AuthState {
  isLoggedIn: boolean;
  username: string;
  email: string;
}

const initialState: AuthState = {
  isLoggedIn: false,
  username: "",
  email: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
