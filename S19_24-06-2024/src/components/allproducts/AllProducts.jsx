import axios from "axios";
import { useState } from "react";
import "./AllProducts.css";
import Card from "./card/Card";
function AllProducts() {
  let [allproducts, setAllProducts] = useState([]);
  const getProducts = () => {
    var promiseObject = axios.get("https://fakestoreapi.com/products");
    promiseObject
      .then((res) => {
        setAllProducts(res.data); // [{rating:{rate:4.3,count:233}},{},{},{}]
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2 style={{ marginBottom: "20px" }}>All Products</h2>
      <p style={{ marginBottom: "20px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        fugit fuga excepturi optio necessitatibus eaque natus quis nemo quo
        voluptates, commodi obcaecati nesciunt doloremque dolore quam ea
        quibusdam debitis repellat dolorem hic perferendis. Facere optio eveniet
        inventore vel ipsum! Praesentium, aliquam modi tenetur eum corporis sit
        pariatur, et ipsam quod commodi harum odio. Sint voluptatem nisi quo
        fuga ut, praesentium laudantium consequuntur in omnis laborum esse
        minima ratione, quas debitis magnam neque explicabo quidem ipsam quam
        labore. Culpa, dolor? Laboriosam sapiente ut, labore impedit minima
        blanditiis quidem adipisci sequi eius maxime eligendi minus maiores
        porro quam. Saepe odio aliquid eum molestias harum dolores rerum
        officiis illo ad dignissimos assumenda nulla, possimus delectus,
        asperiores, modi mollitia rem temporibus culpa ipsam adipisci
        consequuntur tempora voluptatem! Adipisci fugiat molestias consectetur
        odio fugit ipsa asperiores aliquam aspernatur, accusamus dolorem
        reprehenderit inventore qui, id enim corrupti deleniti exercitationem
        nisi magni vitae vel natus quod sint.
      </p>
      <button onClick={getProducts}>Get Products</button>

      <div className="allProductsData">
        {allproducts.map(function (product) {
          return (
            <Card
              image={product.image}
              price={product.price}
              title={product.title}
              rating={product.rating.rate}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AllProducts;
