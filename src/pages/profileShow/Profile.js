import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutHandle } from "../../redux/AuthSlices/AuthSlice";
import "./Profile.css";

const Profile = (props) => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let token = localStorage.getItem("userToken"); //get token from localstorage

  const handleLogout = () => {
    dispatch(logOutHandle());
    navigate("/login");
  };

  return (
    <>
      <div className="div-wrapper">
        <div className="div-header">
          <img
            src="https://picsum.photos/200/300"
            className="profile-img"
            alt="profile"
          />
          <h6 style={{ color: "white" }}>Mrs.David</h6>
        </div>
        <div className="div-body">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
              </div>
              <div className="col-sm-4">
                <Link to="/favrate">
                  <h6 className="p-text">Favrate List</h6>
                </Link>
              </div>
              <div className="col-sm-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                </svg>
              </div>
              <div className="col-sm-4">
                <Link to="/forgetpassword">
                  <h6 className="p-text">Forget Password</h6>
                </Link>
              </div>
              <div className="col-sm-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="div-foooter">
          {token === "undefined" || token === null ? null : (
            <center>
              <button className="btn btn-danger m-2" onClick={handleLogout}>
                logout
              </button>
            </center>
          )}

          <center>
            <button
              className="btn btn-success"
              type="button"
              onClick={() => props.setShow(!props.show)}
            >
              close
            </button>
          </center>
        </div>
      </div>
    </>
  );
};

export default Profile;
