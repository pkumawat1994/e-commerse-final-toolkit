import { createAsyncThunk } from "@reduxjs/toolkit";
import CommonUrl from "../apiServices/CommonUrl";

//--------------------------------------------------(-REGISTER-)---------------->

export const AuthRegister = createAsyncThunk(
  "AuthReducer/AuthRegister",
  async (data, { rejectWithValue }) => {
    try {
      const register_response = await CommonUrl.post("/register", data);
      // console.log("resppnse_Api", register_response);
      if (register_response.status === 200) {
        return register_response;
      }
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

//-----------------------------------------------------(-LOGIN-)--------------------->

export const AuthLogin = createAsyncThunk(
  "AuthReducer/AuthLogin",
  async (data, { rejectWithValue }) => {
    try {
      const register_response = await CommonUrl.post("/login", data);
      // console.log("resppnse_Api", register_response);
      if (register_response.status === 200) {
        return register_response;
      }
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

//------------------------------------------------(-GET PRODUCT-)---------------------->

export const getProduct = createAsyncThunk(
  "productReducer/getProduct",
  async (_, { rejectWithValue }) => {
    try {
      const register_response = await CommonUrl.get("/dashGetProduct");
      console.log("resppnse_Api", register_response);
      if (register_response.status === 200) {
        return register_response;
      }
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

//-------------------------------------------------(-ADD TO CART -)------------------->

export const addToCart = createAsyncThunk(
  "cartReducer/addToCart",
  async (data, { rejectWithValue }) => {
    console.log("first", data);
    try {
      const cart_response = await CommonUrl.post("/cart", data);
      // console.log("cart_Api", cart_response?.data?.items);
      if (cart_response.status === 200) {
        return cart_response;
      }
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

//-------------------------------------(-GET TO CART-)--------------------->

export const getToAllCartItem = createAsyncThunk(
  "cartReducer/getToAllCartItem",
  async (_, { rejectWithValue }) => {
    console.log("first");

    try {
      const cart_response = await CommonUrl.get("/cart/get");
      // console.log("cart_Api", cart_response?.data);
      if (cart_response.status === 200) {
        return cart_response;
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

//-----------------------------------(-DELETE CART-)--------------------->

export const deleteCart = createAsyncThunk(
  "cartReducer/deleteCart",
  async (id, { rejectWithValue }) => {
    // console.log("first", id);
    const params = {
      itemId: id,
    };
    try {
      console.log("idddd", { params });
      const cart_response = await CommonUrl.delete("/cart/delete", { params });
      // console.log("cart_Api", cart_response);
      if (cart_response.status === 200) {
        return cart_response;
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// ------------------------------------------(-INCREAMENT DECREMENT PRODUCT ITEM-)------->

export const productCount = createAsyncThunk(
  "cartReducer/productCount",
  async (data, { rejectWithValue }) => {
    try {
      // console.log(1111111, data);
      const cart_response = await CommonUrl.post("/cart/increment", data);
      console.log("cart_Api", cart_response);
      if (cart_response.status === 200) {
        return cart_response;
      }
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);

//-----------------------------------------(-Add Favrate-)----------------------->

export const adminLogin = createAsyncThunk(
  "AdminAuthReducer/adminLogin",
  async (data, { rejectWithValue }) => {
    try {
      const cart_response = await CommonUrl.post("/login", data);
      console.log("admin_response", cart_response);
      if (cart_response.status === 200) {
        return cart_response;
      }
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);

//------------------------------------(-Forget PAssword-)------------------->

export const ChangePassword = createAsyncThunk(
  "AuthReducer/ChangePassword",
  async (data, { rejectWithValue }) => {
    try {
      console.log(1010, data);
      const cart_response = await CommonUrl.post("/changePassword", data);
      console.log("change_response", cart_response);
      if (cart_response.status === 200) {
        return cart_response;
      }
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);

// --------------------------------ADMIN API's---------------------------------

//----GET USER LIST

export const GetUserList = createAsyncThunk(
  "UserReducer/GetUserList",
  async (_, { rejectWithValue }) => {
    try {
      // console.log(1010, data);
      const cart_response = await CommonUrl.get("/getALLAuth");
      // console.log("change_response", cart_response);
      if (cart_response.status === 200) {
        return cart_response;
      }
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);

//--------->UNBLOCK USER---------------------------------->

export const userUnBlock = createAsyncThunk(
  "UserReducer/userUnBlock",
  async (id, { rejectWithValue }) => {
    try {
      // console.log(1010, data);
      const cart_response = await CommonUrl.put(`/unBlockAuth/${id}`);
      console.log("userUnblock", cart_response);
      if (cart_response.status === 200) {
        return cart_response;
      }
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);

//------------->BLOCK USER---------------------->

export const userBlock = createAsyncThunk(
  "UserReducer/userBlock",
  async (data, { rejectWithValue }) => {
    try {
      let email = data.email;
      let id = data.id;
      console.log("blokcomedata", data);
      const cart_response = await CommonUrl.put(`/blockAuth/${id}`, { email });
      console.log("userUnblock", cart_response);
      if (cart_response.status === 200) {
        return cart_response;
      }
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);

//----------->Make User-------------------->

export const makeAdmin = createAsyncThunk(
  "UserReducer/makeAdmin",
  async (id, { rejectWithValue }) => {
    try {
      const cart_response = await CommonUrl.put(`/madeAdmin/${id}`);
      console.log("userUnblock", cart_response);
      if (cart_response.status === 200) {
        return cart_response;
      }
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);
