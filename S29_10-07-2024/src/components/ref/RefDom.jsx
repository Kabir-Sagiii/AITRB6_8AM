import { useRef } from "react";

function RefDom() {
  let h2Ref = useRef(null); // h2Ref = {current:null}
  let buttonRef = useRef(null);

  const changeContentStyle = () => {
    h2Ref.current.innerText = "DOM Manipulated using Ref concept";
    h2Ref.current.style.color = "red";

    buttonRef.current.style.color = "red";
    buttonRef.current.style.padding = "10px 20px";
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2 id="title" ref={h2Ref}>
        DOM Manipulation using useRef() hook
      </h2>
      <br />
      <button ref={buttonRef} onClick={changeContentStyle}>
        Change Content and Style
      </button>
    </div>
  );
}

export default RefDom;
