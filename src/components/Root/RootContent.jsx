import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// css components
import { Typography, Grid, Hidden, Button } from '@material-ui/core';
import ResponsiveRootSlider from './ResponsiveSlider';
//local components
import SearchDialog from './SearchDialog';
import CannotFindQR from './CannotFindQR';
import { connect } from 'react-redux';
import { fetchAllRecipes } from '../../redux/recipeAction';

// icons
// local images
import scanButtonIcon from '../../resources/images/qrBtnIcon.svg';

//local css
import '../../App.css';
//color pallette import
import {
  appBlue,
  fontGreyPrimary,
  fontGreySecondary
} from '../../resources/colors';

//app style
const style = {
  centerText: {
    textAlign: 'center',
    fontSize: '.7em',
    color: fontGreySecondary
  },
  scanText: {
    textAlign: 'center',
    fontSize: '1.2em',
    color: appBlue,
    paddingBottom: '1em'
  },
  scanTextDesktop: {
    textAlign: 'center',
    fontSize: '1.2em',
    color: appBlue
  },
  titleHeader: {
    marginTop: '.5em',
    marginBottom: '.25em',
    fontFamily: 'Dosis, sans-serif',
    fontWeight: '500',
    color: appBlue
  },
  titleSubHeader: {
    marginBottom: '2em',
    fontSize: '.9em',
    color: fontGreySecondary
  },
  centerContent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '.5em'
  },
  link: {
    color: appBlue
  },
  infoHeadline: {
    fontSize: '1.2em'
  },
  scannerButton: {
    textTransform: 'none',
    marginTop: '1rem',
    marginBottom: '0',
    padding: '0',
    display: 'flex',
    flexDirection: 'column'
  },
  scannerContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  appParagraph: {
    fontStyle: 'italic',
    marginLeft: '1.5rem',
    marginRight: '1.5rem',
    color: fontGreySecondary,
    textAlign: 'center',
    fontSize: '0.7em'
  }
};

class RootContent extends Component {
  componentDidMount() {
    this.props.fetchAllRecipes();
  }
  render() {
    return (
      <Grid alignItems="center" justify="center" container>
        <Grid item xs={12} lg={7}>
          <ResponsiveRootSlider title="Dine on Time" />
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={style.titleHeader}
            variant="headline"
            gutterBottom
            align="center"
          >
            We're with you every step of the way!
          </Typography>
        </Grid>

        <Hidden lgUp>
          <Grid item xs style={style.scannerContainer}>
            <Button component={Link} style={style.scannerButton} to="/scanner">
              <Grid
                container
                direction="column"
                justify="center"
                style={style.scannerContainer}
                alignItems="center"
              >
                <Grid item xs={12}>
                  <img alt="camera icon" src={scanButtonIcon} />
                </Grid>
                <Grid item xs={12}>
                  <Typography style={style.scanText} variant="subheading">
                    Scan A Recipe Code
                  </Typography>
                </Grid>
              </Grid>
            </Button>
            <CannotFindQR />
          </Grid>
        </Hidden>
        <Grid style={style.centerContent} item xs={12}>
          <SearchDialog text="Search Recipe" />
        </Grid>
        <Grid style={style.centerContent} item xs={12}>
          <Typography style={style.appParagraph} variant="body1">
            Dine On Time was created to be used in association with meal-kit delivery services like Blue Apron,
            scan your QR code or input the recipe ID to get step by step
            instructions with timers and alerts. Don't dine alone, Dine On Time!
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllRecipes: () => dispatch(fetchAllRecipes())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContent);

// <Grid item xs={12}>
//   <Typography variant="display1" component="h1" style={style.infoHeadline}>
//     Dine on Time takes the stress out of cooking
//   </Typography>
// </Grid>
// <Grid item xs={12}>
//   <img src={graphic1} alt="infoGraphic1" />
// </Grid>
