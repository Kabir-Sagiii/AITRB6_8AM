import { Routes, Route } from "react-router-dom";

import { routes } from "./Routes";
import { useSelector } from "react-redux";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Home from "../pages/home/Home";

function Routing() {
  const isLoggedIn = useSelector((store) => {
    return store.loginReducer.isLoggedIn;
  });
  return (
    <Routes>
      {routes.map((ele, index) => {
        return (
          <Route
            key={index + 100}
            path={ele.path}
            element={isLoggedIn ? ele.component : <Login />}
          />
        );
      })}
      <Route path={"/signup"} element={isLoggedIn ? <Home /> : <Signup />} />
    </Routes>
  );
}

export default Routing;
