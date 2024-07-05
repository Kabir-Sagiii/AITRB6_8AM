import Nav from "./components/nav/Nav";
import Name from "./redux/components/Name";
import City from "./redux/components/City";
import Details from "./redux/components/Details";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="subAppContainer">
        <Name />
        <City />
      </div>
      <hr />
      <Details />
    </div>
  );
}

export default App;
