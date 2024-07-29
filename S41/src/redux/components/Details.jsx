import React from "react";
import { useSelector } from "react-redux";

function Details() {
  let data = useSelector((storedata) => {
    // {name:"",city:""}
    return storedata;
  });
  return (
    <div style={{ padding: "50px" }}>
      <h2>Details Component</h2>
      <br />
      <p style={{ color: "green", fontWeight: "bold", fontSize: "21px" }}>
        Name : {data.name}
      </p>
      <p style={{ color: "green", fontWeight: "bold", fontSize: "21px" }}>
        City : {data.city}
      </p>
    </div>
  );
}

export default Details;
