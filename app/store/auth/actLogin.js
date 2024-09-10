import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../axiosClient/axiosClient";

const actLogin = createAsyncThunk(
  "signup/actLogin",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post("/login", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export default actLogin;
