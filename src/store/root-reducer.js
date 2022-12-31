import { combineReducers } from "redux";
import userReducer from "./users/userSlice";
import productReducer from './products/productSlice'
import cartsReducer from "./cart/cartsSlice";



export const rootReducer = combineReducers({
  user: userReducer,
  product:productReducer,
  cart:cartsReducer
});
