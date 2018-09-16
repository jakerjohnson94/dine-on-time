import React, { Component } from 'react';
import { Typography, AppBar, Toolbar, IconButton, Grid } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import cameraIcon from './resources/camera-icon.svg';
import recipeImg1 from './resources/recipeRoot1.jpg';
import recipeImg2 from './resources/recipeRoot2.jpg';
import recipeImg3 from './resources/recipeRoot3.jpg';
import recipeImg4 from './resources/recipeRoot4.jpg';

import Slider from 'react-slick';
import './App.css';

import { appBlue, fontGreyPrimary, fontGreySecondary } from './resources/colors';
const style = {
  centerText: {
    textAlign: 'center',
    fontSize: '.7em',
    color: fontGreySecondary,
  },
  titleHeader: {
    marginTop: '.25em',
    marginBottom: '.25em',

    color: fontGreyPrimary,
  },
  headerBar: {
    backgroundColor: appBlue,
  },
  slider: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    paddingTop: '3em',
  },
};
class App extends Component {
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
        <Grid alignContent="center" alignItems="center" justify="center" container>
          <Grid item xs={12}>
            <Typography style={style.titleHeader} variant="display3" gutterBottom align="center">
              Dine on Time
            </Typography>
          </Grid>
          <Grid style={{ paddingBottom: '2em' }} item xs={12}>
            <Slider style={style.slider} dots={true}>
              <div>
                <img src={recipeImg1} />
              </div>
              <div>
                <img src={recipeImg2} />
              </div>
              <div>
                <img src={recipeImg3} />
              </div>
              <div>
                <img src={recipeImg4} />
              </div>
            </Slider>
          </Grid>
          <Grid item xs={12}>
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <img style={{ alignSelf: 'center' }} alt="camera icon" src={cameraIcon} />
            </div>
          </Grid>
          <Grid item xs={9}>
            <Typography style={style.centerText} variant="subheading">
              Click the Camera and scan the recipe QR code to begin
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography style={style.centerText} variant="subheading">
              No QR code reader?
              <a> Search the recipe by name</a>
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
