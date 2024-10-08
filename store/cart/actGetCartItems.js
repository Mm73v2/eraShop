import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "@/utils/axiosClient/axiosClient";

const actGetCartItems = createAsyncThunk(
  "cart/actGetCartItems",
  async ({ type, productId, quantity = 1 }, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();

      const cartItemsResponse = await axiosClient.get(
        `/carts?user=${auth.user.id}`
      );
      const items = cartItemsResponse.data;

      console.log(auth.user.id);
      const updatedCart = { ...items[0].items };
      if (type === "add") {
        if (items[0].items[productId]) {
          quantity > 1
            ? (updatedCart[productId] = quantity)
            : updatedCart[productId]++;
        } else {
          updatedCart[productId] = 1;
        }
      } else {
        delete updatedCart[productId];
      }

      const saveItems = await axiosClient.put(`/carts/${items[0].id}`, {
        ...items[0],
        items: updatedCart,
      });

      return saveItems.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export default actGetCartItems;
