import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "@/utils/axiosClient/axiosClient";

const actGetCartProducts = createAsyncThunk(
  "cart/actGetCartProducts",
  async (_, { rejectWithValue, getState, fulfillWithValue }) => {
    const { cart } = getState();

    const cartItemsIds = Object.keys(cart.cartItems);

    if (!cartItemsIds.length) {
      return fulfillWithValue([]);
    }

    try {
      const concatinatedItemsId = cartItemsIds
        .map((el) => `id=${el}`)
        .join("&");
      const response = await axiosClient.get(
        `/products?${concatinatedItemsId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export default actGetCartProducts;
