import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "@/utils/axiosClient/axiosClient";

const actSignup = createAsyncThunk(
  "signup/actSignup",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post("/api/Auth/sign-up", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export default actSignup;
