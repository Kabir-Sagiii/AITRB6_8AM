import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import addtocartService from "../../services/cart/CartService";

function Product({ product }) {
  const { id, image, title, price } = product;

  const cartData = useSelector((store) => {
    //cartData = [{},{}]
    return store.productsReducer.cart;
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateToProductDetails = (id) => {
    navigate(`/productdetails/${id}`);
  };

  const addtocart = () => {
    addtocartService(product, dispatch);
  };

  const removeCart = (id) => {
    dispatch({
      type: "REMOVE-CART",
      payload: id,
    });
  };
  return (
    <div className="card" key={id}>
      <div className="card-header">
        <img src={image} width={170} height={170} />
      </div>
      <div className="card-body">
        <h5 className="h5">{title}</h5>

        <p>${price}</p>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          natus perspiciatis
        </p>
        <button
          className="btn btn-dark mx-2"
          onClick={() => {
            navigateToProductDetails(id);
          }}
        >
          Product Details
        </button>
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
      </div>
    </div>
  );
}

export default Product;
