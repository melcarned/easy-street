import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import NewRentalListingForm from '../NewRentalListingForm/NewRentalListingForm';
import styles from './Header.style';

function Header(props) {
  const { classes, handleClickNewPost } = props;
  // const [anchorEl, setAnchorEl] = useState(props.anchorEl);

  return (
    <>
      <AppBar className={classes.header} square elevation={2} position="fixed">
        <Toolbar>
          <HomeIcon />
          <Typography className={classes.headerLabel} variant="h6" color="inherit">
            <span>EasyStreet</span>
          </Typography>
          <IconButton className={classes.addListingButton} onClick={handleClickNewPost} color="inherit">
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.headerAdjustment} />
      <NewRentalListingForm />
    </>
  );
};

export default withStyles(styles)(Header);