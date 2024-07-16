import "./Counter.css";
import { useState } from "react";

function Counter() {
  var [state, setState] = useState(0); // state = undefined

  var [count, setCount] = useState(1);

  console.log("Re-rendering");

  const increaseCount = () => {
    // state = state + 1;
    // console.log(state);

    // setState(state + 1)

    setState((prevState) => {
      //0
      return prevState + 1; //1
    }); // 1 - re-render

    setState((prevState) => {
      //1
      return prevState + 1; //2
    });

    setState((prevState) => {
      //2
      return prevState + 1; //3
    });

    // console.log(state); // 0

    // setState(state + 2); // 2 - re-render

    // setState(state + 1); // 3 - re-render 1
  };

  return (
    <div className="counter">
      <h2>Counter App in React </h2>
      <p>Count Value is : {state}</p>

      <button onClick={increaseCount}>incCount</button>
    </div>
  );
}

export default Counter;
