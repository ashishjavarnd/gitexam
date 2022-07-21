import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../redux/actions/authActions";
import { toast } from "react-toastify";

const Signup = () => {
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [repassword, setRepassword] = useState(null);

  const handleValidation = () => {
    let formIsValid = true;

    return formIsValid;
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSuccess = (msg) => {
    toast.success(msg, {
      position: toast.POSITION.TOP_RIGHT,
    });
    navigate("/");
  };

  const onError = (msg) => {
    toast.error(msg, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      let params = {
        name,
        phone,
        email,
        username,
        password,
      };
      dispatch(signup({ params, onSuccess, onError }));
    }
  };

  return (
    <>
      {localStorage.token ? (
        <Navigate to="/product-list" />
      ) : (
        <div class="col d-flex justify-content-center">
          <div class="m-auto">
            <form className="mx-3 my-2" onSubmit={(e) => handleSubmit(e)}>
              <h1 className="h2 mt-2 mb-2 fw-normal">
                Product Manager sign up
              </h1>
              <div class="mb-2">
                <label class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="mb-2">
                <label class="form-label">Contact</label>
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div class="mb-2">
                <label for="exampleInputEmail1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="mb-2">
                <label class="form-label">User Name</label>
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div class="mb-2">
                <label class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Re enter Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setRepassword(e.target.value)}
                />
              </div>
              <button type="submit" class="btn btn-primary w-100">
                Submit
              </button>
            </form>
            <div class="mb-3  mx-3 my-2">
              <Link class="form-label" to="/">
                Already have account ? Sign in
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
