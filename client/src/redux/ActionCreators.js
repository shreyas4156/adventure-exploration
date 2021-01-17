import * as ActionTypes from "./ActionTypes";
import { fetch } from "cross-fetch";

export const fetchStates = () => (dispatch) => {
  return fetch("http://localhost:4000/" + "states")
    .then(
      (response) => {
        if (response.ok) return response.json();
        else {
          let error = new Error(
            "Error: " + response.status + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((states) => dispatch(addStates(states)))
    .catch((error) => dispatch(statesFailed(error.message)));
};

export const addStates = (states) => {
  return {
    type: ActionTypes.ADD_STATES,
    payload: states,
  };
};
export const setPlacesHelper = (places) => {
  return {
    type: ActionTypes.SET_PLACES,
    payload: places,
  };
};

export const statesFailed = (error) => ({
  type: ActionTypes.STATES_FAILED,
  payload: error,
});
export const placesFailed = (error) => ({
  type: ActionTypes.PLACES_FAILED,
  payload: error,
});

export const setPlaces = (state) => (dispatch) => {
  console.log(state);
  return fetch("http://localhost:4000/states/" + state)
    .then(
      (response) => {
        if (response.ok) return response.json();
        else {
          let error = new Error(
            "Error: " + response.status + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((places) => dispatch(setPlacesHelper(places)))
    .catch((error) => dispatch(placesFailed(error.message)));
};
