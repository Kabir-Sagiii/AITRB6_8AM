import Header from "./components/header/Header";
import Counter from "./components/counter/Counter";
import ImageComp from "./components/imagetask/ImageComp";
import Products from "./components/products/Products";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav />
      <Home />
      <Products />
      <Counter />

      <ImageComp />
    </div>
  );
}

export default App;
