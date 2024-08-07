import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./productDetails.css";

function ProductDetails() {
  const { id } = useParams();
  var productdetail = useSelector((store) => {
    return store.productsReducer.data.filter((product) => product.id == id);
  });

  return (
    <div className="productDetails">
      <div className="productImagePanel">
        <img
          src={productdetail[0].image}
          width={"100%"}
          height={400}
          alt="Product"
        />
      </div>
      <div className="productContentPanel">
        <dl>
          <dt>
            <b>Product Name</b>
          </dt>
          <dd>{productdetail[0].title}</dd>
          <dt>
            <b>Price</b>
          </dt>
          <dd>{productdetail[0].price}</dd>
          <dt>
            <b>Description</b>
          </dt>
          <dd>{productdetail[0].description}</dd>
          <dt>
            <b>Category</b>
          </dt>
          <dd>{productdetail[0].category}</dd>
          <dt>
            <b>Rating</b>
          </dt>
          <dd>{productdetail[0].rating.rate}</dd>
        </dl>
        <button className="btn btn-outline-success mx-2">Add to Cart</button>
        <button className="btn btn-outline-dark mx-2">Back To Products</button>
      </div>
    </div>
  );
}

export default ProductDetails;
