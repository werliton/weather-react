import React from 'react';
import { CircularProgress, Paper, Typography } from '@material-ui/core';
import useStyles from './styles'
import useWeatherTodayService from './useWeatherToday.service';
import Condition from '../../../providers/Condition';

const WeatherToday: React.FC = () => {
    const classes = useStyles()
    
    const { isLoading, today } = useWeatherTodayService()    

    return (
        <Paper elevation={2} className={classes.paper}>
          {isLoading ? <CircularProgress id="loading" color="inherit" size={20} /> : <Typography>{today?.city }</Typography>}
            
          <div className={classes.weather}>
            {isLoading ? <CircularProgress color="inherit" size={20} /> : <Typography variant="h2">{today?.temp} ºC</Typography>}

            <div className={classes.weatherStatus}>
              <Condition condition={today?.condition_slug} size={45} />
              {/* <Typography>{isLoading ? <CircularProgress color="inherit" size={20} /> : today?.condition_slug}</Typography> */}
            </div>
          </div>
        </Paper>
      )
}

export default WeatherToday;