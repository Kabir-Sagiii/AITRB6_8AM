import "./Counter.css";
function Counter() {
  var count = 0;

  const increaseCount = () => {};

  return (
    <div className="counter">
      <h2>Counter App in React</h2>
      <p>Count Value is : {count}</p>

      <button onClick={increaseCount}>incCount</button>
    </div>
  );
}

export default Counter;
