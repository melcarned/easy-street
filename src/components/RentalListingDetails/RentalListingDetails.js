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

function RentalListingDetails({ classes, openListingDetails, rentalListing, handleClose }) {
  const { neighborhood, bed, bath, listingCompany} = rentalListing;
  
  return (
    <Dialog
      fullScreen
      open={openListingDetails}
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
      <div className={classes.listingContainer}>
        <img className={classes.listingImage} src={rentalListing.listingImageURL} alt="" />
        <div className={classes.listingDetails}>
          <Typography gutterBottom variant="body1" className={classes.neighborhoodTag}>
            <strong>{neighborhood && neighborhood.toUpperCase()}</strong>
          </Typography>
          <Typography gutterBottom variant="body1">
            {bed} beds <strong>&#183;</strong> {bath} bath
          </Typography>
          <Typography gutterBottom variant="body1">
            {listingCompany}
          </Typography>
        </div>
      </div>
    </Dialog>
  );
}

export default withStyles(styles)(RentalListingDetails);