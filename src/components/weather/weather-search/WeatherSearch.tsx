import React from 'react';
import { Button, InputBase, Paper, Typography } from '@material-ui/core';
import { Search } from '@material-ui/icons'
import useStyles from './styles'
import useWeatherSearchService from './useWeatherSearch.service';

const WeatherSearch: React.FC = () => {    
    const classes = useStyles()

    const { handleBtnSearch, handleSearch } = useWeatherSearchService()
    
    return (
        <Paper elevation={2} className={classes.paper}>
          <Typography variant="subtitle1" className={classes.subtitle}>Consultar WOEID de uma Cidade</Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Nome da Cidade"
              id="inputSearch"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearch}
            />
            <Button variant="contained" color="primary" onClick={handleBtnSearch}>Consultar</Button>
          </div>
        </Paper>
      )
}

export default WeatherSearch;