import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import PostFeed from './components/PostFeed';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Grid container spacing={16}>
          <PostFeed />
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
