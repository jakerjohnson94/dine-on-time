import React, { Component } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import { fontGreyPrimary } from '../../resources/colors';
import { connect } from 'react-redux';
import fetchRecipeById from '../../redux/recipeAction.js';

import QrReader from 'react-qr-reader';

const style = {
  titleHeader: {
    marginTop: '.75em',
    marginBottom: '.75em',
    color: fontGreyPrimary,
    fontSize: '2em',
  },
  centeredDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  centeredButton: {
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: '.5em',
  },
};

class QRScanner extends Component {
  state = {
    delay: 750,
    result: null,
    startTime: null,
  };

  handleScan = data => {
    // This is hacky and only for localhost or github pages sites.
    // THIS WILL NOT WORK OUTSIDE OF THOSE ENVIRONMENTS
    // if (data && data.match(/((http|https):\/\/\w+(:3000|github\.io)\/recipe\/\d+)/gi)) {
    if (data) {
      this.setState({
        result: data,
      });
      const [id] = data.match(/(\d+)$/g);
      this.props.fetchRecipe(id);
    }
  };

  handleError = err => {
    return console.error(err);
  };

  render() {
    return (
      <Grid alignContent="center" alignItems="center" justify="center" container>
        <Grid item xs={12}>
          <Typography style={style.titleHeader} variant="display3" gutterBottom align="center">
            Scan your QR Code
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div style={style.centeredDiv}>
            <QrReader
              delay={this.state.delay}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: '100%', maxWidth: '500px' }}
            />
          </div>
        </Grid>

        <Grid item xs={12}>
          <Grid container align="center" justify="center">
            <Grid item xs={12}>
              <Button component={Link} to="/" variant="outlined">
                Back
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipe: recipeId => dispatch(fetchRecipeById(recipeId)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(QRScanner)
);
