import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

const getPopularMovies = createAsyncThunk(
  "lists/getPopularMovies",
  async (page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
      { headers: { Authorization: `Bearer ${api_key}` } }
    );
    return response.data;
  }
);

const getUpcomingMovies = createAsyncThunk(
  "lists/getUpcomingMovies",
  async (page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`,
      { headers: { Authorization: `Bearer ${api_key}` } }
    );
    return response.data;
  }
);

const getTopRatedMovies = createAsyncThunk(
  "lists/getTopRatedMovies",
  async (page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
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
    upcoming: [],
    topRated: [],
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
      })
      .addCase(getUpcomingMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUpcomingMovies.fulfilled, (state, action) => {
        state.status = "loading";
        state.upcoming = action.payload.results;
      })
      .addCase(getUpcomingMovies.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(getTopRatedMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTopRatedMovies.fulfilled, (state, action) => {
        state.status = "completed";
        state.topRated = action.payload.results;
      })
      .addCase(getTopRatedMovies.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export {
  getPopularMovies,
  getMoviesByGenre,
  getMoviesNowPlaying,
  getUpcomingMovies,
  getTopRatedMovies
};
export default MovieListSlice.reducer;
export const selectLists = (state) => state.lists;
