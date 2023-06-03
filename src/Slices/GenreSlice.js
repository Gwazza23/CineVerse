import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

const getMovieGenres = createAsyncThunk(
  "genre/getMovieGenres",
  async (thunkAPI) => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/genre/tv/list",
      { headers: { Authorization: `Bearer ${api_key}` } }
    );
    return response.data;
  }
);

const genreSlice = createSlice({
  name: "genre",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovieGenres.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMovieGenres.fulfilled, (state, action) => {
        state.status = "completed";
        state.data = action.payload.genres;
      })
      .addCase(getMovieGenres.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export { getMovieGenres };
export default genreSlice.reducer;
export const selectGenre = (state) => state.genre;
