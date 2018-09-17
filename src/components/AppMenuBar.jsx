import { appBlue } from '../resources/colors';
import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
const style = {
  headerBar: {
    backgroundColor: appBlue,
  },
};
class AppMenuBar extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar style={style.headerBar} position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default AppMenuBar;
