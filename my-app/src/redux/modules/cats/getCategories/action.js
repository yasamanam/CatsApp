import * as actionTypes from "./../../../actionTypes.js";
import * as urls from "../../../../constants/urls.tsx";

import { apiCall } from "./../../../../utils/apiCall";

export const getCategories = () =>
  apiCall({
    actionType: actionTypes.GET_CATEGORIES,
    method: "GET",
    url: urls.GET_CATEGORIES_URL,
  });
