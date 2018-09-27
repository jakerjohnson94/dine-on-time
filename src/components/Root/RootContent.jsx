import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// css components
import { Typography, Grid, Hidden } from '@material-ui/core';
import ResponsiveRootSlider from './ResponsiveSlider';
//local components
import SearchDialog from './SearchDialog';

// icons
// local images
import scanButtonIcon from '../../resources/images/qrBtnIcon.svg';
import graphic1 from '../../resources/images/root/infoImg1.svg';
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
    paddingTop: '.5em',
  },
  link: {
    color: appBlue,
  },
  infoHeadline: {
    fontSize: '1.2em',
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

          <Grid item xs={12}>
           <SearchDialog style={style.centerText} text='Search Recipe'/>
          </Grid>
        </Hidden>

        <Hidden mdDown>
        <Grid container justify='center' alignItems='center'>
          <Grid item xs={1}>
  
              <SearchDialog style={style.centerText}text='Search Recipe' />
  
          </Grid>
        </Grid>
        </Hidden>
      </Grid>
    );
  }
}

export default RootContent;

// <Grid item xs={12}>
//   <Typography variant="display1" component="h1" style={style.infoHeadline}>
//     Dine on Time takes the stress out of cooking
//   </Typography>
// </Grid>
// <Grid item xs={12}>
//   <img src={graphic1} alt="infoGraphic1" />
// </Grid>
