import Header from "./components/header/Header";
import Counter from "./components/counter/Counter";
import ImageComp from "./components/imagetask/ImageComp";
import Products from "./components/products/Products";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Counter2 from "./components/counter/Counter2";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Jewelery from "./components/products/categories/jewelery/Jewelery";
import Electronics from "./components/products/categories/electronics/Electronics";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import AllProducts from "./components/allproducts/AllProducts";
import UserNames from "./components/user-names/UserNames";
import ProductDetails from "./components/product-details/ProductDetails";
import ReduxHome from "./redux/components/ReduxHome";
import Users from "./json-server/Users";
import NewUser from "./json-server/NewUser";

function App() {
  return (
    <div className="app">
      <Nav />

      <Routes>
        <Route path={"/"} element={<Home />} />

        <Route path={"counter2"} element={<Counter2 />} />

        <Route path={"/products"} element={<Products />}>
          <Route path={"electronics"} element={<Electronics />} />
          <Route path={"jewelery"} element={<Jewelery />} />
        </Route>

        <Route path={"/counter"} element={<Counter />} />
        <Route path={"/imagecomp"} element={<ImageComp />} />
        <Route path={"/allproducts"} element={<AllProducts />} />
        <Route path={"/usernames"} element={<UserNames />} />
        <Route path={"/redux"} element={<ReduxHome />} />
        <Route
          path={"/jsonserver"}
          element={
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <NewUser />
              <Users />
            </div>
          }
        />
        <Route path={"/productdetails/:id/:x"} element={<ProductDetails />} />
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
