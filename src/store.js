import {configureStore} from '@reduxjs/toolkit'

import MovieListReducer from './Slices/MovieListSlice'
import GenreReducer from './Slices/GenreSlice'
const store = configureStore({
    reducer:{
        lists: MovieListReducer,
        genre: GenreReducer
    }
})

export default store