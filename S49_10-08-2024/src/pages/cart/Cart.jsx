import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cartdata = useSelector((store) => {
    return store.productsReducer.cart;
  });
  return (
    <div>
      {cartdata.length > 0 ? (
        <div>
          {cartdata.map((cartproduct) => {
            return (
              <div
                className="mt-5 text-center w-75 mx-auto "
                key={cartproduct.id}
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <img src={cartproduct.image} width={70} height={70} />
                <h4 className="h4">{cartproduct.title}</h4>
                <button className="btn btn-danger px-5 py-1">Remove</button>
              </div>
            );
          })}
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
