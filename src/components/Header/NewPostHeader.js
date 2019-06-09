import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import CreatePost from '../CreatePost';
import styles from './Header.style';

const NewPostHeader = (props) => {
  const { classes, handleClose } = props;

  return (
    <>
      <AppBar square elevation={1}>
        <Toolbar variant="dense">
          <IconButton color="inherit" onClick={handleClose} aria-label="Close">
            <Close />
          </IconButton>
          <Typography className={classes.headerLabel} variant="h6">New post</Typography>
          <IconButton color="inherit" onClick={handleClose} aria-label="Close">
            <Typography component="p">SHARE</Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.headerAdjustment} />
      <CreatePost />
    </>
  );
};

export default withStyles(styles)(NewPostHeader);