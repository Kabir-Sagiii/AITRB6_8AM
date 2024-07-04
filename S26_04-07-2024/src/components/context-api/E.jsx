import { useContext } from "react";
import myfirstContext from "./context";

function E() {
  let contextdata = useContext(myfirstContext);
  return (
    <div style={{ padding: "10px" }}>
      <h2>E Component</h2>

      <br />
      <h4 style={{ color: "green" }}>Data :{contextdata}</h4>
    </div>
  );
}

export default E;
