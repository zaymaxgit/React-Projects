import { combineReducers } from "redux";
import { cookieReducer } from "./cookieReducer";
import { searchReducer } from "./searchReducer";

export const Reducer = combineReducers({ cookieReducer, searchReducer });
