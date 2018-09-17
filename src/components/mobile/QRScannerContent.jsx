import React, { Component } from 'react';
import AppMenuBar from './AppMenuBar';
import { Typography, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {
  appBlue,
  fontGreyPrimary,
  fontGreySecondary
} from '../../resources/colors';
import QrReader from 'react-qr-reader';
import TimeInput from './TimeInput';

const style = {
  titleHeader: {
    marginTop: '.75em',
    marginBottom: '.75em',
    color: fontGreyPrimary,
    fontSize: '2em'
  },
  centeredDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  centeredButton: {
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: '.5em'
  }
};

class QRScanner extends Component {
  state = {
    delay: 750,
    result: null,
    startTime: null
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
    console.log(this.state);

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
            variant="display3"
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
        <Grid item xs={12}>
          <div style={style.centeredButton}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button variant="contained">Back</Button>
            </Link>
          </div>
        </Grid>

        <TimeInput hoistTime={time => this.setState({ startTime: time })} />
      </Grid>
    );
  }
}

export default QRScanner;
