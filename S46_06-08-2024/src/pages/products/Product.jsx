import React from "react";

function Product({ id, image, title }) {
  return (
    <div className="card" key={id}>
      <div className="card-header">
        <img src={image} width={170} height={170} />
      </div>
      <div className="card-body">
        <h5 className="h5">{title}</h5>
      </div>
    </div>
  );
}

export default Product;
