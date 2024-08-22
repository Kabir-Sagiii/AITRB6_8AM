import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TotalAmount from "../../components/TotalAmount/TotalAmount";

function Cart() {
  const dispatch = useDispatch();

  const cartdata = useSelector((store) => {
    return store.productsReducer.cart;
  });

  const removeCart = (id) => {
    dispatch({
      type: "REMOVE-CART",
      payload: id,
    });
  };

  const incCartCount = (product, index) => {
    product.count = product.count + 1;
    dispatch({
      type: "COUNT",
      payload: product,
      index: index,
    });
  };
  const decCartCount = (product, index) => {
    if (product.count > 1) {
      product.count = product.count - 1;
      dispatch({
        type: "COUNT",
        payload: product,
        index: index,
      });
    }
  };

  return (
    <div className=" p-2  mt-2">
      {cartdata.length > 0 ? (
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 shadow">
              {cartdata.map((cartproduct, index) => {
                return (
                  <div
                    className=" text-center my-5 "
                    key={cartproduct.id}
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <div>
                      {" "}
                      <img
                        src={cartproduct.image}
                        width={70}
                        height={70}
                      />{" "}
                    </div>
                    <div>
                      {" "}
                      <h4 className="h6">{cartproduct.title.slice(0, 15)}</h4>
                    </div>
                    <div>
                      {" "}
                      <p>${cartproduct.price}</p>
                    </div>
                    <div>
                      <button
                        className="btn btn-danger px-2 mx-2"
                        onClick={() => {
                          decCartCount(cartproduct, index);
                        }}
                      >
                        -
                      </button>
                      <span>{cartproduct.count}</span>
                      <button
                        className="btn btn-success px-2 mx-2"
                        onClick={() => {
                          incCartCount(cartproduct, index);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          removeCart(cartproduct.id);
                        }}
                        className="btn btn-danger btn-sm px-3  py-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-4">
              <TotalAmount />
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-5 display-3 text-center fw-bold text-warning">
          {" "}
          No Products Added in the Cart{" "}
        </div>
      )}
    </div>
  );
}

export default Cart;
