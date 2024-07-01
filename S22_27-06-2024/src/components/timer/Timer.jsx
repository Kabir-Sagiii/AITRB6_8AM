import { useState, useRef } from "react";

function Timer() {
  let [timer, setTimer] = useState(0);
  let timerId = useRef(); // timerId = {current:undefined}
  // timerId.current = new value

  const startTimer = () => {
    timerId.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
  };

  const resetTimer = () => {
    setTimer(0);
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "100px auto",
        textAlign: "center",
        boxShadow: "0 0 10px black",
        padding: "50px",
      }}
    >
      <h2>Timer Value is : {timer}</h2>
      <br />
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Clear</button>
    </div>
  );
}

export default Timer;
