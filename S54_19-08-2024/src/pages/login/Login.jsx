import { useState } from "react";
import loginActionCreator from "./ActionCreator";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
function Signin() {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });
  let [error, setError] = useState(false);
  let dispatch = useDispatch();

  const login = () => {
    // //validation
    // if (user.email === "") {
    // } else {
    //   if (user.password === "") {
    //   } else {
    //   }
    // }
    dispatch(loginActionCreator());
    // axios
    //   .post("url", user)
    //   .then(() => {
    //     dispatch(loginActionCreator());
    //   })
    //   .catch(() => {
    //     setError(true);
    //     alert();
    //   });
  };

  return (
    <div
      className=" shadow p-5"
      style={{ width: "500px", margin: "100px auto" }}
    >
      <h3>Sign In</h3>
      <div className="my-4">
        <input
          value={user.email}
          type="text"
          placeholder="Enter Email"
          className="form-control"
          onChange={(event) => {
            setUser({
              ...user,
              email: event.target.value,
            });
          }}
        />
        {error ? (
          <span style={{ color: "red", textAlign: "left" }}>
            email is not Valid
          </span>
        ) : null}
      </div>

      <div className="my-4">
        <input
          value={user.password}
          type="password"
          className="form-control"
          placeholder="Enter Password"
          onChange={(event) => {
            setUser({
              ...user,
              password: event.target.value,
            });
          }}
        />
      </div>
      <div>
        <button className="btn btn-dark px-5" onClick={login}>
          Sign In
        </button>
      </div>

      <div className="mt-4">
        <Link className="text-primary nav-link fw-bold" to="/signup">
          Create a Account
        </Link>
      </div>
    </div>
  );
}

export default Signin;
