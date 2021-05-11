import React from 'react';
import { Grid } from '@material-ui/core';
import WeatherSearch from './components/weather/weather-search/WeatherSearch';
import WeatherToday from './components/weather/weather-today/WeatherToday';
import WeatherGraph from './components/weather/weather-graph/WeatherGraph';
import BarChart from './components/weather/weather-graph/BarChart';
import { useSelector } from 'react-redux';
import { AppState } from './store';

function App() {
  
  const { weatherResults } = useSelector((state:AppState) => state.weathers)

  return (
      <Grid container justify="center" alignItems="center" spacing={3}>

        <Grid item xs={12}>
          <WeatherSearch />
        </Grid>

        { weatherResults.results && <WeatherResultsContainer /> }

      </Grid>
  );
}

const WeatherResultsContainer = () => (
  <>
    <Grid item xs={4}>
      <WeatherToday />
    </Grid>
    <Grid item xs={8}>
      <WeatherGraph />
    </Grid>
    <Grid item xs={12}>
      <BarChart
          data={[10, 20, 30]}
          height={300}
          width={450}
        />
    </Grid>
  </>
)

export default App;
