import Header from "./components/header/Header";
import Counter from "./components/counter/Counter";
import ImageComp from "./components/imagetask/ImageComp";
import "./App.css";

function App() {
  return (
    <div className="app">
      <ImageComp />
      <Counter />
      {/* <h2>App Component</h2> */}
      {/* <Header /> */}
    </div>
  );
}

export default App;
