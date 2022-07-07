import { combineReducers } from "redux";
import { likeReducer } from "./likeReducer";
import { textReducer } from "./textReducer";
import { commentReducer } from "./commentReducer";

export const Reducer = combineReducers({
  likeReducer,
  textReducer,
  commentReducer,
});
