import { combineReducers } from "@reduxjs/toolkit";
import AdminAuthSlice from "./adminAuthSlice/AdminAuthSlice";
import UserSlice from "./AlladminSlices/user/UserSlice";

import AuthSlice from "./AuthSlices/AuthSlice";
import CartSlice from "./cart/CartSlice";
import ProductSlice from "./ProductSlice/ProductSlice";

const rootReducer = combineReducers({
  AuthSlice: AuthSlice,
  ProductSlice: ProductSlice,
  cartSlice: CartSlice,
  AdminAuthSlice: AdminAuthSlice,
  userSlice: UserSlice,
});

export default rootReducer;
