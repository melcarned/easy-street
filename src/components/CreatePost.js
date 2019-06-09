import React, { useState } from 'react';
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
import NewPostHeader from './Header/NewPostHeader';

const styles = (theme) => ({
  postFeed: {
    backgroundColor: '#ddd'
  },
  post: {
    marginBottom: '0.5em',
    // border: '1px solid #bbb'
  },
  postDetails: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  photoIcon: {
    display: 'none'
  },
  photoIcons: {

  },
  getPhoto: {

  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function CreatePost({ classes, openCreatePost, handleClose }) {
  const [age, setAge] = useState(0);

  function handleChange(event) {
    setAge(event.target.value);
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
      />
      <form className={classes.postDetails}>
        {/* <Select
          className={classes.textField}
          value={age}
          onChange={handleChange}
          displayEmpty
          fullWidth
          name="age"
        // className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}><Explore />Ten</MenuItem>
          <MenuItem value={20}><Explore />Twenty</MenuItem>
          <MenuItem value={30}><Explore />Thirty</MenuItem>
        </Select> */}
        <TextField
          className={classes.textField}
          placeholder="Your name"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          className={classes.textField}
          placeholder="An interesting caption"
          multiline
          fullWidth
          InputLabelProps={{
            shrink: true,
            ariaLabel: 'An interesting title',
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

export default withStyles(styles)(CreatePost);