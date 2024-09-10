// store.js
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import AuthSlice from "./auth/AuthSlice"; // Import the auth slice reducer

// Create a persist config for auth
const persistConfig = {
  key: "auth", // This is the name under which it will be stored in localStorage
  storage,
  whitelist: ["user", "token"], // Only persist user and token
};

// Persist the auth reducer
const persistedSignupReducer = persistReducer(persistConfig, AuthSlice);

// Combine reducers (if you have other slices)
const rootReducer = combineReducers({
  auth: persistedSignupReducer, // Only persist the auth slice
  // other slices can go here
});

// Configure the store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist
    }),
});

// Create persistor
export default store;
export const persistor = persistStore(store);
