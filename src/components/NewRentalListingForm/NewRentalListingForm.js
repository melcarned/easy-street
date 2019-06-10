/* eslint-disable no-undef */
import React, { useState } from 'react';
import firebase from '../../firebaseConfig';
import { withStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Collections from '@material-ui/icons/Collections';
import NewPostHeader from '../Header/NewPostHeader';
import styles from './NewRentalListing.styles';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function NewRentalListingForm({ classes, openNewRentalListing, handleClose }) {
  const [neighborhood, setNeighborhood] = useState('');
  const [numberOfBath, setNumberOfBath] = useState('');
  const [numberOfBed, setNumberOfBed] = useState('');
  const [rentalCompanyName, setRentalCompanyName] = useState('');
  const [listingImageURL, setListingImageURL] = useState('https://via.placeholder.com/350x150');
  const [listingImage, setListingImage] = useState({});
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');

  function clearNewListingForm() {
    setNeighborhood('');
    setNumberOfBath('');
    setNumberOfBed('');
    setRentalCompanyName('');
    setListingImageURL('https://via.placeholder.com/350x150');
    setListingImage({});
    setImagePreviewUrl('');
    handleClose();
  }

  function postRentalListing() {
    storeRentalImage();


    clearNewListingForm()
  }

  function storeRentalImage() {
    firebase
      .storage()
      .ref(`RentalListingImages/${listingImage.name}`)
      .put(listingImage)
      .on('state_changed',
        snapshot => {
          // const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          // console.log(progess);
          // setUploadProgress(progress);
        },
        error => {
          console.log(error)
        },
        () => {
          firebase
            .storage()
            .ref('RentalListingImages')
            .child(listingImage.name)
            .getDownloadURL()
            .then(url => {
              setListingImageURL(url);
              firebase
                .database()
                .ref('rentalListings')
                .push({
                  neighborhood,
                  bed: numberOfBed,
                  bath: numberOfBath,
                  listingCompany: rentalCompanyName,
                  listingImageURL
                })
            })
        })
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

  function handleRentalCompanyNameChange(event) {
    setRentalCompanyName(event.target.value);
  };

  function handleListingImageChange(event) {
    let fileReader = new FileReader();
    let file = event.target.files[0];

    fileReader.onloadend = () => {
      setListingImage(file);
      setImagePreviewUrl(fileReader.result);
    }

    fileReader.readAsDataURL(file);
  };

  return (
    <Dialog
      fullScreen
      open={openNewRentalListing || false}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <NewPostHeader
        handleClose={handleClose}
        handleListRentalAndClose={postRentalListing}
      />
      <form className={classes.newListingDetails}>
        <TextField
          className={classes.formField}
          placeholder="Neighborhood of apartment"
          label="Neighborhood of apartment"
          onChange={handleNeighborhoodChange}
          value={neighborhood}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="# of bedrooms"
          onChange={handleNumberOfBedChange}
          className={classes.formField}
          placeholder="# of bedrooms"
          value={numberOfBed}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="# of bathrooms"
          onChange={handleNumberOfBathChange}
          className={classes.formField}
          placeholder="# of bathrooms"
          value={numberOfBath}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Rental Company Name"
          className={classes.formField}
          placeholder="Name of your rental company"
          onChange={handleRentalCompanyNameChange}
          value={rentalCompanyName}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <div className={classes.formField}>
          {imagePreviewUrl ?
            <img
              src={imagePreviewUrl}
              alt="Uploaded rental property"
              width="100%"
            /> :
            <>
              <input
                onChange={handleListingImageChange}
                className={classes.photoPickerInput}
                id="icon-button-file"
                type="file" />
              <label htmlFor="icon-button-file">
                <Button
                  color="primary"
                  component="span"
                  variant="contained"
                  size="large">
                  <Collections />
                  <span className={classes.photoPickerButtonText}>Choose a photo</span>
                </Button>
              </label>
            </>
          }
        </div>
      </form>

    </Dialog >
  );
}

export default withStyles(styles)(NewRentalListingForm);