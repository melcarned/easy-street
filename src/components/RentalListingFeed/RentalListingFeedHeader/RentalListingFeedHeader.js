
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import AppHeader from '../../AppHeader/AppHeader';
import styles from './RentalListingFeedHeader.styles';

function RentalListingFeedHeader({ classes, handleClickNewRentalListing }) {
  function getLeftHeaderContent() {
    return <>
      <HomeIcon />
      <Typography className={classes.headerLabel} variant="h6" color="inherit">
        <span>EasyStreet</span>
      </Typography>
    </>
  }

  function getRightHeaderContent() {
    return <IconButton
      className={classes.addRentalListingButton}
      onClick={handleClickNewRentalListing}
      color="inherit"
      aria-label="Add listing">
      <AddIcon />
    </IconButton>
  }

  return <AppHeader leftContent={getLeftHeaderContent} rightContent={getRightHeaderContent} />
}

export default withStyles(styles)(RentalListingFeedHeader);