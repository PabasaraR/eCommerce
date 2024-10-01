import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";

const Store = configureStore({
  reducer: { product: productSlice, cart: cartSlice, user: userSlice },
});

export default Store;
