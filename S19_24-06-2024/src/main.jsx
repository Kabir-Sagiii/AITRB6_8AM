import ReactDOM from "react-dom";
import App from "./App";
import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
); //React 17 or < React 17
