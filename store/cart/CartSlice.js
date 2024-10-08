import { createSlice } from "@reduxjs/toolkit";
import actGetCartProducts from "./actGetCartProducts";
import actGetCartItems from "./actGetCartItems";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: {},
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
    // Getting the cartList
    builder
      .addCase(actGetCartItems.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(actGetCartItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartItems = action.payload.items;
      })
      .addCase(actGetCartItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });

    // Getting the products full information from the server
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
export { actGetCartProducts, actGetCartItems };
export default cartSlice.reducer;
