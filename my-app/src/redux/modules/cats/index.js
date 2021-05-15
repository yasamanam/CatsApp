import { combineReducers } from "redux";
import { getACategoryReducer } from "./getACategory/reducer";
import { getCategoriesReducer } from "./getCategories/reducer";

/*
 * Combine cats reducers
 */

export const catsReducer = combineReducers({
  categories: getCategoriesReducer,
  category: getACategoryReducer,
});
