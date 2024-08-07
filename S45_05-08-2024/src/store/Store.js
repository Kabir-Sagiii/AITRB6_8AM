import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import loginReducer from "../reducer/loginReducer";
let store = createStore(loginReducer, applyMiddleware(logger));

export default store;
