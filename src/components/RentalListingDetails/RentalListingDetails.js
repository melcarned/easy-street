import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import styles from './RentalListingDetails.styles';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const RentalListingDetails = ({ classes, openViewPost, postContent, handleClose }) => {
  return (
    <Dialog
      fullScreen
      open={openViewPost}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" onClick={handleClose} aria-label="Close">
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.postDetails}>
        <Typography >
          {postContent.author}
        </Typography>
        <Typography >
          {postContent.title}
        </Typography>
        <Typography >
          {postContent.content}
        </Typography>
      </div>
    </Dialog>
  );
}

export default withStyles(styles)(RentalListingDetails);