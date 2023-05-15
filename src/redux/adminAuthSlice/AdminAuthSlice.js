import { createSlice } from "@reduxjs/toolkit";
import { adminLogin } from "..";

const AdminAuthSlice = createSlice({
  name: "AdminAuthReducer",
  initialState: {
    token: "",
    loading: false,
    errorMessage: "",
    successMessage: "",
    loginSuccessMessage: "",
    loginError: "",
  },
  reducers: {
    adminlogOutHandle(state, action) {
      state.loginSuccessMessage = "";
      state.successMessage = "Admin Logout Successfully";
      state.errorMessage = "";
      state.adminToken = "";
      localStorage.removeItem("adminToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        state.loginSuccessMessage = "";
        state.loginError = "";
        state.loading = true;
        state.adminToken = "";
      })
      .addCase(adminLogin.fulfilled, (state, action) => {
        console.log("adminLogin", action.payload);
        state.loading = false;
        state.loginSuccessMessage = action.payload.data.success;
        localStorage.removeItem("userToken");
        localStorage.removeItem("userID");
        localStorage.setItem("adminToken", action.payload?.data?.token);
        state.adminToken = action.payload?.data?.token;
        state.loginError = "";
      })
      .addCase(adminLogin.rejected, (state, error) => {
        state.loading = false;
        // console.log(555, error?.payload?.response?.data?.error);
        state.adminToken = "";
        state.loginSuccessMessage = "";
        state.loginError = error?.payload?.response?.data;
      });
  },
});
export const { adminlogOutHandle } = AdminAuthSlice.actions;
export default AdminAuthSlice.reducer;
