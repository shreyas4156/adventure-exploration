import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { States } from "./States";
export const configureStore = () => {
  const store = createStore(
    combineReducers({
      states: States,
    }),
    applyMiddleware(logger, thunk)
  );
  return store;
};
