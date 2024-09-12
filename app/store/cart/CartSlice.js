import { createSlice } from "@reduxjs/toolkit";
import actGetCartProducts from "./actGetCartProducts";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: {}, // Array of cart items
    cartProducts: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      if (state.cartItems[action.payload]) {
        state.cartItems[action.payload]++;
      } else {
        state.cartItems[action.payload] = 1;
      }
    },

    updateQuantity: (state, action) => {
      state.cartItems[action.payload.id] = +action.payload.quantity;
    },

    removeFromCart: (state, action) => {
      delete state.cartItems[action.payload];
      state.cartProducts = state.cartProducts.filter(
        (el) => el.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actGetCartProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(actGetCartProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartProducts = action.payload;
      })
      .addCase(actGetCartProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export { actGetCartProducts };
export default cartSlice.reducer;
