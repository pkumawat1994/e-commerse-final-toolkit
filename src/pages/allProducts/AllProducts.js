import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import BreadCrumb from "../../components/BreadCrumb";
import Card from "../../components/Card";
import { getProduct } from "../../redux";
import "./AllProduct.css";
const AllProducts = () => {
  let { Allproduct, loading, errorMessage } = useSelector(
    (state) => state?.ProductSlice
  );
  // let { myFavrate } = useSelector((state) => state?.cartSlice);
  // console.log("fvvv88v", myFavrate);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <>
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">All Products</span>
        </h2>
        <div className="row px-xl-5">
          {!loading ? (
            errorMessage ? (
              <p>{errorMessage}</p>
            ) : Allproduct.length > 0 ? (
              <Card Allproduct={Allproduct} />
            ) : (
              <p>Empty Product</p>
            )
          ) : (
            <PulseLoader />
          )}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
