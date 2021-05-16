import * as actionTypes from "../../../actionTypes";

import { getCategoriesReducer, initialState } from "./reducer";

describe("getCategoriesReducer Reducer", () => {
  it("Should return default state", () => {
    const newState = getCategoriesReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it("Should return new state with data, if actionType is success", () => {
    const category = [
      {
        url: "TestUrl",
      },
    ];
    const newState = getCategoriesReducer(undefined, {
      type: actionTypes.GET_CATEGORIES_SUCCESS,
      payload: category,
    });
    expect(newState).toEqual({
      ...initialState,
      loading: false,
      data: category,
    });
  });

  it("Should return new state with error, if actionType is failed", () => {
    const error = { message: "TestError" };
    const newState = getCategoriesReducer(undefined, {
      type: actionTypes.GET_CATEGORIES_FAIL,
      payload: error,
    });
    expect(newState).toEqual({ ...initialState, loading: false, error: error });
  });

  it("Should return new state with loading, if actionType is loading", () => {
    const newState = getCategoriesReducer(undefined, {
      type: actionTypes.GET_CATEGORIES_LOADING,
    });
    expect(newState).toEqual({ ...initialState, loading: true });
  });
});
