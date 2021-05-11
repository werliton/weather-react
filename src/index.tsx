import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store'
import Routes from './routes'
import Wrapper from './components/wrapper/Wrapper';
import { ThemeProvider } from '@material-ui/styles';
import theme from './styles/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Wrapper>
        <Routes />
      </Wrapper>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
reportWebVitals();
