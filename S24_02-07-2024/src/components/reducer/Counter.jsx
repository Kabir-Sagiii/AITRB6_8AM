import { useReducer } from "react";
import counterReducer from "./counterReducer";
import "./Counter.css";
function Counter() {
  let [state, dispatch] = useReducer(counterReducer, { count: 0 });

  const incCount = () => {
    dispatch({ type: "INC" });
  };

  const decCount = () => {
    dispatch({ type: "DEC" });
  };
  return (
    <div className="reducerCounter">
      <h2>Counter App with useReducer() Hook : {state.count}</h2>
      <button onClick={incCount}>incCount</button>

      <button onClick={decCount}>decCount</button>

      <button>clear</button>
    </div>
  );
}

export default Counter;
