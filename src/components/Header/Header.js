import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import CreatePost from '../CreatePost';
import styles from './Header.style';

const Header = (props) => {
  const { classes, handleClickPost } = props;
  const [anchorEl, setAnchorEl] = useState(props.anchorEl);

  function handleActionMenuClick(event) {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar className={classes.header} square elevation={2} position="fixed">
        <Toolbar variant="dense">
          <Typography className={classes.headerLabel} variant="h6" color="inherit">
          <HomeIcon /><span>EasyStreet</span>
          </Typography>
          <IconButton onClick={handleClickPost}>
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.headerAdjustment} />
      <CreatePost />
    </>
  );
};

export default withStyles(styles)(Header);