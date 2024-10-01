import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const cartAdapter = createEntityAdapter({
  selectId: (cart) => cart.id,
});

const cartSlice = createSlice({
  name: "cart",
  initialState: cartAdapter.getInitialState({
    totalPrice: 0.0,
    totalQuantity: 0,
    userId: null,
  }),
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      state.userId = newItem.userId;
      const existingItem = state.entities[newItem.id];

      if (existingItem) {
        existingItem.quantity++;
        state.totalPrice += newItem.price;
        state.totalQuantity++;
      } else {
        cartAdapter.addOne(state, {
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
        });
        state.totalPrice += newItem.price;
        state.totalQuantity += 1;
      }
    },
    removeToCart: (state, action) => {
      const removeItem = state.entities[action.payload];
      cartAdapter.removeOne(state, action.payload);

      state.totalPrice -= removeItem.price * removeItem.quantity;
      state.totalQuantity -= removeItem.quantity;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeToCart } = cartSlice.actions;
export const { selectAll: selectAllCart } = cartAdapter.getSelectors(
  (Store) => Store.cart
);
