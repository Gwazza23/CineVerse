import {configureStore} from '@reduxjs/toolkit'

import MovieListReducer from './Slices/MovieListSlice'
import GenreReducer from './Slices/GenreSlice'
import MoviesReducer from './Slices/MoviesSlice'
const store = configureStore({
    reducer:{
        lists: MovieListReducer,
        genre: GenreReducer,
        movies: MoviesReducer
    }
})

export default store