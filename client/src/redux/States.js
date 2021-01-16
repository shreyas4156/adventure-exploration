import * as ActionTypes from "./ActionTypes";

export const States = (
  state = {
    states: [],
    error: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_STATES:
      return {
        ...state,
        states: action.payload,
        error: null,
      };
    case ActionTypes.STATES_FAILED:
      return {
        ...state,
        states: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
