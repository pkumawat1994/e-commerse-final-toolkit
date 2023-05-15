import { createSlice } from "@reduxjs/toolkit";
import { AuthLogin, AuthRegister, ChangePassword } from "..";

const authToken =
  typeof window !== "undefined" &&
  JSON.parse(localStorage.getItem("authToken"));
export const AuthSlice = createSlice({
  name: "AuthReducer",
  initialState: {
    token: "",
    loading: false,
    errorMessage: "",
    successMessage: "",
    loginSuccessMessage: "",
    loginError: "",
  },
  reducers: {
    logOutHandle(state, action) {
      state.loginSuccessMessage = "";
      state.successMessage = "";
      state.errorMessage = "";
      localStorage.removeItem("userToken");
      localStorage.removeItem("userID");
    },
  },
  extraReducers: (builder) => {
    //----------------------------------------------------REGISTER-------------->
    builder
      .addCase(AuthRegister.pending, (state) => {
        state.successMessage = "";
        state.errorMessage = "";
        state.loading = true;
      })
      .addCase(AuthRegister.fulfilled, (state, action) => {
        console.log("fullfillll", action);
        state.successMessage = action.payload.data.message;
        state.errorMessage = "";
        state.loading = false;
      })
      .addCase(AuthRegister.rejected, (state, error) => {
        debugger;
        console.log(555, error?.payload);
        state.successMessage = "";
        state.errorMessage = error?.payload;
        state.loading = false;
      });

    //-----------------------------------------------------LOGIN---------------->
    builder
      .addCase(AuthLogin.pending, (state) => {
        state.loginSuccessMessage = "";
        state.loginError = "";
        state.loading = true;
      })
      .addCase(AuthLogin.fulfilled, (state, action) => {
        console.log("AuthLogin", action.payload?.data);
        state.loginSuccessMessage = action.payload.data.success;
        localStorage.setItem("userToken", action.payload?.data?.token);
        localStorage.setItem("userID", action.payload?.data?.Id);
        state.loading = false;

        state.loginError = "";
      })
      .addCase(AuthLogin.rejected, (state, error) => {
        console.log(555, error?.payload);
        state.loginSuccessMessage = "";
        state.loading = false;
        state.loginError = error?.payload;
      });

    //----------------------------------(-Cahne Password-)------------------->

    builder
      .addCase(ChangePassword.pending, (state) => {
        state.loginSuccessMessage = "";
        state.loginError = "";
        state.loading = true;
      })
      .addCase(ChangePassword.fulfilled, (state, action) => {
        // console.log("ChangePassword", action.payload);
        state.successMessage = action.payload.data.success;
        state.errorMessage = "";
        state.loading = false;
      })
      .addCase(ChangePassword.rejected, (state, error) => {
        // console.log(555, error?.payload?.response?.data?.error);
        state.successMessage = "";
        state.errorMessage = error?.payload?.response?.data?.error;
        state.loading = false;
      });
  },
});
export const { logOutHandle } = AuthSlice.actions;
export default AuthSlice.reducer;
