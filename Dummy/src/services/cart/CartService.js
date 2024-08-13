import cartActionCreator from "../../pages/products/actions/cartActionCreator";
import { removeActionCreator } from "../../pages/products/actions/removeActionCreator";
export var addtocartService = (productdata, dispatch) => {
  dispatch(cartActionCreator(productdata));
};

export var removetocartService = (id, dispatch) => {
  dispatch(removeActionCreator(id));
};
