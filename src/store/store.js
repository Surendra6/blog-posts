import { createStore } from "redux";
import postsReducer from "./postsReducer";

const store = createStore(postsReducer);
export default store;
