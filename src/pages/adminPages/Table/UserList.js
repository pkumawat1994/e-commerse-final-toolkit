import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import { GetUserList, userBlock, userUnBlock } from "../../../redux";
import "./userList.css";

const UserList = () => {
  const [itemOffset, setItemOffset] = useState(0);
  let { userListData, successMassage, loading } = useSelector(
    (state) => state?.userSlice
  );
  console.log(1, userListData);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetUserList());
    if (successMassage) {
      toast.success(successMassage, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }, [, successMassage]);

  const handleUnblock = (id) => {
    dispatch(userUnBlock(id));
  };

  const handleblock = (id, email) => {
    const data = {
      id: id,
      email: email,
    };
    dispatch(userBlock(data));
  };

  const makeAdmin = (id) => {
    dispatch(makeAdmin(id));
  };

  // PAGINATE------>
  const endOffset = itemOffset + 10;
  const currentItems = userListData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(userListData.length / 10);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 10) % userListData.length;

    setItemOffset(newOffset);
    console.log("pageCount", pageCount);
  };

  return (
    <>
      <table border="1">
        <tr>
          <th>ID</th>
          <th>FIRSTNAME</th>
          <th>EMAIL</th>
          <th>STATUS</th>
          <th>USER TYPE</th>
        </tr>
        {currentItems?.length > 0 ? (
          currentItems?.map((ele, i) => {
            return (
              <>
                <tr>
                  <td>{i + 1}</td>
                  <td>{ele.firstName}</td>
                  <td>{ele.email}</td>
                  <td>
                    {ele.isVarified ? (
                      <button
                        className="btn btn-warning"
                        onClick={() => handleblock(ele._id, ele.email)}
                      >
                        Block
                      </button>
                    ) : (
                      <button
                        className="btn btn-success"
                        onClick={() => handleUnblock(ele._id)}
                      >
                        UnBlock
                      </button>
                    )}
                  </td>
                  <td>
                    {ele.isAdmin ? (
                      <button className="btn btn-danger">Make User</button>
                    ) : (
                      <button
                        className="btn btn-success"
                        onClick={() => makeAdmin(ele._id)}
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                </tr>
              </>
            );
          })
        ) : (
          <p>No Data</p>
        )}
      </table>
      <div style={{ backgroundColor: "black", color: "white" }}>
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </div>
    </>
  );
};

export default UserList;
