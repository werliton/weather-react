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
        <Grid item xs={12}>
          { weatherResults.results && <WeatherResultsContainer /> }
        </Grid>

      </Grid>
  );
}
const data = [10, 20, 30,12, 45,36,20]

const WeatherResultsContainer = () => (
  <>
    <div id="weatherContainer">
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <WeatherToday />
        </Grid>
        <Grid item xs={8}>
          <WeatherGraph />
        </Grid>
      </Grid>
    </div>

    <div id="weatherGraph">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BarChart
              data={data}
              height={300}
              width={450}
            />
        </Grid>
      </Grid>
    </div>
  </>
)

export default App;
