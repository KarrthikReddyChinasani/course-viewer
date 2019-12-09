import { createStore } from "redux";
import coursesReducer from "./reducer";

const store = createStore(coursesReducer);

export default store;