import {configureStore} from '@reduxjs/toolkit'
import PopularReducer from './Slices/PopularSlice'
const store = configureStore({
    reducer:{
        popular: PopularReducer
    }
})

export default store