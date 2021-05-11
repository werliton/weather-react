import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { AppState } from "../../../store"

interface Today {
    city: string
    condition_slug: string
    temp: number
}

const useWeatherTodayService = () => {
    const [today, setToday] = useState<Today>({} as Today)

    const { weatherResults, isLoading } = useSelector((state: AppState) => state.weathers)

    useEffect(()=>{
      if(weatherResults){

        const { results } = weatherResults
          setToday({
            city: results?.city, 
            condition_slug: results?.condition_slug, 
            temp: results?.temp
          })
      }
    },[weatherResults])

    return {
        isLoading,
        today,
    }
}

export default useWeatherTodayService