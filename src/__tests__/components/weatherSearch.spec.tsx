/* eslint-disable import/first */
jest.mock('../../request/api/Api')

import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import store from '../../store'
import Api from '../../request/api/Api'
import WeatherSearch from '../../components/weather/weather-search/WeatherSearch'
import userEvent, { TargetElement } from '@testing-library/user-event'


let mockApi = Api as jest.Mocked<typeof Api>

const setup = () => {

    const resultRender = render(
        <Provider store={store}>
            <WeatherSearch />
        </Provider>
    )

    return resultRender
}

describe('Weather Today', () => {
    it('should render input value', () => {
        const { getByPlaceholderText, getByLabelText } = setup()
        
        expect(getByPlaceholderText('Nome da Cidade')).toBeInTheDocument()
        expect(getByLabelText('search')).toBeInTheDocument()

        userEvent.type(document.getElementById('inputSearch') as TargetElement, 'oi')

        expect(document.getElementById('inputSearch')).toHaveValue('oi')

    })

    it('should call fetch by id', () => {
        const { getByRole } = setup()
        const button = getByRole("button", { name: "Consultar"})
        const id = '12'

        expect(button).toBeInTheDocument()

        userEvent.type(document.getElementById('inputSearch') as TargetElement, id)

        userEvent.click(button)

        expect(mockApi.get).toHaveBeenCalledWith(`weather?format=json-cors&woeid=${id}`)
    })

    it('should call fetch by name', () => {
        const { getByRole } = setup()
        const button = getByRole("button", { name: "Consultar"})
        const cityName = 'Sao Luis'
        const key = process.env.REACT_APP_KEY_API

        expect(button).toBeInTheDocument()

        userEvent.type(document.getElementById('inputSearch') as TargetElement, cityName)

        userEvent.click(button)
        
        expect(mockApi.get).toHaveBeenCalledWith(`weather?format=json-cors&key=${key}&city_name=${encodeURI(cityName)}`)
    })
})