import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

const getPopularMovies = createAsyncThunk(
  "popular/getPopularMovies",
  async (thunkAPI) => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      { headers: { Authorization: `Bearer ${api_key}` } }
    );
    return response.data;
  }
);

const popularSlice = createSlice({
  name: "popular",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPopularMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.status = "completed";
        state.data = action.payload.results;
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export { getPopularMovies }
export default popularSlice.reducer;
export const selectPopular = (state) => state.popular;