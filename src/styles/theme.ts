import { createMuiTheme } from '@material-ui/core';
import { ptBR } from '@material-ui/core/locale';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: 'rgb(96, 179, 223)',
      contrastText: '#fff',
    },
    secondary: {
      main: 'rgb(82, 136, 172)',
      contrastText: '#fff',
    },
  },
}, ptBR);

export default theme;
