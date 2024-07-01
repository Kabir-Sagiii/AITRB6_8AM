import { useState } from "react";
import Display from "./Display";

function Name() {
  let [state, setState] = useState("");
  return (
    <div style={{ padding: "50px" }}>
      <h2>Name Component</h2>
      <br />
      <p>Child Data :{state}</p>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <Display setData={setState} />
    </div>
  );
}

export default Name;
