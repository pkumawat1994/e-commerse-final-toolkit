import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productCount } from "../redux";

const Counter = ({ item }) => {
  let { isItemUpdated } = useSelector((state) => state?.cartSlice);
  let dispatch = useDispatch();

  const incrementHandle = (id) => {
    const params = {
      itemId: id,
      action: "increment",
    };
    dispatch(productCount(params));
  };

  const decrementHandle = (id, quantity) => {
    const params = {
      itemId: id,
      action: "decrement",
    };
    if (quantity > 1) {
      dispatch(productCount(params));
    } else {
      alert("invalid action");
    }
  };

  return (
    <>
      <div className="input-group quantity mx-auto" style={{ width: "100px" }}>
        <div className="input-group-btn">
          <button
            className="btn btn-sm btn-primary btn-minus"
            onClick={() => decrementHandle(item.itemId, item.quantity)}
          >
            <i className="fa fa-minus"></i>
          </button>
        </div>

        <input
          type="text"
          className="form-control form-control-sm bg-secondary border-0 text-center"
          value={item.quantity}
        />
        <div className="input-group-btn">
          <button
            className="btn btn-sm btn-primary btn-plus"
            onClick={() => incrementHandle(item.itemId)}
          >
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
