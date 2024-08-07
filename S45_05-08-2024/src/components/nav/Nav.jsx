import logoutActionCreator from "./actionCreator";
import "./Nav.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
function Nav() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
    dispatch(logoutActionCreator());
  };

  return (
    <div className="navContainer">
      <div className="title">
        <h2>Ecommerce-App</h2>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/mens">Menswear</Link>
        <Link to="/womens">Womenswear</Link>
        <Link to="/kids">Kidswear</Link>
        <button className="btn btn-outline-danger me-5" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Nav;
