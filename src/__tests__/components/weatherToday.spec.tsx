/* eslint-disable jest/no-mocks-import */
/* eslint-disable import/first */
jest.mock('../../request/api/Api')

import { render, screen } from '@testing-library/react'
import WeatherToday from '../../components/weather/weather-today/WeatherToday'
import { Provider } from 'react-redux'
import { cities } from '../../__mocks__/mockCities'
import buildStore from '../../__mocks__/buildStore'
import { WeatherState } from '../../store/weather.slice'
import { WeatherResponse } from '../../store/interfaces/IWeather'

const setup = (initialState: WeatherState) => {

    let store = buildStore(initialState)

    const resultRender = render(
        <Provider store={store}>
            <WeatherToday />
        </Provider>
    )

    return resultRender
}

describe('Weather Today', () => {
        
    it('should render with circular loading', () => {
        const initialState: WeatherState = {
            weatherResults: cities as unknown as WeatherResponse, 
            isLoading: true,
            error: null
        }
        setup(initialState)

        expect(document.getElementById('loading')).toBeInTheDocument()
        
    })

    it('should render city corretly', () => {
        const initialState: WeatherState = {
            weatherResults: cities as unknown as WeatherResponse, 
            isLoading: false,
            error: null
        }
        setup(initialState)

        expect(document.getElementById('loading')).not.toBeInTheDocument()
        expect(screen.getByText('Sao Jose De Ribamar, MA')).toBeInTheDocument()
        
    })
})