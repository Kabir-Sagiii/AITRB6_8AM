import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="container mt-5 shadow p-5">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <h2 className="text-primary text-center">Sign Up</h2>
          <div className="my-4">
            <input
              type="text"
              placeholder="Enter Email"
              className="form-control"
            />
          </div>

          <div className="my-4">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
            />
          </div>
          <div className="my-4">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
            />
          </div>
          <div className="my-4">
            <input
              type="phone"
              className="form-control"
              placeholder="Enter Phone"
            />
          </div>
          <div>
            <button className="btn btn-dark px-5">Sign Up</button>
          </div>
          <div className="mt-4">
            <Link className="nav-link text-primary fw-bold" to="/">
              Already have a Account ?
            </Link>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default Signup;
