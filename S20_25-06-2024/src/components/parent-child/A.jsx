import { useState } from "react";
import B from "./B";
const aStyles = {
  width: "500px",
  boxShadow: "0 0 10px green",
  textAlign: "center",
  margin: "50px auto",
  padding: "50px",
};
function A() {
  let [state, setState] = useState("-----");
  return (
    <div>
      <h2>A Component</h2>
      <br />
      <button
        onClick={() => {
          setState("Kabir");
        }}
      >
        Pass Data to B
      </button>
      <hr />
      <B info={state} />
    </div>
  );
}

export default A;
