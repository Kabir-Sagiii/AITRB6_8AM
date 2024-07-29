import "./Card.css";
import { Link } from "react-router-dom";

function Card({ image, title, price, rating, id }) {
  return (
    <div className="card">
      <img src={image} width="100%" height={200} />

      <h3>{title}</h3>
      <p>$ {price}</p>
      <p>{rating}</p>
      <Link to={`/productdetails/${id}/${price}`}>
        <button>Product Details</button>
      </Link>
    </div>
  );
}

export default Card;
