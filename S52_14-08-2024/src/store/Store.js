import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import logger from "redux-logger";

import loginReducer from "../reducer/loginReducer";
import productsReducer from "../pages/products/reducers/productsReducer";

const combinedReducer = combineReducers({ loginReducer, productsReducer });

let store = createStore(combinedReducer, applyMiddleware(logger));

export default store;
