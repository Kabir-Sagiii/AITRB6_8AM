import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import PageNotFound from "../components/pagenotfound/PageNotFound";
import Products from "../pages/products/Products";
import ProductDetails from "../components/product/ProductDetails";

export var routes = [
  { path: "/", component: <Home /> },
  // { path: "/", component: <Login /> },
  { path: "/signup", component: <Signup /> },
  { path: "/products", component: <Products /> },
  { path: "/productdetails/:id", component: <ProductDetails /> },
  { path: "*", component: <PageNotFound /> },
];
