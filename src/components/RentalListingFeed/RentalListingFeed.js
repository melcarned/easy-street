import React, { useState, useEffect } from 'react';
import firebase from '../../firebaseConfig';
import { withStyles } from '@material-ui/core/styles';

import Header from '../Header/Header';
import RentalListing from './RentalListing/RentalListing';
import RentalListingDetails from '../RentalListingDetails/RentalListingDetails';
import NewRentalListingForm from '../NewRentalListingForm/NewRentalListingForm';
import styles from './RentalListingFeed.styles';

function RentalListingFeed({ classes }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [viewingListingDetails, setViewingListingDetails] = useState(false);
  const [currentListingDetails, setCurrentListingDetails] = useState({});
  const [creatingRentalListing, setCreatingRentalListing] = useState(false);
  const [rentalListings, setRentalListings] = useState([]);

  useEffect(
    () => {
      firebase
        .database()
        .ref('rentalListings')
        .on('value',
          snapshot => setRentalListings(snapshot.val()),
          error => console.log("Error fetching rental listings.", error)
        );
    }, [JSON.stringify(rentalListings)]);

  function handleClickNewPost() {
    setCreatingRentalListing(true);
    setAnchorEl(null);
  };

  function handleCloseCreatePost() {
    setCreatingRentalListing(false);
  };

  function handleClickPost(rentalListing) {
    console.log(rentalListing);
    setViewingListingDetails(true);
    setCurrentListingDetails(rentalListing);
  };

  function handleClosePostView() {
    setViewingListingDetails(false);
  };

  function getRentalListings() {
    const rentalListingComponents = Object.entries(rentalListings)
      .reverse()
      .map(([key, rentalListing]) =>
        (<RentalListing
          key={key}
          rentalListing={rentalListing}
          handleClickPost={() => handleClickPost(rentalListing)}
        />));

    return rentalListingComponents;
  }

  return (
    <>
      <Header
        anchorEl={anchorEl}
        handleClickNewPost={handleClickNewPost}
      />
      {getRentalListings()}
      <RentalListingDetails
        openListingDetails={viewingListingDetails}
        handleClose={handleClosePostView}
        rentalListing={currentListingDetails}
      />
      <NewRentalListingForm
        openNewRentalListing={creatingRentalListing}
        handleClose={handleCloseCreatePost}
      />
    </>
  );
};

export default withStyles(styles)(RentalListingFeed);