import { render } from '@testing-library/react'
import React from 'react'
import AppBar from '../../components/app-bar/AppBar'

const setup = () => {
    const resultRender = render(<AppBar />)

    return {
        title: resultRender.getByRole("heading", { level:6, name: 'Weather Challange' })
    }
}


describe('AppBar', () => {
    it('should render app', () => {
        const { title } = setup()

        expect(title).toBeInTheDocument()
    })
})