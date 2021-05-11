import { fade, makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    paper:{
      padding: '1.3ch',
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
}))