import spaceXApi from "../../api/spaceXApi";
import { ActionTypes } from "../constants/actionTypes";

export const fetchData = () => async (dispatch) => {
  const response = await spaceXApi.get("/launches");
  dispatch({ type: ActionTypes.FETCH_DATA, payload: response.data });
};
export const searchData = (rocket_name) => async (dispatch) => {
  const response = await spaceXApi.get(`/launches/?rocket_name=${rocket_name}`);
  dispatch({ type: ActionTypes.SEARCH_DATA, payload: response.data });
};
