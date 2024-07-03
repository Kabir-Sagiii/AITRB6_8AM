import { legacy_createStore as createStore } from "redux";
import myReducer from "../reducers/myReducer";

let myReduxStore = createStore(myReducer);

export default myReduxStore;
