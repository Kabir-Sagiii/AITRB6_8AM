import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div class="nav">
      <div class="leftPanel flexContainer">
        <h2>React routing</h2>
      </div>
      <div class="rightPanel flexContainer">
        <Link to="/">Home </Link>

        <Link to="/products">Products </Link>
        <Link to="/counter">Counter</Link>
        <Link to="/imagecomp">ImageComp </Link>
      </div>
    </div>
  );
}

export default Nav;
