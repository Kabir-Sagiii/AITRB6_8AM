import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import PageNotFound from "../components/pagenotfound/PageNotFound";
import Products from "../pages/products/Products";
import ProductDetails from "../components/product/ProductDetails";
import About from "../pages/about/About";
import Profile from "../pages/profile/Profile";
import Cart from "../pages/cart/Cart";
import Implentation from "../components/implementation/Implentation";

export var routes = [
  { path: "/", component: <Home /> },
  { path: "/products", component: <Products /> },
  { path: "/mens", component: <Implentation /> },
  { path: "/womens", component: <Implentation /> },
  { path: "/kids", component: <Implentation /> },
  { path: "/checkout", component: <Implentation /> },
  { path: "/profile", component: <Profile /> },
  { path: "/aboutus", component: <About /> },
  { path: "/carts", component: <Cart /> },
  { path: "/productdetails/:id", component: <ProductDetails /> },
];
