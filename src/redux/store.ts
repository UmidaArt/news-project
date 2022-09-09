import { configureStore } from '@reduxjs/toolkit'
import newsReducer from '../redux/slices/newsSlice'
import usersReducer from '../redux/slices/usersSlice'

export const store = configureStore({
    reducer: {
        news: newsReducer,
        users: usersReducer
    }
})

export type AppDispatch = typeof store.dispatch