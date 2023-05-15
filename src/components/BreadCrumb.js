import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();

  let urlParts = location.pathname
    .split("/")
    .filter((part) => !/\d+/.test(part));
  // console.log(urlParts);

  return (
    <>
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <Link to="/" className="breadcrumb-item text-dark">
                Home
              </Link>

              {urlParts.map((ele) => {
                const str2 = ele.charAt(0).toUpperCase() + ele.slice(1);
                return (
                  <>
                    <Link to={`/${str2}`} className="breadcrumb-item text-dark">
                      {str2}/
                    </Link>
                  </>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;
