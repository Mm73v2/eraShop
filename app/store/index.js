// store.js
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import AuthSlice from "./auth/AuthSlice"; // Import the auth slice reducer
import CartSlice from "./cart/CartSlice";

// Create a persist config for auth

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "auth"],
};

const authPersistConfig = {
  key: "auth", // This is the name under which it will be stored in localStorage
  storage,
  whitelist: ["user", "token"], // Only persist user and token
};

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["cartItems"],
};

// Combine reducers (if you have other slices)
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, AuthSlice),
  cart: persistReducer(cartPersistConfig, CartSlice),
  // other slices can go here
});

// Persist the root reducer
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist
    }),
});

// Create persistor
export default store;
export const persistor = persistStore(store);
