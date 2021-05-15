import { WeatherResponse } from "../../store/interfaces/IWeather";
import Api from "./Api";

const getCityByName = async (cityName: string): Promise<WeatherResponse> => {
    
    const url = `weather?format=json-cors&key=${process.env.REACT_APP_KEY_API}&city_name=${cityName}`

    const { data } = await Api.get<WeatherResponse>(url)
    
    return data
}

const getCityByWoeId = async (id: string | undefined): Promise<WeatherResponse> => {
    
    const url = `weather?format=json-cors&woeid=${id}`

    const { data } = await Api.get<WeatherResponse>(url)
    
    return data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getCityByName,
    getCityByWoeId
}