import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/actions/authActions";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const NavTabs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSuccess = () => {
    toast.success("Logged out successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
    navigate("/");
  };

  const onError = () => {
    toast.error("Something went wrong", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const logOut = (e) => {
    dispatch(logout({ onSuccess, onError }));
  };
  return (
    <div className="row">
      <hr />
      <div className="col col-xs-12 col-sm-8">
        <nav class="nav nav-fill">
          <Link class="nav-link active" aria-current="page" to="/">
            Home
          </Link>
          <Link class="nav-link" to="/">
            AboutUs
          </Link>
          <Link class="nav-link" to="/">
            Contact
          </Link>
          {localStorage.token && (
            <>
              <Link class="nav-link" to="/add-product">
                Add product details
              </Link>
              <Link class="nav-link" to="/product-list">
                Show Report
              </Link>
              <Link class="nav-link" to="#" onClick={(e) => logOut(e)}>
                Logout
              </Link>
            </>
          )}
        </nav>
      </div>
      <hr />
    </div>
  );
};

export default NavTabs;
