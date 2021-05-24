import { render } from '@testing-library/react';
import React from 'react'
import { Provider } from 'react-redux';
import BarChart from '../../components/weather/weather-graph/BarChart';
import { WeatherResponse } from '../../store/interfaces/IWeather';
import { WeatherState } from '../../store/weather.slice';
import buildStore from '../../__mocks__/buildStore';
import { cities } from '../../__mocks__/mockCities';

describe('Weather Graph', () => {
    it('should render graph', () => {
        const data = [10, 20, 30,10, 20, 30,10, 20, 30,10, 20, 30,10, 20, 30]
        const initialState: WeatherState = {
            weatherResults: cities as unknown as WeatherResponse, 
            isLoading: true,
            error: null
        }
        let store = buildStore(initialState)

        render(
            <Provider store={store}>
                <BarChart
                    data={data}
                    height={300}
                    width={450}
                />
            </Provider>
        )

        expect(document.getElementById('graph')).not.toBeInTheDocument()
    })
});