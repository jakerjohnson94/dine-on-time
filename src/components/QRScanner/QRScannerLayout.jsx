import React, { Component } from 'react';
import AppMenuBar from '../AppMenuBar';
import QRScannerContent from './QRScannerContent';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class QRScannerLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <AppMenuBar />
        <QRScannerContent />
        <Link to="/recipe">
          <Button> Recipe Page</Button>
        </Link>
      </React.Fragment>
    );
  }
}

export default QRScannerLayout;
