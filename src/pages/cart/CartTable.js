import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import { deleteCart, getToAllCartItem, productCount } from "../../redux";

const CartTable = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let token = localStorage.getItem("userToken");
  let { addToCartProduct, loading, errorMessage, itemCounting, isItemUpdated } =
    useSelector((state) => state?.cartSlice);
  console.log(11111, addToCartProduct?.items?.length);

  useEffect(() => {
    if (
      token !== undefined &&
      token !== null &&
      addToCartProduct?.items?.length > 0
    ) {
      dispatch(getToAllCartItem());
    } else {
      toast.error("Cart Is Empty! Please Add Cart");
      setTimeout(() => {
        navigate("/allproduct");
      }, 200);
    }
  }, []);

  useEffect(() => {
    if (addToCartProduct?.items?.length < 1) {
      navigate("/allproduct");
    }
  }, [addToCartProduct?.items]);

  const removeProduct = (id) => {
    dispatch(deleteCart(id));
  };

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
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-light table-borderless table-hover text-center mb-0">
              <thead className="thead-dark">
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              {console.log(1212, addToCartProduct)}
              <tbody className="align-middle">
                {!isItemUpdated || !loading ? (
                  errorMessage ? (
                    <p>{errorMessage}</p>
                  ) : addToCartProduct?.items?.length > 0 ? (
                    addToCartProduct?.items?.map((item) => {
                      // console.log("seconsd", item);
                      return (
                        <>
                          <tr>
                            <td className="align-middle">
                              <img
                                src="assets/img/product-1.jpg"
                                alt=""
                                style={{ width: "50px" }}
                              />
                              <h5>{item.title}</h5>
                            </td>
                            <td className="align-middle">{item.price} $</td>
                            <td className="align-middle">
                              <div
                                className="input-group quantity mx-auto"
                                style={{ width: "100px" }}
                              >
                                <div className="input-group-btn">
                                  <button
                                    className="btn btn-sm btn-primary btn-minus"
                                    onClick={() =>
                                      decrementHandle(
                                        item.itemId,
                                        item.quantity
                                      )
                                    }
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
                            </td>
                            <td className="align-middle">
                              {item.price * item.quantity}
                            </td>
                            <td className="align-middle">
                              <button
                                className="btn btn-sm btn-danger"
                                onClick={() => removeProduct(item.itemId)}
                              >
                                <i className="fa fa-times"></i>
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })
                  ) : (
                    <p>No Cart Data</p>
                  )
                ) : (
                  <PulseLoader />
                )}
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <form className="mb-30" action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-0 p-4"
                  placeholder="Coupon Code"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary">Apply Coupon</button>
                </div>
              </div>
            </form>
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Cart Summary</span>
            </h5>
            <div className="bg-light p-30 mb-5">
              <div className="border-bottom pb-2">
                <div className="d-flex justify-content-between mb-3">
                  <h6>Subtotal</h6>
                  <h6> ${addToCartProduct.bill}</h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Shipping</h6>
                  <h6 className="font-weight-medium">
                    {addToCartProduct.bill > 0 ? <p>$ 10</p> : <p> $ 0</p>}
                  </h6>
                </div>
              </div>
              <div className="pt-2">
                <div className="d-flex justify-content-between mt-2">
                  <h5>Total</h5>
                  <h5>
                    $&nbsp;{addToCartProduct.bill && addToCartProduct.bill + 10}
                  </h5>
                </div>
                <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTable;
