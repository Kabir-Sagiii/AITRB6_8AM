import axios from "axios";

export const getAllProducts = () => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log(res); //{data}
    })
    .catch((error) => {
      console.log(error);
    });
};
