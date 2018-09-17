import React, { Component } from 'react';
// css components
import { Typography, Grid } from '@material-ui/core';

//local components
// icons
import cameraIcon from '../../resources/camera-icon.svg';
// local images

//local css
import '../../App.css';
//color pallette import
import { appBlue, fontGreyPrimary, fontGreySecondary } from '../../resources/colors';
import ResponsiveRootSlider from '../ResponsiveRootSlider';
//app style
const style = {
  centerText: {
    textAlign: 'center',
    fontSize: '.7em',
    color: fontGreySecondary,
  },
  scanText: {
    textAlign: 'center',
    fontSize: '.7em',
    color: appBlue,
    paddingBottom: '1em',
  },
  titleHeader: {
    marginTop: '.25em',
    marginBottom: '.25em',

    color: fontGreyPrimary,
  },
  icon: {
    paddingTop: '3em',
  },
};
class RootContent extends Component {
  render() {
    return (
      <Grid alignContent="center" alignItems="center" justify="center" container>
        <Grid item xs={12}>
          <Typography style={style.titleHeader} variant="display3" gutterBottom align="center">
            Dine on Time
          </Typography>
        </Grid>

        <ResponsiveRootSlider />

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
          <Typography style={style.scanText} variant="subheading">
            Scan A Recipe Code
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography style={style.centerText} variant="subheading">
            No QR code reader?
            <a style={{ color: appBlue }}> Search the recipe by name</a>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default RootContent;
