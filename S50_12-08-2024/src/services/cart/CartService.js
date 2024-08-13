import cartActionCreator from "../../pages/products/actions/cartActionCreator";
var addtocartService = (productdata, dispatch) => {
  dispatch(cartActionCreator(productdata));
};

export default addtocartService;
