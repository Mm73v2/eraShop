import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "@/utils/axiosClient/axiosClient";

const actLogin = createAsyncThunk(
  "signup/actLogin",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post("/api/Auth/login", userData);
      console.log(response.data);

      // initialize the user cart after he logs in.
      // const cartResponse = await axiosClient.post("/carts", {
      //   user: response.data.user.id,
      //   items: {},
      // });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actLogin;
