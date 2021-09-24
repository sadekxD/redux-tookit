import { combineReducers } from "redux";
import { launchesReducer, searchReducers } from "./rokcetReducers";

export const reducers = combineReducers({
  allData: launchesReducer,
  data: searchReducers,
});
