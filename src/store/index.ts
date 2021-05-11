import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import weatherSlice from './weather.slice'

export const rootReducer = combineReducers({
    weathers: weatherSlice
})

export type AppState = ReturnType<typeof rootReducer>

const store = configureStore({ reducer: rootReducer, devTools: true })

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, AppState, unknown, Action<string>>

export default store