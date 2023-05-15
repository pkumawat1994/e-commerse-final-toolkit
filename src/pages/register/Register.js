import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import "./Register.css";
import { AuthRegister } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import { SignupSchema } from "../../utils/allValidations/allFormSchemas";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);

  const { successMessage } = useSelector((state) => state?.AuthSlice);
  console.log("regsterSucess", successMessage);
  let token = localStorage.getItem("userToken");
  let dispatch = useDispatch();
  let navigate = useNavigate();

  //toastify-------------->

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
      navigate("/allproduct");
    }
  }, [successMessage]);

  return (
    <div>
      <div className="container">
        <center>
          <h1>Register Form </h1>
        </center>
        <div className="col-lg-12">
          <Formik
            initialValues={{
              firstName: "",
              email: "",
              password: "",
              cPassword: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              setLoading(true);
              setTimeout(() => {
                dispatch(AuthRegister(values));
                setLoading(false);
              }, 800);
            }}
          >
            {({
              values,
              handleChange,
              handleSubmit,
              errors,
              touched,
              handleBlur,
              isSubmitting,
            }) => {
              return (
                <>
                  <form onSubmit={handleSubmit}>
                    <div className="form-wrapper">
                      <div className="form-group">
                        <input
                          autoComplete="off"
                          name="firstName"
                          type="text"
                          placeholder="Enter First Name"
                          value={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="form-control"
                        />
                        {errors.firstName && touched.firstName ? (
                          <div className="er">*{errors.firstName}*</div>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
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
                      <div className="form-group">
                        <input
                          name="cPassword"
                          type="password"
                          autoComplete="off"
                          value={values.cPassword}
                          className="form-control"
                          placeholder=" confirm-password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.cPassword && touched.cPassword ? (
                          <div className="er">*{errors.cPassword}*</div>
                        ) : null}
                      </div>
                      <center>
                        <button className="btn btn-warning" type="submit">
                          {loading ? <PulseLoader /> : "   Register"}
                        </button>
                      </center>
                    </div>
                  </form>
                </>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
