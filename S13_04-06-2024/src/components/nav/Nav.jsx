import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <div class="nav">
      <div class="leftPanel flexContainer">
        <h2>React routing</h2>
      </div>
      <div class="rightPanel flexContainer">
        <a href="">Home </a>

        <a href="">Products </a>
        <a href="">Counter</a>
        <a href="">ImageComp </a>
      </div>
    </div>
  );
}

export default Nav;
