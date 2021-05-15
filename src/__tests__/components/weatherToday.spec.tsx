/* eslint-disable import/first */
jest.mock('../../request/api/Api')

import { render } from '@testing-library/react'
import WeatherToday from '../../components/weather/weather-today/WeatherToday'
import { Provider } from 'react-redux'
import { cities } from '../../__mocks__/mockCities'
import buildStore from '../../__mocks__/buildStore'

const setup = (initialState = {}) => {

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
        const initialState = {
            weatherResults: cities, 
            isLoading: true,
        }
        setup(initialState)

        expect(document.getElementById('loading')).toBeInTheDocument()
        
    })

    it('should render city corretly', () => {
        const initialState = {
            weatherResults: cities, 
            isLoading: false,
        }
        const { getByText } = setup(initialState)

        expect(document.getElementById('loading')).not.toBeInTheDocument()
        expect(getByText('Sao Jose De Ribamar, MA')).toBeInTheDocument()
        
    })
})