import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function TotalAmount() {
  var amount = 0;
  const [subtotalamount, setSubTotalAmount] = useState(0);
  var cartProducts = useSelector((store) => {
    return store.productsReducer.cart;
  });

  useEffect(() => {
    cartProducts
      .map((product) => product.price * product.count)
      .forEach((amountOfProduct) => {
        amount = amount + amountOfProduct;
      });

    setSubTotalAmount(amount);
  }, [cartProducts]);

  return (
    <div className="container-fluid p-3 bg-dark text-white">
      <div className="row">
        <div className="col-12">
          <h6 className="h4">Total Order Amount Details : </h6>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-6">Sub total</div>
        <div className="col-4">${Math.round(subtotalamount)}</div>
      </div>
      <hr />
      <div className="row my-3">
        <div className="col-6">Delivery Charge</div>
        <div className="col-4">$5</div>
      </div>
      <hr />
      <div className="row my-3">
        <div className="col-6">Total Amount</div>
        <div className="col-4">${Math.round(subtotalamount + 5)}</div>
      </div>
      <hr />
      <div className="row my-3">
        <div className="col-12">
          <Link to="/checkout">
            <button className="btn btn-primary px-5">
              Proceed for Payment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TotalAmount;
