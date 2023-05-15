import React from "react";
import { Link } from "react-router-dom";
import "./AdminProfile.css";
const AdminProfile = () => {
  return (
    <>
      <div className="container-fluid main-div">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="admin-pr">
                <img
                  className="admin-profile"
                  src="https://picsum.photos/200/300"
                  alt="admin-profile-pic"
                />
                <Link>
                  <button>Change Password</button>
                </Link>
              </div>
            </div>
            <div className="col-sm-4">
              <h1>profile</h1>
            </div>
            <div className="col-sm-4">
              <h1>profile</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
