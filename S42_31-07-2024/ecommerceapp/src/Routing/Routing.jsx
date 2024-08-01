import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";

function Routing() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/signin"} element={<Login />} />
      <Route path={"/signup"} element={<Signup />} />
    </Routes>
  );
}

export default Routing;
