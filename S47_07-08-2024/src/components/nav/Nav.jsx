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
        <img
          src="https://graphicsfamily.com/wp-content/uploads/edd/2021/08/E-Commerce-Logo-Design-scaled.jpg"
          width={270}
          height={70}
        />
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        {/* <Link to="/mens">Menswear</Link>
        <Link to="/womens">Womenswear</Link>
        <Link to="/kids">Kidswear</Link> */}
        <Link to="/carts">Cart</Link>
        <button className="btn btn-outline-danger me-5" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Nav;
