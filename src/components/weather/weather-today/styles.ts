import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    paper:{
        padding: '2ch',
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
    },
    weather: {
      display:'flex',
      justifyContent: "space-between",
    },
    weatherStatus:{
      display:'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: "center",
    }
}))