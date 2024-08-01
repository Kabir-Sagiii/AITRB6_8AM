import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <div className="navContainer">
      <div className="title">
        <h2>Ecommerce-App</h2>
      </div>
      <div className="links">
        <a href="/home">Home</a>
        <a href="/products">Products</a>
        <a href="/">SignIn</a>
        <a href="/signup">SignUp</a>
      </div>
    </div>
  );
}

export default Nav;
