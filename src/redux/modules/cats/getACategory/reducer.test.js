import * as actionTypes from "../../../actionTypes";

import { getACategoryReducer, initialState } from "./reducer";

describe("getACategoryReducer Reducer", () => {
  it("Should return default state", () => {
    const newState = getACategoryReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it("Should return new state with data, if actionType is success", () => {
    const category = [
      {
        url: "TestUrl",
      },
    ];
    const newState = getACategoryReducer(undefined, {
      type: actionTypes.GET_A_CATEGORY_SUCCESS,
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
    const newState = getACategoryReducer(undefined, {
      type: actionTypes.GET_A_CATEGORY_FAIL,
      payload: error,
    });
    expect(newState).toEqual({ ...initialState, loading: false, error: error });
  });

  it("Should return new state with loading, if actionType is loading", () => {
    const newState = getACategoryReducer(undefined, {
      type: actionTypes.GET_A_CATEGORY_LOADING,
    });
    expect(newState).toEqual({ ...initialState, loading: true });
  });

  it("Should return initialState, if actionType is clear", () => {
    const newState = getACategoryReducer(undefined, {
      type: actionTypes.CLEAR_CATEGORY,
    });
    expect(newState).toEqual(initialState);
  });
});
