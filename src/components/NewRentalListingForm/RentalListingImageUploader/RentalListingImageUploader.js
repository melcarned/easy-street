import React, { useState } from 'react';
import Compress from 'client-compress';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Collections from '@material-ui/icons/Collections';
import styles from './RentalListingImageUploader.styles';

function RentalListingImageUploader({ classes, setRentalListingImage }) {
  const [showImagePreview, setShowImagePreview] = useState(false);

  function handleRentalListingImageChange(event) {
    const compressionOptions = {
      targetSize: 0.2,
      maxWidth: 512,
      maxHeight: 512
    };

    const compress = new Compress(compressionOptions);
    const files = [...event.target.files];

    compressRentalListingImage(compress, files);
  };

  function compressRentalListingImage(compress, files) {
    compress
      .compress(files)
      .then(conversions => {
        const { photo } = conversions[0];
        const objectUrl = URL.createObjectURL(photo.data);

        setRentalListingImage(photo.data);
        setShowImagePreview(true);

        const preview = document.querySelector('#image-preview');

        Compress
          .loadImageElement(preview, objectUrl)
          .then(() => {
            URL.revokeObjectURL(objectUrl);
          });
      })
  }

  function getImagePreview() {
    return <img
      id="image-preview"
      src=''
      alt="Uploaded rental property"
      width="100%" />
  }

  function getImageUploaderButton() {
    return <>
      <input
        onChange={handleRentalListingImageChange}
        className={classes.photoPickerInput}
        id="icon-button-file"
        type="file"
        aria-label="Photo picker"
      />
      <label htmlFor="icon-button-file">
        <Button
          color="primary"
          component="span"
          variant="contained"
          size="large"
          aria-label="Choose a photo">
          <Collections />
          <span className={classes.photoPickerButtonText}>Choose a photo</span>
        </Button>
      </label>
    </>
  }

  return (
    <div className={classes.rentalListingImageUploader}>
      {showImagePreview ?
        getImagePreview() :
        getImageUploaderButton()
      }
    </div>
  );
}

export default withStyles(styles)(RentalListingImageUploader);