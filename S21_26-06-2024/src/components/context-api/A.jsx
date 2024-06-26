import React from "react";
import B from "./B";
import myfirstContext from "./context";

function A() {
  return (
    <div style={{ padding: "50px" }}>
      <h2>A Component</h2>
      <br />
      <button>Submit</button>
      <br />
      <br />
      <hr />
      <myfirstContext.Provider value={100}>
        <B />
      </myfirstContext.Provider>
    </div>
  );
}

export default A;
