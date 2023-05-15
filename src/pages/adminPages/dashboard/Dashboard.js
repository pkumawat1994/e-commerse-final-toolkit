import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";
import VisibilitySensor from "react-visibility-sensor";
import { useDispatch, useSelector } from "react-redux";
import CircleProgress from "../../../components/adminComponent/chart/CircleProgress";
import { GetUserList } from "../../../redux";
import "react-circular-progressbar/dist/styles.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
const Dashboard = () => {
  let dispatch = useDispatch();
  let { userListData } = useSelector((state) => state?.userSlice);
  console.log("usrrLIst", userListData);

  const [verified, setVarified] = useState(0);
  const getVerifiedUserPercent = () => {
    const verifiedUser = userListData.filter((ele) => ele.isVarified === 1);
    const verifiedUserData = (verifiedUser.length * 100) / userListData.length;
    console.log("verifiedUserData", verifiedUserData);
    const verifiedUserPercent = Math.round(verifiedUserData);
    console.log("verifiedUserPercent", verifiedUserPercent);
    setVarified(verifiedUserPercent ? verifiedUserPercent : 0);
  };

  useEffect(() => {
    dispatch(GetUserList());
    getVerifiedUserPercent();
  }, []);

  useEffect(() => {
    getVerifiedUserPercent();
  }, [userListData]);
  return (
    <>
      <div className="admin_dashboard">
        <div className="left_sidebar">
          <img
            className="admin-img"
            src="https://picsum.photos/200/300"
            alt="pic"
          />
          <div className="intro">
            <p>Name: Mr. Aubteen</p>
          </div>
          <div className="dash-header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-qr-code"
              viewBox="0 0 16 16"
            >
              <path d="M2 2h2v2H2V2Z" />
              <path d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z" />
              <path d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z" />
              <path d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z" />
              <path d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z" />
            </svg>
            &nbsp;&nbsp; Dashborad
          </div>
          <ul>
            <NavLink
              to="/dashboard/"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="../dashboard/profile"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <li>Profile</li>
            </NavLink>
            <NavLink
              to="../dashboard/products"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <li>Product</li>
            </NavLink>
            <NavLink
              to="../dashboard/userlist"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <li> Userlist</li>
            </NavLink>

            <NavLink
              to="../dashboard/adminChangepassword"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <li>Change Password</li>
            </NavLink>
          </ul>
        </div>
        <div className="right_content">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="admn-card-wrapper">
                  <h4>Verified User %</h4>

                  <VisibilitySensor>
                    {({ isVisible }) => {
                      isVisible = isVisible ? verified : 0;
                      return (
                        <CircleProgress
                          percentage={isVisible}
                          colour={
                            verified < 21
                              ? "red"
                              : verified < 51
                              ? "orange"
                              : "green"
                          }
                        />
                      );
                    }}
                  </VisibilitySensor>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="admn-card-wrapper">
                  <h4>Totel User</h4>
                  <h1 className="count">{userListData.length}</h1>

                  {/* <ReactVisibilitySensor>
                    {({ isVisible }) => {
                      random.percentage = isVisible ? 70 : 0;
                      return (
                        <CircleProgress
                          percentage={21}
                          colour={
                            21 < 21 ? "red" : 21 < 51 ? "orange" : "green"
                          }
                        />
                      );
                    }}
                  </ReactVisibilitySensor> */}
                </div>
              </div>

              <div className="col-sm-3">
                <div className="admn-card-wrapper">
                  <h4>Totel User</h4>

                  {/* <VisibilitySensor>
                    {({ isVisible }) => {
                      random.percentage = isVisible ? 70 : 0;
                      return ( */}
                  <CircleProgress
                    percentage={85}
                    colour={85 < 21 ? "red" : 85 < 51 ? "orange" : "green"}
                  />
                  {/* );
                    }}
                  </VisibilitySensor> */}
                </div>
              </div>
              <div className="col-sm-3">
                <div className="admn-card-wrapper">
                  <h4>Totel User</h4>

                  <VisibilitySensor>
                    {({ isVisible }) => {
                      isVisible = verified ? verified : 0;
                      return (
                        <div className="progress">
                          <VisibilitySensor>
                            {({ isVisible }) => {
                              const percentage = isVisible ? verified : 0;
                              return (
                                <CircularProgressbar
                                  value={percentage}
                                  text={`${percentage}%`}
                                  styles={buildStyles({
                                    pathColor: `${
                                      percentage < 20
                                        ? "red"
                                        : percentage < 50
                                        ? "orange"
                                        : "green"
                                    }`,
                                  })}
                                />
                              );
                            }}
                          </VisibilitySensor>
                        </div>

                        // <CircleProgress
                        //   percentage={48}
                        //   colour={48 < 21 ? "red" : 48 < 51 ? "orange" : "green"}
                        // />
                      );
                    }}
                  </VisibilitySensor>
                </div>
              </div>
            </div>
          </div>

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
