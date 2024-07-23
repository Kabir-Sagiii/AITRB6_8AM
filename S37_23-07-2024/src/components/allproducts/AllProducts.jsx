import axios from "axios";
import { useState, useEffect } from "react";
import "./AllProducts.css";
import Card from "./card/Card";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../../redux/actions/productsAction";

function AllProducts() {
  let [allproducts, setAllProducts] = useState([]);
  let dispatch = useDispatch();
  let productsData = useSelector((storedata) => {
    return storedata.products;
  });

  useEffect(() => {
    if (productsData.length === 0) {
      getProducts();
    }
  }, []);

  const getProducts = () => {
    console.log("executed");
    var promiseObject = axios.get("https://fakestoreapi.com/products");

    promiseObject
      .then((res) => {
        var action = productsAction(res.data);
        dispatch(action);
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

      <div className="allProductsData">
        {productsData.map(function (product) {
          return (
            <Card
              id={product.id}
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
