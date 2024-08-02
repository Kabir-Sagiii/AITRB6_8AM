import { Routes, Route } from "react-router-dom";

import { routes } from "./Routes";
import { useSelector } from "react-redux";
import Login from "../pages/login/Login";

function Routing() {
  const isLoggedIn = useSelector((store) => {
    return store.isLoggedIn;
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
    </Routes>
  );
}

export default Routing;
