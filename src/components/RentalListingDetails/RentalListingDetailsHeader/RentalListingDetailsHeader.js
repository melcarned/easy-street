
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AppHeader from '../../AppHeader/AppHeader';
import styles from './RentalListingDetailsHeader.style';

function RentalListingFeedHeader({ classes, handleCloseRentalListingDetails }) {
  function getLeftHeaderContent() {
    return <IconButton
      className={classes.closeButton}
      onClick={handleCloseRentalListingDetails}
      color="inherit"
      aria-label="Close">
      <CloseIcon />
    </IconButton>
  }

  return <AppHeader leftContent={getLeftHeaderContent} />
}

export default withStyles(styles)(RentalListingFeedHeader);