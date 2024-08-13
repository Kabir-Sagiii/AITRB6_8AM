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
          style={{ color: "white" }}
          src="https://png.pngtree.com/png-clipart/20221001/original/pngtree-shopping-logo-design-for-online-store-website-png-image_8647300.png"
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
        <Link to="/about">About</Link>
        <Link to="/carts">Cart</Link>
      </div>
      <div className="thirdPanel">
        <button
          className="btn btn-outline-danger text-white fw-bold me-5"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Nav;
