import { combineReducers } from "redux";
import userReducer from "./users/userSlice";
export const rootReducer = combineReducers({
  user: userReducer,
});
