import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import styles from './RentalListing.styles';

function RentalListing({ classes, rentalListing, handleClickPost }) {
  return (
    <Card className={classes.post} square elevation={2}>
      <CardActionArea onClick={handleClickPost}>
        <CardMedia
          style={{ height: 200 }}
          image='https://via.placeholder.com/350x150'
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="body1">
            <strong>{rentalListing.neighborhood}</strong>
          </Typography>
          <Typography gutterBottom variant="body1">
            {rentalListing.beds} beds - {rentalListing.baths} bath
          </Typography>
          <Typography gutterBottom variant="body1">
            {rentalListing.listingCompany}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>)
}

export default withStyles(styles)(RentalListing);