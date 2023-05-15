import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFavrate, removFavrate } from "../redux/cart/CartSlice";

const Fav = ({ item, fv }) => {
  let dispatch = useDispatch();
  const [view, setView] = useState(fv ? true : false);
  let { myFavrate } = useSelector((state) => state.cartSlice);

  const favrateIte = () => {
    setView(!view);
  };

  useEffect(() => {
    if (view) {
      yuof();
    }
  }, [view]);

  useEffect(() => {}, [myFavrate]);

  const yuof = () => {
    // console.log("itemm", item);
    if (!myFavrate.find((favItem) => favItem._id === item._id)) {
      dispatch(addFavrate(item));
    }
  };

  const removeFavrt = () => {
    dispatch(removFavrate(item));
    setView(!view);
  };
  return (
    <>
      {view || fv ? (
        <button className="fav-btn" onClick={() => removeFavrt()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            color="red"
            fill="currentColor"
            border="0"
            class="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
        </button>
      ) : (
        <button className="fav-btn" onClick={() => favrateIte()}>
          <span class="far fa-heart "></span>
        </button>
      )}
    </>
  );
};

export default Fav;
