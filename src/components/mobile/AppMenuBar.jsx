import { appBlue } from '../../resources/colors';
import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
            <Link style={{ color: 'white' }} to={'/'}>
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default AppMenuBar;
