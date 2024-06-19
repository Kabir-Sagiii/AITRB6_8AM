import "./Card.css";

function Card({ image, title, price }) {
  return (
    <div className="card">
      <img src={image} width="100%" height={200} />
      <h3>{title}</h3>
      <p>$ {price}</p>
      <button>Product Details</button>
    </div>
  );
}

export default Card;
