import React from "react";
const cStyles = {
  width: "200px",
  boxShadow: "0 0 10px blue",
  textAlign: "center",
  padding: "50px",
  margin: "20px auto",
};
function C({ info }) {
  return (
    <div style={cStyles}>
      <h2>C Component</h2>
      <br />
      <h4>Data:{info}</h4>
    </div>
  );
}

export default C;
