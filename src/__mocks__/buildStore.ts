import { configureStore } from "@reduxjs/toolkit"
import weatherSlice, { WeatherState } from "../store/weather.slice"

const buildStore = (initialState: WeatherState) => configureStore({
    reducer: {
        weathers: weatherSlice  
    }, preloadedState: {
        weathers: initialState 
    }
})

export default buildStore