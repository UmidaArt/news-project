import { combineReducers, configureStore } from '@reduxjs/toolkit'
import newsReducer from '../redux/slices/newsSlice'
import usersReducer from '../redux/slices/usersSlice'

const rootReducer = combineReducers({
    usersReducer,
    newsReducer
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore['dispatch']