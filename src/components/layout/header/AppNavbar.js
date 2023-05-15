import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Profile from "../../../pages/profileShow/Profile";
import { logOutHandle } from "../../../redux/AuthSlices/AuthSlice";
import "./Header.css";
const AppNavbar = () => {
  const [show, setShow] = useState(false);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let usertoken = localStorage.getItem("userToken");
  let { addToCartProduct, myFavrate } = useSelector(
    (state) => state?.cartSlice
  );
  const handleLogout = () => {
    if (show) {
      setShow(false);
    }
    // addToCartProduct?.items?.length=0;
    dispatch(logOutHandle());
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  const profilePopup = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="container-fluid bg-dark mb-30">
        <div className="row px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a
              className="btn d-flex align-items-center justify-content-between bg-primary w-100"
              data-toggle="collapse"
              href="#navbar-vertical"
              style={{ marginLeft: "-62px", height: "65px", padding: "0 30px" }}
            >
              <h6 className="text-dark m-0">
                <i className="fa fa-bars mr-2"></i>
              </h6>
            </a>
            <nav
              className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
              id="navbar-vertical"
              style={{ zIndex: "999" }}
            >
              <div
                className="navbar-nav w-100"
                style={{ backgroundColor: "#d0e520" }}
              >
                <div className="nav-item dropdown dropright">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Dresses{" "}
                    <i className="fa fa-angle-right float-right mt-1"></i>
                  </a>
                  <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                    <a href="" className="dropdown-item">
                      Men's Dresses
                    </a>
                    <a href="" className="dropdown-item">
                      Women's Dresses
                    </a>
                    <a href="" className="dropdown-item">
                      Baby's Dresses
                    </a>
                  </div>
                </div>
                <a href="" className="nav-item nav-link">
                  Shirts
                </a>
                <a href="" className="nav-item nav-link">
                  Jeans
                </a>
                <a href="" className="nav-item nav-link">
                  Swimwear
                </a>
                <a href="" className="nav-item nav-link">
                  Sleepwear
                </a>
                <a href="" className="nav-item nav-link">
                  Sportswear
                </a>
                <a href="" className="nav-item nav-link">
                  Jumpsuits
                </a>
                <a href="" className="nav-item nav-link">
                  Blazers
                </a>
                <a href="" className="nav-item nav-link">
                  Jackets
                </a>
                <a href="" className="nav-item nav-link">
                  Shoes
                </a>
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
              <a href="" className="text-decoration-none d-block d-lg-none">
                <span className="h1 text-uppercase text-dark bg-light px-2">
                  Multi
                </span>
                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                  Shop
                </span>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <Link to="/" className="nav-item nav-link active">
                    Home
                  </Link>
                  {/* <Link to="/shoplist" className="nav-item nav-link">
                    Shop
                  </Link> */}
                  <Link to="/allproduct" className="nav-item nav-link">
                    all Product
                  </Link>

                  <Link to="/contact" className="nav-item nav-link">
                    Contact
                  </Link>
                  {usertoken === "undefined" || usertoken === null ? (
                    <div>
                      <Link to="/register">
                        <button className="register-btn">Register</button>
                      </Link>
                      <Link to="/login">
                        <button className="login-btn">Login</button>
                      </Link>
                    </div>
                  ) : (
                    <button className="logout-btn" onClick={handleLogout}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-box-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                        />
                      </svg>
                      Logout
                    </button>
                  )}
                </div>
                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                  <Link to="/favrate" className="btn px-0">
                    <i className="fas fa-heart text-primary"></i>
                    <span
                      className="badge text-secondary border border-secondary rounded-circle"
                      style={{ paddingBottom: "2px" }}
                    >
                      {myFavrate.length}
                    </span>
                  </Link>
                  <Link to="/mycart" className="btn px-0 ml-3">
                    <i className="fas fa-shopping-cart text-primary"></i>
                    <span
                      className="badge text-secondary border border-secondary rounded-circle"
                      style={{ paddingBottom: "2px", fontSize: "20px" }}
                    >
                      {addToCartProduct?.items?.length}
                    </span>
                  </Link>
                  {!usertoken ? null : (
                    <button
                      onClick={profilePopup}
                      type="button"
                      className="logout-btn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-person-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path
                          fill-rule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {console.log(4011, show)}

      {(usertoken === "undefined" && usertoken === null) || show ? (
        <Profile setShow={setShow} show={show} />
      ) : null}
    </>
  );
};

export default AppNavbar;
