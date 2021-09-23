import spaceXApi from "../../api/spaceXApi";
import { ActionTypes } from "../constants/actionTypes";

export const fetchData = () => async (dispatch) => {
  const response = await spaceXApi.get("/launches");
  dispatch({ type: ActionTypes.FETCH_DATA, payload: response.data });
};
export const setData = (launches) => {
  return {
    type: ActionTypes.SET_DATA,
    payload: launches,
  };
};
