import { createSlice } from "@reduxjs/toolkit";
import { addToCart, deleteCart, getToAllCartItem, productCount } from "..";

const CartSlice = createSlice({
  name: "cartReducer",
  initialState: {
    loading: false,
    errorMessage: "",
    successMessage: "",
    addToCartProduct: [],
    itemCounting: [],
    isItemUpdated: false,
    myFavrate: [],
  },
  reducers: {
    addFavrate(state, action) {
      console.log(232324455, action);
      // if(action.payload._id===)
      let dt = state?.myFavrate?.find((el) => el._id === action.payload._id);
      if (dt?.length > 0) {
        debugger;
        alert("already added Favrate");
      }
      state.myFavrate = state.myFavrate?.concat(action.payload);
    },

    removFavrate(state, action) {
      console.log("remove", action);
      state.myFavrate = state.myFavrate?.filter(
        (ele) => ele._id !== action.payload._id
      );
    },

    emptyState(state) {
      state.errorMessage = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.successMessage = "";
        state.errorMessage = "";
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        console.log("fullfillll", action.payload);
        state.addToCartProduct = action.payload.data;
        state.errorMessage = "";
        state.successMessage = "Add To Cart Successfully";

        state.loading = false;
      })
      .addCase(addToCart.rejected, (state, error) => {
        // console.log(555, error?.payload?.error);
        state.successMessage = "";
        state.errorMessage = error?.payload?.error;
        state.loading = false;
      })

      .addCase(getToAllCartItem.pending, (state) => {
        console.log("pending");
        state.successMessage = "";
        state.errorMessage = "";
        state.loading = true;
      })
      .addCase(getToAllCartItem.fulfilled, (state, action) => {
        console.log("fullfillll", action.payload?.data);
        state.addToCartProduct = action.payload.data;
        state.errorMessage = "";
        state.successMessage = action.payload.data?.message;
        state.loading = false;
      })
      .addCase(getToAllCartItem.rejected, (state, error) => {
        console.log("rejected", error);
        state.successMessage = "";
        state.errorMessage = error?.payload?.error;
        state.loading = false;
      })

      .addCase(deleteCart.pending, (state) => {
        console.log("pending");
        state.successMessage = "";
        state.errorMessage = "";
        state.loading = true;
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        console.log("fullfillll", action.payload?.data);
        state.addToCartProduct = action.payload.data;
        state.errorMessage = "";
        state.successMessage = action.payload.data?.message;
        state.loading = false;
      })
      .addCase(deleteCart.rejected, (state, error) => {
        console.log("rejected", error);
        state.successMessage = "";
        state.errorMessage = error?.payload?.error;
        state.loading = false;
      })

      .addCase(productCount.pending, (state) => {
        console.log("pending");
        state.successMessage = "";
        state.errorMessage = "";
        state.isItemUpdated = true;
      })
      .addCase(productCount.fulfilled, (state, action) => {
        console.log("fullfillll", action.payload?.data);
        state.itemCounting = action.payload.data?.items;
        state.errorMessage = "";
        // state.successMessage = action.payload.data?.message;
        state.isItemUpdated = false;
      })
      .addCase(productCount.rejected, (state, error) => {
        console.log("rejected", error);
        state.successMessage = "";
        state.errorMessage = error?.payload?.error;
        state.isItemUpdated = false;
      });
  },
});
export const { addFavrate, removFavrate, emptyState } = CartSlice.actions;
export default CartSlice.reducer;
