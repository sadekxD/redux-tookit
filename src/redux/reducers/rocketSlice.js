import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import spaceXApi from "../../api/spaceXApi";

export const fetchData = createAsyncThunk("/launches", async () => {
  const response = await spaceXApi.get("/launches");
  return response.data;
});

export const searchData = createAsyncThunk("/search", async (rocket_name) => {
  const response = await spaceXApi.get(`/launches/?rocket_name=${rocket_name}`);
  return response.data;
});

const initialState = {
  data: [],
  error: "",
  status: "",
  search_result: [],
};

const rocketSlice = createSlice({
  name: "rocket",
  initialState,
  reducers: {
    fetchData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.concat(action.payload);
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(searchData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(searchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.search_result = state.search_result.concat(action.payload);
      })
      .addCase(searchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default rocketSlice.reducer;
