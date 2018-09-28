import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import alertTimerBell from '../../resources/audio/alertTimerBell.wav';
const alertSound = new Audio(alertTimerBell);

export default class AlertTimer extends Component {
  // Component should recieve a time in minutes
  state = {
    seconds: Number(this.props.minutes) * 60,
    isRunning: true,
    alertSound: alertSound,
  };

  // If it's counting down then count down and run next at 00:00 if provided.
  countDown = () => {
    if (!this.isCancelled && this.state.isRunning && this.state.seconds > 0) {
      this.setState({ seconds: this.state.seconds - 1 });
    } else if (this.state.seconds === 0) {
      if (!this.alerted) {
        this.state.alertSound.play();
        this.alerted = true;
      }

      if (this.props.next && !this.isCancelled) {
        return this.props.next();
      }
    }
  };

  // Run countdown every seconds
  componentDidMount = () => {
    !this.isCancelled &&
      this.setState({
        timeOutId: setInterval(() => {
          this.countDown();
        }, 1000),
      });
  };

  componentWillUnmount = () => {
    this.isCancelled = true;
  };

  render() {
    return (
      <div id="timer">
        <div id="timePiece">
          <span>
            <Typography variant="display4">
              {Math.floor(this.state.seconds / 60)} : {('0' + (this.state.seconds % 60)).slice(-2)}
            </Typography>
          </span>
        </div>
      </div>
    );
  }
}
