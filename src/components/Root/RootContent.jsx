import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// css components
import { Typography, Grid, Hidden } from '@material-ui/core';
import ResponsiveRootSlider from '../ResponsiveRootSlider';
//local components

// icons
// local images
import scanButtonIcon from '../../resources/images/qrBtnIcon.svg';

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
  scanTextDesktop: {
    textAlign: 'center',
    fontSize: '1.2em',
    color: appBlue,
    paddingBottom: '1em',
    paddingTop: '1em',
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
    paddingTop: '6em',
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
        <Grid item xs={12} lg={7}>
          <ResponsiveRootSlider />
        </Grid>

        <Hidden lgUp>
          <Grid item xs={12}>
            <div style={style.centerImage}>
              <Link to="/scanner">
                <img alt="camera icon" src={scanButtonIcon} />
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
              <Link to="/recipes/list" style={{ textDecoration: 'none' }}>
                <span style={style.link}> Search the recipe by name</span>
              </Link>
            </Typography>
          </Grid>
        </Hidden>

        <Hidden mdDown>
          <Grid item xs={9}>
            <Link to="/recipes/list" style={{ textDecoration: 'none' }}>
              <Typography style={style.scanTextDesktop} variant="h2">
                Lookup A Recipe
              </Typography>
            </Link>
          </Grid>
        </Hidden>
      </Grid>
    );
  }
}

export default RootContent;
