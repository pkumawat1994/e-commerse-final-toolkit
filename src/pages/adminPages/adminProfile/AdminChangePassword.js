import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PuffLoader, PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import { ChangePassword } from "../../../redux";
// import "./AdminChangePassword.css";
const AdminChangePassword = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const { successMessage, errorMessage, loading } = useSelector(
    (state) => state?.AuthSlice
  );

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  let dispatch = useDispatch();
  const submitHandle = (e) => {
    e.preventDefault();
    let token = localStorage.getItem("userToken");
    if (!token) {
      toast.error("First Login Then You Can Change Password", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      console.log("datatata", data);
      dispatch(ChangePassword(data));
    }
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    if (errorMessage) {
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }, [successMessage, errorMessage]);
  return (
    <>
      <div className="form-div">
        <center>
          <form onSubmit={submitHandle}>
            <input
              className="form-group"
              name="email"
              placeholder="Enter Your Email"
              onChange={onChangeHandler}
              type="email"
              required
            />

            <input
              placeholder="Enter New Password"
              type="text"
              name="password"
              onChange={onChangeHandler}
              required
            />
            <button className="btn btn-success ml-2" type="submit">
              {!loading ? "Change Password" : <PulseLoader />}
            </button>
          </form>
        </center>
      </div>
    </>
  );
};

export default AdminChangePassword;
