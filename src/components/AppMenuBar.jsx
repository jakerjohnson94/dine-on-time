import { appBlue } from '../resources/colors';
import React, { Component } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  MenuItem,
  Menu,
  Icon,
  Typography,
  Grid
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import history from '../history';

const style = {
  headerBar: {
    backgroundColor: appBlue
  },
  headerIcon: {
    color: 'white'
  }
};

class AppMenuBar extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleMenuClick = () => {
    history.goBack();
    this.setState({ anchorEl: null });
  };

  handleHomeClick = () => {
    history.push('/home');
    this.setState({ anchorEl: null });
  };
  render() {
    const { anchorEl } = this.state;
    return (
      <React.Fragment>
        <AppBar style={style.headerBar} position="static">
          <Toolbar>
            <Grid justify="space-between" container spacing={24}>
              <Grid item>
                <div>
                  <Button
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                  >
                    <Icon style={style.headerIcon}>local_dining</Icon>
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                  >
                    <MenuItem
                      to="/"
                      component={Link}
                      onClick={this.handleHomeClick}
                    >
                      Home
                    </MenuItem>
                  </Menu>
                </div>
              </Grid>
              <Grid item>
                <Typography
                  style={{ flex: 1, color: 'white' , marginTop: '0.4rem', fontFamily: 'Satisfy, cursive'}}
                  variant="headline"
                >
                  Dine On Time
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default AppMenuBar;
