import { createSlice } from "@reduxjs/toolkit";
import actSignup from "./actSignup";
import actLogin from "./actLogin";
const initialState = {
  user: null,
  token: null,
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const AuthSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    clearAuthStatus: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Register
    builder
      .addCase(actSignup.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(actSignup.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
      })
      .addCase(actSignup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });

    // Login
    builder
      .addCase(actLogin.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(actLogin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
      })
      .addCase(actLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export { actSignup, actLogin };
export const { clearAuthStatus } = AuthSlice.actions;
export default AuthSlice.reducer;
