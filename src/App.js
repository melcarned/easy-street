import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import RentalListingFeed from './components/RentalListingFeed/RentalListingFeed';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#032765',
    },
    secondary: {
      main: '#D4ECFA',
    },
  }
});

function App() {
  return <>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <RentalListingFeed />
    </MuiThemeProvider>
  </>
}

export default App;
