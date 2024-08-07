import { useEffect } from "react";
import "./products.css";
import { getAllProducts } from "./service/productService";

function Products() {
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div>
      <div className="options">
        <div>
          <input type="radio" name="products" defaultChecked />
          <label>All</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label>Electronics</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label>MensWear</label>
        </div>
        <div>
          <input type="radio" name="products" />
          <label>WomensWear</label>
        </div>
      </div>

      <div className="products"></div>
    </div>
  );
}

export default Products;
