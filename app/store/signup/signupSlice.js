import { createSlice } from "@reduxjs/toolkit";
import actSignup from "./actSignup";
const initialState = {
  user: null,
  token: null,
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actSignup.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(actSignup.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(actSignup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export { actSignup };
export default signupSlice.reducer;
