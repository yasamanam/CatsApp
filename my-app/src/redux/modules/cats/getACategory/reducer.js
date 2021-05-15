import * as actionTypes from "../../../actionTypes";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const getACategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_A_CATEGORY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_A_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case actionTypes.GET_A_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.CLEAR_CATEGORY:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
