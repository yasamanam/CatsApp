import { applyMiddleware, compose, createStore } from "redux";

import { rootReducer } from "./modules";
import thunkMiddleware from "redux-thunk";

function configureStore() {
  /*
   * Apply middlewares and reducers
   */
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
}

export const store = configureStore(rootReducer);
