import React, { useState } from 'react';
import uuidv4 from 'uuid/v4';
import firebase from '../../firebaseConfig';
import { withStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import NewRentalListingHeader from './NewRentalListingHeader/NewRentalListingHeader';
import RentalListingImageUploader from './RentalListingImageUploader/RentalListingImageUploader';
import styles from './NewRentalListing.styles';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function NewRentalListingForm({ classes, openNewRentalListing, handleCloseNewRentalListingForm }) {
  const [neighborhood, setNeighborhood] = useState('');
  const [numberOfBath, setNumberOfBath] = useState('');
  const [numberOfBed, setNumberOfBed] = useState('');
  const [rent, setRent] = useState('');
  const [rentalCompanyName, setRentalCompanyName] = useState('');
  const [rentalListingImage, setRentalListingImage] = useState({});

  function postRentalListing() {
    const imageId = uuidv4();

    firebase
      .storage()
      .ref(`RentalListingImages/listing_${imageId}`)
      .put(rentalListingImage)
      .on('state_changed',
        snapshot => { },
        error => {
          console.log("Error uploading image.", error);
        },
        () => {
          firebase
            .storage()
            .ref('RentalListingImages')
            .child(`listing_${imageId}`)
            .getDownloadURL()
            .then(url => {
              firebase
                .database()
                .ref('rentalListings')
                .push({
                  neighborhood,
                  bed: numberOfBed,
                  bath: numberOfBath,
                  rent,
                  listingCompany: rentalCompanyName,
                  listingImageURL: url
                })
              clearNewListingForm();
            })
        })
  }

  function clearNewListingForm() {
    setNeighborhood('');
    setNumberOfBath('');
    setNumberOfBed('');
    setRentalCompanyName('');
    setRent('');
    setRentalListingImage({});
    handleCloseNewRentalListingForm();
  }

  function handleNeighborhoodChange(event) {
    setNeighborhood(event.target.value);
  };

  function handleNumberOfBathChange(event) {
    setNumberOfBath(event.target.value);
  };

  function handleNumberOfBedChange(event) {
    setNumberOfBed(event.target.value);
  };

  function handleMonthlyRentChange(event) {
    setRent(event.target.value);
  }

  function handleRentalCompanyNameChange(event) {
    setRentalCompanyName(event.target.value);
  };

  return (
    <Dialog
      fullScreen
      open={openNewRentalListing || false}
      onClose={clearNewListingForm}
      TransitionComponent={Transition}
    >
      <NewRentalListingHeader
        handleCloseNewRentalListingForm={clearNewListingForm}
        handlePostRentalListing={postRentalListing}
      />
      <form className={classes.newRentalListingDetails}>
        <TextField
          className={classes.rentalListingFormField}
          placeholder="Neighborhood of apartment"
          label="Neighborhood"
          onChange={handleNeighborhoodChange}
          value={neighborhood}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="# of Bedrooms"
          onChange={handleNumberOfBedChange}
          className={classes.rentalListingFormField}
          placeholder="# of bedrooms"
          value={numberOfBed}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="# of Bathrooms"
          onChange={handleNumberOfBathChange}
          className={classes.rentalListingFormField}
          placeholder="# of bathrooms"
          value={numberOfBath}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Monthly Rent"
          onChange={handleMonthlyRentChange}
          className={classes.rentalListingFormField}
          placeholder="Monthy Rent"
          value={rent}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Rental Company Name"
          onChange={handleRentalCompanyNameChange}
          className={classes.rentalListingFormField}
          placeholder="Name of your rental company"
          value={rentalCompanyName}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <RentalListingImageUploader setRentalListingImage={setRentalListingImage} />
      </form>
    </Dialog >
  );
}

export default withStyles(styles)(NewRentalListingForm);