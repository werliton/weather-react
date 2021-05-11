import { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchCityById, fetchCityByName } from "../../../store/weather.slice"

const useWeatherSearchService = () => {

    const [searchInput, setSearchInput] = useState('')
    const dispatch = useDispatch()
    
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(e.target.value)
    }

    const handleBtnSearch = () => {
      const inputValue = Number(searchInput)
      
      if(isNaN(inputValue)){
        dispatch(fetchCityByName(searchInput))
      }else{
        dispatch(fetchCityById(searchInput))
      }
    }

    return {
        handleBtnSearch,
        handleSearch,
    }
}

export default useWeatherSearchService