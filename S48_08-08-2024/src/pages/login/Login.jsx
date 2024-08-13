import { useState } from "react";
import loginActionCreator from "./ActionCreator";
import { useDispatch } from "react-redux";
function Signin() {
  let dispatch = useDispatch();

  const login = () => {
    dispatch(loginActionCreator());
  };

  return (
    <div
      className=" text-center shadow p-5"
      style={{ width: "500px", margin: "100px auto" }}
    >
      <h3>Sign In</h3>
      <div className="my-4">
        <input type="text" placeholder="Enter Email" className="form-control" />
      </div>

      <div className="my-4">
        <input
          type="password"
          className="form-control"
          placeholder="Enter Password"
        />
      </div>
      <div>
        <button className="btn btn-dark px-5" onClick={login}>
          Sign In
        </button>
      </div>

      <div className="mt-4">
        <a className="" href="/signup">
          Create a Account
        </a>
      </div>
    </div>
  );
}

export default Signin;
