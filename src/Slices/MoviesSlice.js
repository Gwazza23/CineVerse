import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY;

const getMovieDetails = createAsyncThunk(
    "movies/getMovieDetails",
    async(id) => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}`,
            {headers: { Authorization: `Bearer ${api_key}` } }
        );
        return response.data;
    }
);

const getMovieReviews = createAsyncThunk(
    "movies/getMovieReviews",
    async({id,page}) => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=${page}`,
            {headers: { Authorization: `Bearer ${api_key}` } }
        );
        return response.data;
    }
)

const MovieSlice= createSlice({
    name: 'movies',
    initialState: {
        movie: [],
        reviews: [],
        status: "idle",
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovieDetails.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getMovieDetails.fulfilled, (state,action) => {
                state.status = "completed";
                state.movie = action.payload;
            })
            .addCase(getMovieDetails.rejected, (state,action) => {
                state.status = 'error';
                state.error = action.error.message;
            })
            .addCase(getMovieReviews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase( getMovieReviews.fulfilled, (state,action) => {
                state.status = 'completed';
                state.reviews = action.payload;
            })
            .addCase(getMovieReviews.rejected, (state,action) => {
                state.status = 'error';
                state.error = action.error.message;
            })
    }
})

export {
    getMovieDetails,
    getMovieReviews
}

export default MovieSlice.reducer;
export const selectMovies = (state) => state.movies;