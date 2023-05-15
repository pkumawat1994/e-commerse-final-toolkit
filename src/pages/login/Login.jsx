import { Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import { AuthLogin } from "../../redux";
import { emptyState } from "../../redux/cart/CartSlice";
import { LoginSchema } from "../../utils/allValidations/allFormSchemas";
import "./Login.css";

const Login = () => {
  let token = localStorage.getItem("userToken");
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const { loginSuccessMessage, loading } = useSelector(
    (state) => state?.AuthSlice
  );

  console.log(75, loginSuccessMessage);

  useEffect(() => {
    if (loginSuccessMessage) {
      toast.success(loginSuccessMessage);
      navigate("/allproduct");
    }
  }, [loginSuccessMessage, navigate]);

  useEffect(() => {
    dispatch(emptyState());
    console.log("callemptyyyyy");
  }, [dispatch]);
  return (
    <div>
      <center>
        <h1>Login Form </h1>
      </center>
      <div className="container form-wrap">
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
                  dispatch(AuthLogin(values));
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
                    <div className="form-group">
                      <p>
                        You Don't Have Account
                        <Link to="/register">
                          <span className="para">&nbsp;SingUp</span>
                        </Link>
                      </p>
                      <p>
                        <p className="para">Forget Password</p>
                      </p>
                    </div>
                  </>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
