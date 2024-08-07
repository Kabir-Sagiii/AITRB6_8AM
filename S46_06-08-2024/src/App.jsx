import "./App.css";
import Nav from "./components/nav/Nav";
import Routing from "./Routing/Routing";
import { useSelector } from "react-redux";

function App() {
  let isLoggedIn = useSelector((storedata) => {
    return storedata.loginReducer.isLoggedIn;
  });

  return (
    <div>
      {isLoggedIn ? <Nav /> : null}
      <Routing />
    </div>
  );
}

export default App;
