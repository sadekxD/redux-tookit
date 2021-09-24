import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  data: [],
};
export const launchesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_DATA:
      return { ...state, data: payload };
    default:
      return state;
  }
};
export const searchReducers = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SEARCH_DATA:
      return { ...state, ...payload };
    default:
      return state;
  }
};
