import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from './RentalListing.styles';

function RentalListing({ classes, rentalListing, handleClickRentalListing }) {
  const { neighborhood, bed, bath, rent, listingCompany, listingImageURL } = rentalListing;
  const rentalListingTitle = `${neighborhood} - ${bed} - ${bath}`

  return (
    <Card className={classes.rentalListingCard} square elevation={2}>
      <CardActionArea onClick={handleClickRentalListing} aria-label="Rental">
        <CardMedia
          style={{ height: 200 }}
          image={listingImageURL}
          title={rentalListingTitle}
        />
        <CardContent className={classes.rentalListingDetails}>
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
        </CardContent>
      </CardActionArea>
    </Card>)
}

export default withStyles(styles)(RentalListing);