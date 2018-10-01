import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { appBlue } from '../../resources/colors';
import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core';
import { getTotalTimeFromSteps } from '../../resources/helperFunctions';

const style = {
  modal: {
    width: '500px',
    height: '300px',
  },
  bold: {
    fontWeight: 'bold',
  },
  content: {
    textAlign: 'center',
  },
};

class ClickToStartCooking extends Component {
  state = {};

  //Converts Military Time to standardTime
  toStandardTime = militaryTime => {
    militaryTime = militaryTime.split(':');
    if (militaryTime[0] > 12) {
      return militaryTime[0] - 12 + ':' + militaryTime[1] + ' PM';
    } else {
      return militaryTime.join(':') + ' A.M.';
    }
  };

  //Find Start time based on eating input
  findStartTime = eatingTime => {
    const [hours, minutes] = eatingTime.split(':');
    const totalMinutes = Number(hours) * 60 + Number(minutes);
    const startTimeMinutes = totalMinutes - getTotalTimeFromSteps(this.props.steps);
    const targetHour = Math.floor(startTimeMinutes / 60);
    const targetMinutes = startTimeMinutes - targetHour * 60;
    const startTime = `${String(targetHour).padStart(2, '0')}:${String(targetMinutes).padStart(
      2,
      '0'
    )}`;
    return this.toStandardTime(startTime);
  };

  //Handle button click in dialog pop up, pushes to /steps
  buttonOnClick = () => {
    history.push('/steps');
  };

  render() {
    return (
      <Dialog open={this.props.openDialog}>
        <DialogContent style={style.content}>
          You must start cooking at{' '}
          <span style={style.bold}> {this.findStartTime(this.props.eatingInputTime)} </span>
          to eat at{' '}
          <span style={style.bold}>{this.toStandardTime(this.props.eatingInputTime)}</span>
        </DialogContent>
        <DialogActions>
          <Button style={{ color: appBlue, textAlign: 'center' }} onClick={this.buttonOnClick}>
            Start Cooking
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(ClickToStartCooking);
