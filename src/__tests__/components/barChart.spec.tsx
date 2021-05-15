import { render } from '@testing-library/react';
import React from 'react'
import BarChart from '../../components/weather/weather-graph/BarChart';

describe('Weather Graph', () => {
    it('should render graph', () => {
        render(
        <BarChart
            data={[10, 20, 30,10, 20, 30,10, 20, 30,10, 20, 30,10, 20, 30]}
            height={300}
            width={450}    
        />)

        expect(document.getElementById('graph')).toBeInTheDocument()
    })
});