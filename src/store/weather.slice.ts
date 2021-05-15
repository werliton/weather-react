import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from ".";
import { WeatherResponse } from "./interfaces/IWeather";
import { Request } from "./interfaces/IRequest";
import api from "../request/api/weather.api";
import CacheService from "../service/cache.service";

export interface WeatherState extends Request {
    weatherResults: WeatherResponse
}

const WeatherInitialState = {
    weatherResults: {},
    isLoading: false,
    error: null
} as WeatherState

const startLoading = (state: WeatherState) => {
    state.isLoading = true
}

const loadingFailed = (state: WeatherState, action: PayloadAction<string>) => {
    state.isLoading = false
    state.error = action.payload
}

const weather = createSlice({
    name: 'weather',
    initialState: WeatherInitialState,
    reducers: {
        getWeatherRequest: startLoading,
        getWeatherSuccess(state, { payload }: PayloadAction<WeatherResponse>){
            state.weatherResults = payload
            state.isLoading = false
        },
        getWeatherFailure: loadingFailed
    }
})

export const {
    getWeatherRequest,
    getWeatherSuccess,
    getWeatherFailure,
} = weather.actions

export default weather.reducer

// Thunks Actions
export const fetchCityById = (id: string): AppThunk => async (dispatch, getState) => {
    
    try{
        dispatch(getWeatherRequest())
        const cities = await api.getCityByWoeId(id)

        CacheService.setCookie(cities?.results?.city_name)

        dispatch(getWeatherSuccess(cities))
    }catch(error){
        dispatch(getWeatherFailure(error.toString()))
    }
}

export const fetchCityByName = (cityName: string): AppThunk => async (dispatch, getState) => {
    // const cityState = getState().weathers?.weatherResults?.results?.city_name

    // if(!CacheService.alreadyCached(cityState)){
        try{
            dispatch(getWeatherRequest())
            const cities = await api.getCityByName(encodeURI(cityName))
            
            CacheService.setCookie(cities?.results?.city_name)

            dispatch(getWeatherSuccess(cities))
        }catch(error){
            dispatch(getWeatherFailure(error.toString()))
        }
    // }
}