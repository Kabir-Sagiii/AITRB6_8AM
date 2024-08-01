import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <div className="navContainer">
      <div className="title">
        <h1>Ecommerce-App</h1>
      </div>
      <div className="links">
        <a href="/">Home</a>
        <a href="/signin">SignIn</a>
        <a href="/signup">SignUp</a>
      </div>
    </div>
  );
}

export default Nav;
