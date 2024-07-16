import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div class="nav">
      <div class="leftPanel flexContainer">
        <h2>Redux in React</h2>
      </div>
      <div class="rightPanel flexContainer">
        <Link to="/">Home </Link>
        {/* <Link to="/counter2">Counter2 </Link> */}

        <Link to="/products">Categories </Link>
        <Link to="/allproducts">Products </Link>
        <Link to="/jsonserver">Users </Link>
        <Link to="/login">Login</Link>

        {/* <Link to="/imagecomp">ImageComp </Link> */}
      </div>
    </div>
  );
}

export default Nav;
