import { useEffect } from "react";
import "./products.css";
import { getAllProducts, getDataCategoryWise } from "./service/productService";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/product/Product";

function Products() {
  const dispatch = useDispatch();

  const productsData = useSelector((store) => {
    return store.productsReducer.data;
  });

  useEffect(() => {
    if (productsData.length === 0) {
      getAllProducts(dispatch);
    }
  }, []);
  return (
    <div>
      <div className="options">
        <div>
          <input
            type="radio"
            name="products"
            defaultChecked
            onChange={() => {
              getAllProducts(dispatch);
            }}
          />
          <label>All</label>
        </div>
        <div>
          <input
            type="radio"
            name="products"
            onChange={() => {
              getDataCategoryWise(dispatch, "electronics");
            }}
          />
          <label>Electronics</label>
        </div>
        <div>
          <input
            type="radio"
            name="products"
            onChange={() => {
              getDataCategoryWise(dispatch, "jewelery");
            }}
          />
          <label>Jewelery</label>
        </div>
        <div>
          <input
            type="radio"
            name="products"
            onChange={() => {
              getDataCategoryWise(dispatch, "men's clothing");
            }}
          />
          <label>MensWear</label>
        </div>
        <div>
          <input
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
          return (
            <Product
              key={product.id}
              title={product.title}
              image={product.image}
              id={product.id}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
