import React from 'react';
import { CircularProgress, Grid, Paper, Tooltip, Typography } from '@material-ui/core';
import useStyles from './styles'
import { Forecast } from '../../../store/interfaces/IWeather';
import useWeatherGraphService from './useWeatherGraph.service';
import Condition from '../../../providers/Condition';

const WeatherGraph: React.FC = () => {
    const classes = useStyles()

    const { forecast, isLoading } = useWeatherGraphService()

    return (
        <Paper elevation={3} className={classes.paper}>
          <Grid container spacing={2} justify="space-around" alignItems="center">
            { isLoading ? <CircularProgress color="inherit" size={30} />
              : forecast?.map(fore => <WeatherGraphItem {...fore} key={fore.weekday} />) 
            }
          </Grid>
        </Paper>
      )
}

const WeatherGraphItem: React.FC<Forecast> = ({ ...forecast }) => (
  <Grid item xs>
    <Grid container justify="center" direction="column" alignItems="center">
      <Tooltip title={forecast.description}>
        <Typography>{forecast.weekday} - {forecast.date}</Typography>
      </Tooltip>

      <Condition condition={forecast.condition} />

      <Typography>{forecast.max}º C</Typography>
      <Typography>{forecast.min}º C</Typography>
    </Grid>
  </Grid>
)
export default WeatherGraph;