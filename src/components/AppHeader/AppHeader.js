import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styles from './AppHeader.style';

function AppHeader({ classes, leftContent, rightContent }) {
  return (
    <>
      <AppBar className={classes.header} square elevation={2} position="fixed">
        <Toolbar>
          {leftContent && leftContent()}
          {rightContent && rightContent()}
        </Toolbar>
      </AppBar>
      <div className={classes.headerAdjustment} />
    </>
  );
};

export default withStyles(styles)(AppHeader);