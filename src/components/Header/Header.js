import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreIcon from '@material-ui/icons/MoreVert';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import EditIcon from '@material-ui/icons/Edit';
import LinkIcon from '@material-ui/icons/Link';
import CreatePost from '../CreatePost';
import styles from './Header.style';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: props.anchorEl
    };
  }

  handleActionMenuClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    return (
      <React.Fragment>
        <AppBar className={classes.header} square elevation={1} position="fixed">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
            <CameraAltIcon />Grams
            </Typography>
            <div>
              <IconButton onClick={this.props.handleClickPost}>
                <AddPhotoAlternateIcon />
              </IconButton>
              {/* <IconButton
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup="true"
                onClick={this.handleActionMenuClick}
                color="inherit">
                <MoreIcon />
              </IconButton> */}
            </div>
          </Toolbar>
        </AppBar>
        {/* <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          square
          className={classes.actionMenu}
        >
          <MenuItem onClick={this.props.handleClickPost}><LinkIcon />Post Link</MenuItem>
          <MenuItem onClick={this.props.handleClickPost}><CameraAltIcon />Post Image</MenuItem>
          <MenuItem onClick={this.props.handleClickPost}><EditIcon />Post Text</MenuItem>
        </Menu> */}
        <CreatePost

        />
      </React.Fragment>
    );
  }

}

export default withStyles(styles)(Header);