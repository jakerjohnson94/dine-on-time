import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// css components
import { Typography, Grid, Button } from '@material-ui/core';
import ResponsiveRootSlider from '../ResponsiveRootSlider';
//local components

// icons
import qrBtnIcon from '../../resources/qrBtnIcon.svg';
// local images

//local css
import '../../App.css';
//color pallette import
import { appBlue, fontGreyPrimary, fontGreySecondary } from '../../resources/colors';

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
  centerImage: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '1em',
  },
  link: {
    color: appBlue,
  },
};
class RootContent extends Component {
  render() {
    return (
      <Grid alignContent="center" alignItems="center" justify="center" container>
        <Grid item xs={12}>
          <Typography style={style.titleHeader} variant="display2" gutterBottom align="center">
            Dine on Time
          </Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <ResponsiveRootSlider />
        </Grid>

        <Grid item xs={12}>
          <div style={style.centerImage}>
            <Link to="/scanner">
              <img alt="camera icon" src={qrBtnIcon} />
            </Link>
          </div>
          <Link to="/scanner" style={{ textDecoration: 'none' }}>
            <Typography style={style.scanText} variant="subheading">
              Scan A Recipe Code
            </Typography>
          </Link>
        </Grid>

        <Grid item xs={9}>
          <Typography style={style.centerText} variant="subheading">
            No QR code reader?
            <a style={style.link}> Search the recipe by name</a>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default RootContent;
