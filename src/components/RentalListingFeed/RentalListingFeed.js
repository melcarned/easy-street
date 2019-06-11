import React, { useState, useEffect } from 'react';
import firebase from '../../firebaseConfig';
import RentalListingFeedHeader from './RentalListingFeedHeader/RentalListingFeedHeader';
import RentalListing from './RentalListing/RentalListing';
import RentalListingDetails from '../RentalListingDetails/RentalListingDetails';
import NewRentalListingForm from '../NewRentalListingForm/NewRentalListingForm';

function RentalListingFeed() {
  const [viewingRentalListingDetails, setViewingRentalListingDetails] = useState(false);
  const [currentRentalListingDetails, setCurrentRentalListingDetails] = useState({});
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

  function handleClickNewRentalListing() {
    setCreatingRentalListing(true);
  };

  function handleCloseNewRentalListingForm() {
    setCreatingRentalListing(false);
  };

  function handleClickRentalListing(rentalListing) {
    setViewingRentalListingDetails(true);
    setCurrentRentalListingDetails(rentalListing);
  };

  function handleCloseRentalListingDetails() {
    setViewingRentalListingDetails(false);
  };

  function getRentalListings() {
    const rentalListingComponents = Object.entries(rentalListings)
      .reverse()
      .map(([key, rentalListing]) =>
        (<RentalListing
          key={key}
          rentalListing={rentalListing}
          handleClickRentalListing={() => handleClickRentalListing(rentalListing)}
        />));

    return rentalListingComponents;
  }

  return (
    <>
      <RentalListingFeedHeader
        handleClickNewRentalListing={handleClickNewRentalListing}
      />
      {rentalListings && getRentalListings()}
      <RentalListingDetails
        openListingDetails={viewingRentalListingDetails}
        handleCloseRentalListingDetails={handleCloseRentalListingDetails}
        rentalListing={currentRentalListingDetails}
      />
      <NewRentalListingForm
        openNewRentalListing={creatingRentalListing}
        handleCloseNewRentalListingForm={handleCloseNewRentalListingForm}
      />
    </>
  );
};

export default RentalListingFeed;