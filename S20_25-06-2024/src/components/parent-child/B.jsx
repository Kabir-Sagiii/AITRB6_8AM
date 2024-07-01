import React from "react";
import C from "./C";

const bStyles = {
  width: "300px",
  boxShadow: "0 0 10px red",
  textAlign: "center",
  padding: "50px",
  margin: "30px auto",
};
function B({ info }) {
  return (
    <div>
      <h2>B Component</h2>
      <br />
      {/* <p>Data:{info}</p> */}
      <hr />
      <C info={info} />
    </div>
  );
}

export default B;
