import * as ActionTypes from "./ActionTypes";

export const Places = (
  state = {
    places: [],
    error: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.SET_PLACES:
      return {
        ...state,
        places: action.payload,
        error: null,
      };
    case ActionTypes.PLACES_FAILED:
      return {
        ...state,
        places: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
