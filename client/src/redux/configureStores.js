import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { States } from "./States";
import { Places } from "./Places";
export const configureStore = () => {
  const store = createStore(
    combineReducers({
      states: States,
      places: Places,
    }),
    applyMiddleware(logger, thunk)
  );
  return store;
};
