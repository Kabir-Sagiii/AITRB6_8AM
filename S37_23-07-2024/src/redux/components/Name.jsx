import { useRef } from "react";
import { useDispatch } from "react-redux";

function Name() {
  let inputRef = useRef(null);
  let dispatch = useDispatch();

  const getData = () => {
    //create a action object
    var actionObj = {
      type: "NAME",
      nameComp: inputRef.current.value,
    };
    dispatch(actionObj);
  };
  return (
    <div style={{ padding: "50px" }}>
      <h2>Name Component</h2>
      <br />
      <input ref={inputRef} type="text" placeholder="Add some data" />
      <button onClick={getData}>Submit</button>
    </div>
  );
}

export default Name;
