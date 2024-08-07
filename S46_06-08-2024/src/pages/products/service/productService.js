import axios from "axios";
import productsActionCreator from "../actions/productActionCreator";

export const getAllProducts = (dispatch) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      dispatch(productsActionCreator(res.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getDataCategoryWise = (dispatch, category) => {
  axios
    .get(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => {
      dispatch(productsActionCreator(res.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
