import React, { useState } from 'react';
import firebase from '../../firebaseConfig';
import { withStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import AddAPhoto from '@material-ui/icons/AddAPhoto';
import Collections from '@material-ui/icons/Collections';
import Explore from '@material-ui/icons/Explore';
import NewPostHeader from '../Header/NewPostHeader';
import styles from './NewRentalListing.styles';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function NewRentalListingForm({ classes, openCreatePost, handleClose }) {
  const [neighborhood, setNeighborhood] = useState('');
  const [numberOfBath, setNumberOfBath] = useState(0);
  const [numberOfBed, setNumberOfBed] = useState(0);
  const [rentalCompanyName, setRentalCompanyName] = useState('');

  function postRentalListing() {
    firebase
      .database()
      .ref('rentalListings')
      .push({
        neighborhood,
        bed: numberOfBed,
        bath: numberOfBath,
        listingCompany: rentalCompanyName
      });

      handleClose();
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

  return (
    <Dialog
      fullScreen
      open={openCreatePost || false}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <NewPostHeader
        handleClose={handleClose}
        handlePostRentalListing={postRentalListing}
      />
      <form className={classes.postDetails}>
        <TextField
          label="Neighborhood"
          onChange={handleNeighborhoodChange}
          value={neighborhood}
          fullWidth
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Beds"
          onChange={handleNumberOfBedChange}
          className={classes.textField}
          value={numberOfBed}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Bath"
          onChange={handleNumberOfBathChange}
          className={classes.textField}
          value={numberOfBath}
          margin="normal"
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          placeholder="Name of your rental company."
          onChange={handleRentalCompanyNameChange}
          value={rentalCompanyName}
          fullWidth
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      <div className={classes.photoIcons} >
        <div className={classes.getPhoto}>
          <input accept="image/*" className={classes.photoIcon} id="icon-button-camera" type="file" />
          <label htmlFor="icon-button-camera">
            <IconButton color="primary" component="span">
              <AddAPhoto />
            </IconButton>
          </label>
        </div>
        <div className={classes.getPhoto}>
          <input accept="image/*" className={classes.photoIcon} id="icon-button-file" type="file" />
          <label htmlFor="icon-button-file">
            <IconButton color="primary" component="span">
              <Collections />
            </IconButton>
          </label>
        </div>
      </div>
    </Dialog>
  );
}

export default withStyles(styles)(NewRentalListingForm);