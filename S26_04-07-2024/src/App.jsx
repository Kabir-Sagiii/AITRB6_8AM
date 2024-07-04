import Nav from "./components/nav/Nav";
import Name from "./redux/components/Name";
import Details from "./redux/components/Details";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav />
      <Name />
      <hr />
      <Details />
    </div>
  );
}

export default App;
