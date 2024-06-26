import React from "react";
import D from "./D";
const cStyles = {
  width: "200px",
  boxShadow: "0 0 10px blue",
  textAlign: "center",
  padding: "50px",
  margin: "20px auto",
};
function C({ info }) {
  return (
    <div>
      <h2>C Component</h2>
      <hr />
      <D info={info} />
    </div>
  );
}

export default C;
