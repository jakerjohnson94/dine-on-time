import { appBlue } from '../resources/colors';
import React, { Component } from 'react';
import { AppBar, Toolbar, Button, MenuItem, Menu, Icon } from '@material-ui/core';
import { Link } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
const style = {
  headerBar: {
    backgroundColor: appBlue,
  },
};
class AppMenuBar extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <React.Fragment>
        <AppBar style={style.headerBar} position="static">
          <Toolbar>
            <div>
              <Button
                aria-owns={anchorEl ? 'simple-menu' : null}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <Icon style={{ color: 'white' }}>menu</Icon>
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem to="/scanner" component={Link} onClick={this.handleClose}>
                  Scanner
                </MenuItem>
                <MenuItem to="/" component={Link} onClick={this.handleClose}>
                  Home
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default AppMenuBar;
