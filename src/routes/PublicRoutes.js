import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProducts from "../pages/allProducts/AllProducts";
import CartTable from "../pages/cart/CartTable";
import Features from "../pages/features/Features";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Offer from "../pages/offer/Offer";
import Product from "../pages/product/Product";
import Register from "../pages/register/Register";
import Shoplist from "../pages/shop/shoplist/Shoplist";
import Venders from "../pages/contact/Contact";
import CardDetails from "../pages/cart/CardDetails";
import AdminLogin from "../pages/adminPages/adminLogin/AdminLogin";
import Dashboard from "../pages/adminPages/dashboard/Dashboard";
import Favrate from "../pages/favrate/Favrate";
import UserList from "../pages/adminPages/Table/UserList";
import AdminProfile from "../pages/adminPages/adminProfile/AdminProfile";
import ChangePassword from "../pages/adminPages/adminProfile/AdminChangePassword";
import AdminChangePassword from "../pages/adminPages/adminProfile/AdminChangePassword";
import ManageProductByAdmin from "../pages/adminPages/dashboard/Products/ManageProductByAdmin";
import Contact from "../pages/contact/Contact";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/allproduct" element={<AllProducts />} />
        <Route path="/features" element={<Features />} />
        <Route path="/venders" element={<Venders />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mycart" element={<CartTable />} />
        <Route path="allproduct/cartdetail/:id" element={<CardDetails />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard/" element={<Dashboard />}>
          <Route path="userlist" element={<UserList />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="products" element={<ManageProductByAdmin />} />

          <Route path="adminChangepassword" element={<AdminChangePassword />} />
        </Route>

        <Route path="/favrate" element={<Favrate />} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
