import { Routes, Route } from "react-router-dom";

import { routes } from "./Routes";

function Routing() {
  return (
    <Routes>
      {routes.map((ele, index) => {
        return (
          <Route key={index + 100} path={ele.path} element={ele.component} />
        );
      })}
    </Routes>
  );
}

export default Routing;
