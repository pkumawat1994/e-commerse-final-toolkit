import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { adminlogOutHandle } from "../../../redux/adminAuthSlice/AdminAuthSlice";

const AdminHeader = () => {
  const { successMessage } = useSelector((state) => state?.AdminAuthSlice);
  let token = localStorage.getItem("userToken");
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const logOutHandle = () => {
    dispatch(adminlogOutHandle());

    setTimeout(() => {
      navigate("/admin");
    }, 800);
    if (token !== "undefined" && successMessage) {
      toast.success(successMessage, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark admin-nav">
        <a className="navbar-brand" href="#">
          ADMIN
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        {token ? (
          <buutton className="btn btn-danger" onClick={() => logOutHandle()}>
            Logout
          </buutton>
        ) : (
          ""
        )}
      </nav>
    </>
  );
};

export default AdminHeader;
