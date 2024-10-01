import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const productAdapter = createEntityAdapter({
  selectId: (product) => product.id,
});

const productSlice = createSlice({
  name: "product",
  initialState: productAdapter.getInitialState({
    searchName: "",
    searchProducts: [],
  }),
  reducers: {
    setProduct: (state, action) => {
      productAdapter.addMany(state, action.payload);
    },

    searchProduct: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.searchName = action.payload;

      const allProducts = productAdapter.getSelectors().selectAll(state);

      state.searchProducts = allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );
    },
  },
});
export const { selectAll: selectAllProduct } = productAdapter.getSelectors(
  (Store) => Store.product
);
export const { setProduct, searchProduct } = productSlice.actions;
export default productSlice.reducer;
