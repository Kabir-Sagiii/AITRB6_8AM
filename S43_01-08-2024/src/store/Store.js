import { legacy_createStore as createStore } from "redux";
import loginReducer from "../reducer/loginReducer";
let store = createStore(loginReducer);

export default store;
