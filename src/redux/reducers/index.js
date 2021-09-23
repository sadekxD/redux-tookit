import { combineReducers } from "redux";
import { launchesReducer } from "./rokcetReducers";

export const reducers = combineReducers({
  allData: launchesReducer,
});
