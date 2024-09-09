import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../axiosClient/axiosClient";

const actSignup = createAsyncThunk(
  "signup/actSignup",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post("/users", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export default actSignup;
