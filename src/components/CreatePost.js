import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import Input from '@material-ui/core/Input';

import Header from './Header/Header';

const styles = {
  postFeed: {
    backgroundColor: '#ddd'
  },
  post: {
    marginBottom: '0.5em',
    // border: '1px solid #bbb'
  },
  postDetails: {
    marginTop: '40px'
  }
}

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const CreatePost = ({ classes, openCreatePost, handleClose }) => {
  const textPostForm = {};
  const imagePostForm = {};
  const linkPostForm = {};

  console.log(openCreatePost);
  return (
    <Dialog
      fullScreen
      open={openCreatePost}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" onClick={handleClose} aria-label="Close">
            <CloseIcon />
          </IconButton>
          Link Post
          <IconButton color="inherit" onClick={handleClose} aria-label="Close">
            Post
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.postDetails}>
        <Input
          defaultValue="ME"
          className={classes.input}
          inputProps={{
            'aria-label': 'Author',
          }}
        />
        <Input
          defaultValue="title"
          className={classes.input}
          inputProps={{
            'aria-label': 'An interesting title',
          }}
        />
        <Input
          multiline="true"
          defaultValue="title"
          rowMax="10"
          className={classes.input}
          inputProps={{
            'aria-label': 'An interesting title',
          }}
        />
      </div>
    </Dialog>
  );
}

export default withStyles(styles)(CreatePost);