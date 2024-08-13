import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addtocartService,
  removetocartService,
} from "../../services/cart/CartService";

function Product({ product }) {
  const { id, image, title, price } = product;

  const products = useSelector((store) => {
    return store.productsReducer.cart.filter((p) => p.id == id);
  });

  console.log(products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateToProductDetails = (id) => {
    navigate(`/productdetails/${id}`);
  };

  const cart = (cartname) => {
    if (cartname === "Add") {
      addtocartService({ ...product, cartStatus: true }, dispatch);
    } else {
      removetocartService(id, dispatch);
    }
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
        {products.length > 0 ? (
          products[0].cartStatus ? (
            <button
              className="btn btn-danger mx-2"
              onClick={() => {
                cart("remove");
              }}
            >
              Remove Cart
            </button>
          ) : (
            <button
              className="btn btn-success mx-2"
              onClick={() => {
                cart("Add");
              }}
            >
              Add-to-Cart
            </button>
          )
        ) : (
          <button
            className="btn btn-success mx-2"
            onClick={() => {
              cart("Add");
            }}
          >
            Add-to-Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
