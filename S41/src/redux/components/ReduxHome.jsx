import React from "react";
import Name from "./Name";
import City from "./City";
import Details from "./Details";

function ReduxHome() {
  return (
    <div>
      <div className="subAppContainer">
        <Name />
        <City />
      </div>
      <hr />
      <Details />
    </div>
  );
}

export default ReduxHome;
