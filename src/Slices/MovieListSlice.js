import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

const getPopularMovies = createAsyncThunk(
  "lists/getPopularMovies",
  async (thunkAPI) => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      { headers: { Authorization: `Bearer ${api_key}` } }
    );
    return response.data;
  }
);

const getMoviesByGenre = createAsyncThunk(
  "lists/getMoviesByGenre",
  async (genreId) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`,
      { headers: { Authorization: `Bearer ${api_key}` } }
    );
    return response.data.results[0];
  }
);

const getMoviesNowPlaying = createAsyncThunk(
  "lists/getMoviesNowPlaying",
  async (genreId) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing`,
      { headers: { Authorization: `Bearer ${api_key}` } }
    );
    return response.data;
  }
);

const MovieListSlice = createSlice({
  name: "lists",
  initialState: {
    popular: [],
    genre: [],
    nowPlaying: [],
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
        state.popular = action.payload.results;
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(getMoviesByGenre.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMoviesByGenre.fulfilled, (state, action) => {
        state.status = "completed";
        state.genre.push(action.payload);
      })
      .addCase(getMoviesByGenre.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(getMoviesNowPlaying.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMoviesNowPlaying.fulfilled, (state, action) => {
        state.status = "completed";
        state.nowPlaying = action.payload.results;
      })
      .addCase(getMoviesNowPlaying.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export { getPopularMovies, getMoviesByGenre, getMoviesNowPlaying };
export default MovieListSlice.reducer;
export const selectLists = (state) => state.lists;
