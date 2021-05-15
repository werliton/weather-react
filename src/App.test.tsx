import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import buildStore from './__mocks__/buildStore';
import { cities } from './__mocks__/mockCities';

test('renders learn react link', () => {
  render(
    <Provider store={buildStore({
        weatherResults: cities, 
        isLoading: true,
    }
    )}>
      <App />
    </Provider>
  )
  
  expect(document.getElementById('weatherContainer')).toBeInTheDocument();
});
