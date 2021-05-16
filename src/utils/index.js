import { applyMiddleware, compose, createStore } from "redux";

import { rootReducer } from "./../redux/modules";
import thunkMiddleware from "redux-thunk";

const middlewares = [thunkMiddleware];

export const testStore = (initialState) => {
  const middlewares = [thunkMiddleware];
  const composeEnhancers =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
};
