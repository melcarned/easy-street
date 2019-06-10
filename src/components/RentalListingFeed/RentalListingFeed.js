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
  const [viewingPost, setViewingPost] = useState(false);
  const [creatingPost, setCreatingPost] = useState(false);
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
      console.log(rentalListings);
    }, [JSON.stringify(rentalListings)]);

  function handleClickNewPost() {
    setCreatingPost(true);
    setAnchorEl(null);
  };

  function handleCloseCreatePost() {
    setCreatingPost(false);
  };

  function handleClickPost() {
    setViewingPost(true);
  };

  function handleClosePostView() {
    setViewingPost(false);
  };

  function getRentalListings() {
    const rentalListingComponents = Object.entries(rentalListings)
      .map(([key, rentalListing]) =>
        (<RentalListing
          key={key}
          rentalListing={rentalListing}
          handleClickPost={handleClickPost}
        />));

    return rentalListingComponents;
  }

  return (
    <React.Fragment>
      <Header
        anchorEl={anchorEl}
        handleClickPost={handleClickNewPost}
      />
      {getRentalListings()}
      <RentalListingDetails
        openViewPost={viewingPost}
        handleClose={handleClosePostView}
        postContent={{ ...rentalListings[0] }}
      />
      <NewRentalListingForm
        openCreatePost={creatingPost}
        handleClose={handleCloseCreatePost}
      />
    </React.Fragment>
  );
};

export default withStyles(styles)(RentalListingFeed);