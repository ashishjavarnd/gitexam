import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { login } from "../redux/actions/authActions";
import { toast } from "react-toastify";

const Signin = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSuccess = (msg) => {
    toast.success(msg, {
      position: toast.POSITION.TOP_RIGHT,
    });
    navigate("/product-list");
  };

  const onError = (msg) => {
    toast.error(msg, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = { email, password };
    dispatch(login({ params, onSuccess, onError }));
  };

  return (
    <>
      {localStorage.token ? (
        <Navigate to="/product-list" />
      ) : (
        <div class="col d-flex justify-content-center">
          <div class="m-auto">
            <form className="mx-3 my-2" onSubmit={(e) => handleSubmit(e)}>
              <h1 className="h2 mt-2 mb-3 fw-normal">Please sign in</h1>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-primary w-100">
                Submit
              </button>
            </form>
            <div class="mb-3 mx-3 my-2">
              <Link class="form-label" to="/signup">
                Don't have account ? Register yourself.
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signin;
