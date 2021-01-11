import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const theme_ = createMuiTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: {
      main: '#004d40',
    },
    secondary: {
      main: '#1b5e20',
    },
  },
  style: {
    fontSize: 22,
    color: 'white',
    shrink: true,
  }
});


function theme(props) {
  // console.log = console.warn = console.error = () => {};

  // console.error('Wczyszczenie warningów Reacta');
  return (
    <ThemeProvider theme={theme_}>
      {props.children}
    </ThemeProvider>
  )
}

export default theme;