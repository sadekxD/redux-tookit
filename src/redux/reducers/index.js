import { configureStore } from "@reduxjs/toolkit";
import rocketSlice from "./rocketSlice";

export const store = configureStore({
  reducer: {
    allData: rocketSlice,
  },
});

// import { combineReducers } from "redux";
// import { launchesReducer, searchReducers } from "./rokcetReducers";

// export const reducers = combineReducers({
//   allData: launchesReducer,
//   data: searchReducers,
// });
