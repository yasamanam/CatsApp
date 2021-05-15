import { catsReducer } from "./cats";
import { combineReducers } from "redux";

/*
 * Combine reducers
 */

export const rootReducer = combineReducers({
  cats: catsReducer,
});
