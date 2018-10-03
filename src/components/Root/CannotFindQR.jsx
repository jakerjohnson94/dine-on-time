import React, { Component } from 'react';
import { connect } from 'react-redux';

import helpFindingQr from '../../resources/images/helpFindingQr.png';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core';

import { fontGreyPrimary, fontGreySecondary, appBlue } from '../../resources/colors';

const style = {
  buttonStyling: {
    textTransform: 'none',
    width: '100%',
    color: fontGreySecondary,
    marginTop: '5em',
  },
};

class CannotFindQR extends Component {
  state = {
    isOpen: false,
  };

  onClick = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <React.Fragment>
        <Button style={style.buttonStyling} onClick={this.onClick}>
          Need Help Finding QR Code or Recipe ID Number?
        </Button>
        <Dialog open={this.state.isOpen}>
          <DialogContent><img style={{width: '15rem'}} src={helpFindingQr}/></DialogContent>
          <Button onClick={this.handleClose}>Close</Button>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default CannotFindQR;
