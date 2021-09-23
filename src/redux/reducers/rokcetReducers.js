import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  data: [],
};
export const launchesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_DATA:
      return { ...state, data: payload };
    case ActionTypes.SET_DATA:
      return { ...state, data: payload };

    default:
      return state;
  }
};
