import * as actionTypes from "../../../actionTypes";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const getCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case actionTypes.GET_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
