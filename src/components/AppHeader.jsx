import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import './AppHeader.scss';

const AppHeader = () => (
  <AppBar position="static" color="default" styleName="header">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        To-do List
      </Typography>
    </Toolbar>
  </AppBar>
);

export default AppHeader;
