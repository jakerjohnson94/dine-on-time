import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import React, { Component } from 'react';
import './StepActiveTimer.css';
import audio from '../../../resources/audio/nextStepDing.ogg';
import { Typography } from '@material-ui/core';
import { appBlue } from '../../../resources/colors';
const style = {
  label: {
    float: 'right',
    fontSize: '.7em',
    fontColor: appBlue,
  },
};
export default class StepActiveTimer extends Component {
  state = {
    nextStepDing: new Audio(audio),
    seconds: 0,
    isRunning: true,
    max: this.props.max * 60,
  };

  // If it's counting down then count down and run next at 00:00 if provided.
  countDown = () => {
    if (!this.isCancelled && this.state.isRunning && this.state.seconds < this.state.max) {
      this.setState({ seconds: this.state.seconds + 1 });
    } else if (this.state.seconds >= this.state.max) {
      this.setState({ seconds: 0 });
      if (this.props.next && !this.isCancelled) {
        return this.props.next();
      }
    }
  };
  formatLabel = () => {
    let time;
    let inMins;
    if (this.state.max - this.state.seconds > 60) {
      time = Math.floor((this.state.max - this.state.seconds) / 60);
      inMins = true;
    } else {
      inMins = false;
    }
    return inMins ? `${time} Minutes until next step` : `<1 Minute until next step`;
  };

  // Run countdown every seconds
  componentDidMount = () => {
    !this.isCancelled &&
      this.setState({
        timeOutId: setInterval(() => {
          this.countDown();
        }, 500),
      });
  };

  componentWillUnmount = () => {
    this.state.nextStepDing.play();
    this.isCancelled = true;
  };

  render() {
    return (
      <React.Fragment>
        <ProgressBar max={this.state.max} now={this.state.seconds} />
        <Typography variant="subheading" style={style.label}>
          {this.formatLabel()}
        </Typography>
      </React.Fragment>
    );
  }
}
// const mapStateToProps = (state, ownProps) => {
//   return {
//     ...state,
//     steps: state.steps,
//   }
// }
