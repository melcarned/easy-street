import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from './RentalListing.styles';

function RentalListing({ classes, rentalListing, handleClickPost }) {
  const rentalListingTitle = `${rentalListing.neighborhood} - ${rentalListing.beds} - ${rentalListing.baths}`
  
  return (
    <Card className={classes.post} square elevation={2}>
      <CardActionArea onClick={handleClickPost}>
        <CardMedia
          style={{ height: 200 }}
          image={rentalListing.listingImageURL}
          title={rentalListingTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" className={classes.neighborhoodTag}>
            <strong>{rentalListing.neighborhood.toUpperCase()}</strong>
          </Typography>
          <Typography gutterBottom variant="body1">
            {rentalListing.bed} beds <strong>&#183;</strong> {rentalListing.bath} bath
          </Typography>
          <Typography gutterBottom variant="body1">
            {rentalListing.listingCompany}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>)
}

export default withStyles(styles)(RentalListing);