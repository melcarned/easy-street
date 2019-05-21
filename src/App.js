import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import PostFeed from './components/PostFeed';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  // palette: {
  //   type: 'dark',
  // },
});

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Grid container spacing={16}>
            <PostFeed />
          </Grid>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
