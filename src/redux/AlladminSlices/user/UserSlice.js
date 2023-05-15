import { createSlice } from "@reduxjs/toolkit";
import { GetUserList, makeAdmin, userBlock, userUnBlock } from "../..";

export const UserSlice = createSlice({
  name: "UserReducer",
  initialState: {
    userListData: [],
    loading: false,
    successMassage: "",
    errorMassage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetUserList.pending, (state) => {
        state.successMassage = "";
        state.errorMessage = "";
        state.loading = true;
      })
      .addCase(GetUserList.fulfilled, (state, action) => {
        console.log("Adminfullfillll", action.payload.data.userList);
        state.userListData = action.payload.data.userList;
        state.errorMassage = "";
        state.loading = false;
      })
      .addCase(GetUserList.rejected, (state, error) => {
        console.log(555, error?.payload);
        state.successMassage = "";
        state.errorMassage = error?.payload;
        state.loading = false;
      })

      //------------> UnBlock USer

      .addCase(userUnBlock.pending, (state) => {
        state.successMassage = "";
        state.errorMessage = "";
        state.loading = true;
      })
      .addCase(userUnBlock.fulfilled, (state, action) => {
        console.log("UnblockSlice", action.payload);
        state.successMassage = action.payload.data.success;
        state.errorMassage = "";
        state.loading = false;
      })
      .addCase(userUnBlock.rejected, (state, error) => {
        console.log(555, error?.payload);
        state.successMassage = "";
        state.errorMassage = error?.payload;
        state.loading = false;
      })

      //-------------->Block USER

      .addCase(userBlock.pending, (state) => {
        state.successMassage = "";
        state.errorMessage = "";
        state.loading = true;
      })
      .addCase(userBlock.fulfilled, (state, action) => {
        console.log("UnblockSlice", action.payload);
        state.successMassage = action.payload.data.success;
        state.errorMassage = "";
        state.loading = false;
      })
      .addCase(userBlock.rejected, (state, error) => {
        console.log(555, error?.payload);
        state.successMassage = "";
        state.errorMassage = error?.payload;
        state.loading = false;
      })

      //---------------->MAKE ADMIN

      .addCase(makeAdmin.pending, (state) => {
        state.successMassage = "";
        state.errorMessage = "";
        state.loading = true;
      })
      .addCase(makeAdmin.fulfilled, (state, action) => {
        console.log("UnblockSlice", action.payload);
        state.successMassage = action.payload.data.success;
        state.errorMassage = "";
        state.loading = false;
      })
      .addCase(makeAdmin.rejected, (state, error) => {
        console.log(555, error?.payload);
        state.successMassage = "";
        state.errorMassage = error?.payload;
        state.loading = false;
      });
  },
});

export default UserSlice.reducer;
