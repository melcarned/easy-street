import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import CreatePost from '../NewRentalListingForm/NewRentalListingForm';
import styles from './Header.style';

const NewPostHeader = (props) => {
  const { classes, handleClose, handlePostRentalListing } = props;

  return (
    <>
      <AppBar square elevation={2}>
        <Toolbar variant="dense">
          <IconButton color="inherit" onClick={handleClose} aria-label="Close">
            <Close />
          </IconButton>
          <Typography className={classes.headerLabel} variant="h6">New Rental Listing</Typography>
          <IconButton color="inherit" onClick={handlePostRentalListing} aria-label="Close">
            <Typography component="p">LIST</Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.headerAdjustment} />
      <CreatePost />
    </>
  );
};

export default withStyles(styles)(NewPostHeader);