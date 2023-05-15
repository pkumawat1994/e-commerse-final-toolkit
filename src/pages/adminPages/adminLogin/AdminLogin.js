import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import { adminLogin } from "../../../redux";
import { LoginSchema } from "../../../utils/allValidations/allFormSchemas";

const AdminLogin = () => {
  let navigate = useNavigate();
  let { loginSuccessMessage, loading } = useSelector(
    (state) => state?.AdminAuthSlice
  );
  console.log(789654, loading);
  let dispatch = useDispatch();
  let admintoken = localStorage.getItem("adminToken");
  console.log(123, admintoken);
  useEffect(() => {
    if (admintoken !== "undefined" && loginSuccessMessage) {
      console.log(5555, admintoken, loginSuccessMessage);
      toast.success(loginSuccessMessage, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/dashboard");
    } 
  }, [loginSuccessMessage, admintoken]);
  return (
    <>
      <div>
        <center>
          <h1>Admin Login Form </h1>
        </center>
        <div className="container">
          <div className="col-lg-12">
            <div className="form-wrapper">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={LoginSchema}
                onSubmit={(values) => {
                  setTimeout(() => {
                    dispatch(adminLogin(values));
                  }, 800);
                }}
              >
                {({
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  errors,
                  touched,
                }) => {
                  return (
                    <>
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-control"
                          />
                          {errors.email && touched.email ? (
                            <div className="er">*{errors.email}*</div>
                          ) : null}
                        </div>

                        <div className="form-group">
                          <input
                            type="password"
                            name="password"
                            autoComplete="off"
                            value={values.password}
                            className="form-control"
                            placeholder="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.password && touched.password ? (
                            <div className="er">*{errors.password}*</div>
                          ) : null}
                        </div>
                        <center>
                          <button className="btn btn-warning" type="submit">
                            {loading ? <PulseLoader /> : "LOGIN"}
                          </button>
                        </center>
                      </form>
                    </>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
