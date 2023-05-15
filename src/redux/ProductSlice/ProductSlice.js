import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "..";

const ProductSlice = createSlice({
  name: "productReducer",
  initialState: {
    loading: false,
    errorMessage: "",
    successMessage: "",
    Allproduct: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.successMessage = "";
        state.errorMessage = "";
        state.loading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        console.log("fullfillll", action.payload);
        state.errorMessage = "";
        state.Allproduct = action.payload.data?.products;
        state.successMessage = action.payload.data?.message;

        state.loading = false;
      })
      .addCase(getProduct.rejected, (state, error) => {
        console.log(555, error.error.message);
        state.successMessage = "";
        state.errorMessage = error?.error?.message;
        state.loading = false;
      });
  },
});
export default ProductSlice.reducer;
