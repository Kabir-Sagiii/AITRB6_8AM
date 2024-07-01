import Nav from "./components/nav/Nav";
import Ref from "./components/ref/Ref";
import Timer from "./components/timer/Timer";
import RefDom from "./components/ref/RefDom";
import UseReducer from "./components/reducer/UseReducer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav />
      <UseReducer />
      {/* <RefDom /> */}
      {/* <Timer /> */}
      {/* <Ref /> */}
    </div>
  );
}

export default App;
