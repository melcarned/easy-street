import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import RentalListingDetailsHeader from './RentalListingDetailsHeader/RentalListingDetailsHeader';
import styles from './RentalListingDetails.styles';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function RentalListingDetails({ classes, openListingDetails, rentalListing, handleCloseRentalListingDetails }) {
  const { neighborhood, bed, bath, rent, listingCompany } = rentalListing;

  return (
    <Dialog
      fullScreen
      open={openListingDetails}
      onClose={handleCloseRentalListingDetails}
      TransitionComponent={Transition}
    >
      <RentalListingDetailsHeader
        handleCloseRentalListingDetails={handleCloseRentalListingDetails}
      />
      <img className={classes.rentalListingImage} src={rentalListing.listingImageURL} alt="" />
      <div className={classes.rentalListingDetails}>
        <div>
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
        <div>
          <Typography gutterBottom variant="subtitle1" className={classes.priceTag}>
            <strong>{rent && `$${rent}`}</strong>
          </Typography>
        </div>
      </div>
    </Dialog>
  );
}

export default withStyles(styles)(RentalListingDetails);