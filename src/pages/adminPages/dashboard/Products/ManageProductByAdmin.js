import React from "react";
import "./ManageProductByAdmin.css";
const ManageProductByAdmin = () => {
  return (
    <>
      <div className="container Admn-prdct">
        <button className="btn btn-success float-right m-4">Add Product</button>

        <div className="Form-wrapper">
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Product Name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Product Name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Product Name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input type="file" className="form-control" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageProductByAdmin;
