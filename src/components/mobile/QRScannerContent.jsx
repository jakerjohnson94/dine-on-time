import React, { Component } from 'react';
import AppMenuBar from './AppMenuBar';
import { Typography, Grid } from '@material-ui/core';
import {
  appBlue,
  fontGreyPrimary,
  fontGreySecondary
} from '../../resources/colors';
import QrReader from 'react-qr-reader';

const style = {
  titleHeader: {
    marginTop: '.75em',
    marginBottom: '.75em',
    color: fontGreyPrimary
  },
  centeredDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }
};

class QRScanner extends Component {
  state = {
    delay: 750,
    result: null
  };

  handleScan = data => {
    if (data && data.includes(window.location.host)) {
      this.setState({
        result: data
      });
      window.location.replace(data);
    }
  };

  handleError = err => {
    console.error(err);
  };

  render() {
    return (
      <Grid
        alignContent="center"
        alignItems="center"
        justify="center"
        container
      >
        <Grid item xs={12}>
          <Typography
            style={style.titleHeader}
            variant="display2"
            gutterBottom
            align="center"
          >
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
      </Grid>
    );
  }
}

export default QRScanner;
