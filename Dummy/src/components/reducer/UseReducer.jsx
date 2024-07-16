import { useReducer } from "react";

const reducerFn = (action) => {
  return "Kabir";
};

function UseReducer() {
  let [state, dispatch] = useReducer(reducerFn, 100);

  const modifyState = () => {
    dispatch({ type: "DUMMY" });
  };

  return (
    <div style={{ padding: "100px" }}>
      <h2>useReducer() Hook : {state}</h2>
      <button onClick={modifyState}>Update State</button>
    </div>
  );
}

export default UseReducer;
