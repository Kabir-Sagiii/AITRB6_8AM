import { useEffect } from "react";
import "./products.css";
import { getAllProducts, getDataCategoryWise } from "./service/productService";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/product/Product";
import { products } from "../../../ProductsData";

function Products() {
  const dispatch = useDispatch();

  const productsData = useSelector((store) => {
    return store.productsReducer.data;
  });

  useEffect(() => {
    dispatch({ type: "PRODUCTS", payload: products });
  }, []);

  // useEffect(() => {
  //   if (productsData.length === 0) {
  //     getAllProducts(dispatch);
  //   }
  // }, []);
  return (
    <div>
      {productsData.length > 0 ? (
        <div>
          <div className="options">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="products"
                defaultChecked
                onChange={() => {
                  getAllProducts(dispatch);
                }}
              />
              <label>All</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="products"
                onChange={() => {
                  getDataCategoryWise(dispatch, "electronics");
                }}
              />
              <label>Electronics</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="products"
                onChange={() => {
                  getDataCategoryWise(dispatch, "jewelery");
                }}
              />
              <label>Jewelery</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="products"
                onChange={() => {
                  getDataCategoryWise(dispatch, "men's clothing");
                }}
              />
              <label>MensWear</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="products"
                onChange={() => {
                  getDataCategoryWise(dispatch, "women's clothing");
                }}
              />
              <label>WomensWear</label>
            </div>
          </div>

          <div className="products">
            {productsData.map((product) => {
              return <Product product={product} />;
            })}
          </div>
        </div>
      ) : (
        <div style={{ marginTop: "100px" }}>
          <h2 className="mt-5 display-3 text-danger text-center">
            Something Went Wrong, Will Get Back Soon !!!
          </h2>
        </div>
      )}
    </div>
  );
}

export default Products;
