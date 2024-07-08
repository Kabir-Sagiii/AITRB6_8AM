import ReactDOM from "react-dom";
import App from "./App";
import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import myReduxStore from "./redux/store/Store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={myReduxStore}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
); //React 17 or < React 17
