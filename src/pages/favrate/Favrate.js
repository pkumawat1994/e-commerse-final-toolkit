import React from "react";
import { useSelector } from "react-redux";
import "./Favrate.css";
const Favrate = () => {
  const { myFavrate } = useSelector((state) => state?.cartSlice);
  console.log("cartt_favrt", myFavrate);
  return (
    <>
      <div>
        {myFavrate.length > 0 ? (
          myFavrate.map((ele) => {
            console.log("vvv", ele);
            return (
              <>
                <div className="card-wrapper">
                  <div className="constainer">
                    <div className="row">
                      <div className="col-sm-4">
                        <img
                          className="product_img"
                          src={ele?.image}
                          alt="img"
                        />
                      </div>
                      <div className="col-sm-4">
                        <h5 className="product-name">{ele.title}</h5>
                      </div>
                      <div className="col-sm-4">
                        <h5>{ele.price}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <p>No Data Found</p>
        )}
      </div>
    </>
  );
};

export default Favrate;
