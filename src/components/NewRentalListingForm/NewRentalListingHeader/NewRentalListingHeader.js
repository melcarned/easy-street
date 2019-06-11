
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import AppHeader from '../../AppHeader/AppHeader';
import styles from './NewRentalListingHeader.style';

function NewRentalListingHeader({ classes, handleCloseNewRentalListingForm, handlePostRentalListing }) {
  function getLeftHeaderContent() {
    return <>
      <IconButton
        className={classes.closeButton}
        onClick={handleCloseNewRentalListingForm}
        color="inherit"
        aria-label="Close">
        <Close />
      </IconButton>
      <Typography
        className={classes.headerLabel}
        variant="h6"
        color="inherit">
        New Rental Listing
      </Typography>
    </>
  }

  function getRightHeaderContent() {
    return <IconButton
      className={classes.postRentalListingButton}
      onClick={handlePostRentalListing}
      type="submit"
      color="inherit"
      aria-label="Close">
      <Typography component="p" color="inherit">
        <strong>LIST</strong>
      </Typography>
    </IconButton>
  }

  return <AppHeader leftContent={getLeftHeaderContent} rightContent={getRightHeaderContent} />
}

export default withStyles(styles)(NewRentalListingHeader);