import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
//to create our own store.
const appStore = configureStore({
  //adding slice to the store.This reducer is the reducer for the whole store and each slice also has its own reducer.
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
