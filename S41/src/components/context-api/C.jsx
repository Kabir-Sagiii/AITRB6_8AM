import { useContext } from "react";
import myfirstContext from "./context";
import D from "./D";
function C() {
  let info = useContext(myfirstContext);
  return (
    <div style={{ padding: "10px" }}>
      <h2>C Component: {info}</h2>

      <br />
      <hr />
      <D />
    </div>
  );
}

export default C;
