import * as actionTypes from "./../../../actionTypes.js";
import * as urls from "../../../../constants/urls.tsx";

import { apiCall } from "./../../../../utils/apiCall";

export const getACategory = (
  limit: number,
  page: number,
  categoryId: number,
  size: number
) =>
  apiCall({
    actionType: actionTypes.GET_A_CATEGORY,
    method: "GET",
    url:
      urls.GET_A_CATEGORY_URL +
      `?limit=${limit}&page=${page}&category_ids=${categoryId}&size=${size}`,
  });

export const clearCategory = () => {
  return {
    type: actionTypes.CLEAR_CATEGORY,
  };
};
