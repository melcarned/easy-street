import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import RentalListingFeed from './components/RentalListingFeed/RentalListingFeed';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#032765',
    },
    secondary: {
      main: '#0380C5',
    },
  }
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
