import React, { Component } from 'react';
import AppMenuBar from '../AppMenuBar';
import QRScannerContent from './QRScannerContent';

class QRScannerLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <AppMenuBar />
        <QRScannerContent />
      </React.Fragment>
    );
  }
}

export default QRScannerLayout;
