import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const cartdata = useSelector((store) => {
    return store.productsReducer.cart;
  });

  const removeCart = (id) => {
    dispatch({
      type: "REMOVE-CART",
      payload: id,
    });
  };
  return (
    <div>
      {cartdata.length > 0 ? (
        <div>
          {cartdata.map((cartproduct) => {
            return (
              <div
                className="mt-5 text-center w-75 text-center mx-auto "
                key={cartproduct.id}
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <div>
                  {" "}
                  <img src={cartproduct.image} width={70} height={70} />{" "}
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
                    onClick={() => {}}
                  >
                    -
                  </button>
                  <span>{count}</span>
                  <button
                    className="btn btn-success px-2 mx-2"
                    onClick={() => {}}
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
