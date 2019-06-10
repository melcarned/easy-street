import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import RentalListingFeed from './components/RentalListingFeed/RentalListingFeed';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#032765',
    },
    secondary: {
      main: '#fa6866',
    },
  },
});

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <RentalListingFeed />
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
