import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { AppState } from "../../../store"
import { Forecast } from "../../../store/interfaces/IWeather"

const useWeatherGraphService = () => {
    const [forecast, setForecast] = useState<Forecast[]>([] as Forecast[])

    const { weatherResults, isLoading } = useSelector((state: AppState) => state.weathers)

    useEffect(()=>{
      if(weatherResults){
        const { results } = weatherResults
        const forecastTreated = getOnlyValidDay(results?.forecast)
        setForecast(forecastTreated)
      }
    },[weatherResults])

    function getOnlyValidDay(forecast: Forecast[]){
      return forecast?.slice(1,7)
    }

    return {
        isLoading,
        forecast,
    }
}

export default useWeatherGraphService