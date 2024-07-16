import { combineReducers } from "redux";
import incrementReducer from "./loaderReducer";
import productReducer from "./productReducer";

const reducer = combineReducers({
  inc: incrementReducer,
  product: productReducer,
});

export default reducer;
