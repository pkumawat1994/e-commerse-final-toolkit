import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart } from "../redux";
import Fav from "./Fav";
import ReactPaginate from "react-paginate";

const Card = ({ Allproduct }) => {
  //  const [itemOffset, setItemOffset] = useState(0);
  const [itemCount, setsetItemCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  let { myFavrate, successMessage, errorMessage } = useSelector(
    (state) => state?.cartSlice
  );

  // let { loading, errorMessage } = useSelector((state) => state?.ProductSlice);
  // console.log(5501, errorMessage);

  let navigate = useNavigate();
  let dispatch = useDispatch();
  let token = localStorage.getItem("userToken");

  const addCart = (item) => {
    if (itemCount === 0) {
      toast.error("Please Select Atlist One Product");
    } else {
      let itemObj = {
        itemId: item._id,
        quantity: itemCount,
      };
      dispatch(addToCart(itemObj));
    }
  };

  const selectChangeHandler = (e) => {
    alert(e.target.value);
    setsetItemCount(itemCount + 1);
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
    }
  }, [successMessage]);

  useEffect(() => {
    if (!token && errorMessage) {
      navigate("/login");
    }
  }, [token, errorMessage, navigate]);

  //paginate---

  const endOffset = itemOffset + 9;
  const currentItems = Allproduct.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(Allproduct.length / 9);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 9) % Allproduct.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {currentItems?.map((item, i) => {
        return (
          <>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                  <Link to={`../allproduct/cartdetail/${item?._id}`}>
                    <img
                      className="img-fluid w-100 img-ed"
                      style={{ objectFit: "contain" }}
                      src={item.image}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href="">
                    {item.title}
                  </a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>{item.price} $ &nbsp;&nbsp;</h5>
                    <h6 className="text-muted ml-2">
                      <del>{Math.floor(Math.random() * 11)} $ </del>
                    </h6>
                  </div>
                  <div className="card_bottm">
                    <div className="one">
                      <select
                        onChange={(e) => selectChangeHandler(e)}
                        className="select-op"
                      >
                        <option selected>select Quantity</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <div className="two">
                      {" "}
                      <button
                        className="btn btn-success cart"
                        onClick={() => addCart(item)}
                      >
                        Add To Cart
                      </button>
                    </div>
                    <div className="three">
                      {myFavrate.find((elm) => elm._id === item._id) ? (
                        <Fav item={item} fv={true} />
                      ) : (
                        <Fav item={item} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}

      <div className="col-12">
        <nav>
          <ul className="pagination">
            <ReactPaginate
              breakLabel="..."
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              nextLabel="Next"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="Previous"
              renderOnZeroPageCount={null}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              disabledClassName={"disabled"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              activeLinkClassName={"active"}
              activeClassName={"active"}
            />
          </ul>
        </nav>
      </div>
      {/* <li className="page-item disabled">
        <a className="page-link" href="#">
          Previous
        </a>
      </li>
      <div className="col-12">
        <nav>
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div> */}
    </>
  );
};

export default Card;
