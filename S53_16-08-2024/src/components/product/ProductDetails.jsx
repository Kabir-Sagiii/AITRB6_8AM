import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./productDetails.css";
import addtocartService from "../../services/cart/CartService";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartData = useSelector((store) => {
    //cartData = [{},{}]
    return store.productsReducer.cart;
  });
  var productdetail = useSelector((store) => {
    return store.productsReducer.data.filter((product) => product.id == id);
  });

  const addtocart = () => {
    addtocartService(productdetail[0], dispatch);
  };

  const removeCart = (id) => {
    dispatch({
      type: "REMOVE-CART",
      payload: id,
    });
  };

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
        {cartData.length === 0 ? (
          <button className="btn btn-outline-success mx-2" onClick={addtocart}>
            Add-to-Cart
          </button>
        ) : cartData.filter((cartproduct) => cartproduct.id == id).length >
          0 ? (
          <button
            className="btn btn-danger mx-2"
            onClick={() => {
              removeCart(id);
            }}
          >
            Remove Cart
          </button>
        ) : (
          <button className="btn btn-outline-success mx-2" onClick={addtocart}>
            Add-to-Cart
          </button>
        )}
        <button className="btn btn-dark mx-2">Back To Products</button>
      </div>
    </div>
  );
}

export default ProductDetails;
