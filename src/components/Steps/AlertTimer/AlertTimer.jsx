import React, { Component } from 'react';
import { Grid, Card, AppBar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core/';
import ClosedIcon from '@material-ui/icons/Close';
import alertTimerBell from '../../../resources/audio/alertTimerBell.wav';
import './AlertTimer.css';
const alertSound = new Audio(alertTimerBell);
const style = {
  card: {
    padding: '.1em',
    margin: '.05em',
    minHeight: '2em',
    backgroundColor: 'white',
  },
};
export default class AlertTimer extends Component {
  // Component should recieve a time in minutes
  state = {
    seconds: Number(this.props.minutes) * 60,
    isRunning: true,
    alertSound: alertSound,
    alerted: false,
    isClosed: false,
  };

  // If it's counting down then count down and run next at 00:00 if provided.
  countDown = () => {
    if (!this.isCancelled && this.state.isRunning && this.state.seconds > 0) {
      this.setState({ seconds: this.state.seconds - 1 });
    } else if (this.state.seconds === 0) {
      if (!this.state.alerted) {
        this.state.alertSound.play();
        this.setState({ alerted: true });
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

  handleClosed = () => {
    this.setState({ isClosed: true });
  };

  render() {
    return (
      <React.Fragment>
        {!this.state.isClosed ? (
          <AppBar id="timer" style={style.card} position="sticky">
            <Grid container justify="center" alignItems="center">
              <Grid item xs style={{ textAlign: 'middle' }}>
                <Typography variant="subheading" className={this.state.alerted ? 'alerted' : null}>
                  {this.props.title}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="title" className={this.state.alerted ? 'blink' : null}>
                  {Math.floor(this.state.seconds / 60)}:
                  {('0' + (this.state.seconds % 60)).slice(-2)}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  style={!this.state.alerted ? { opacity: '0', pointerEvents: 'none' } : null}
                  className="iconGrey"
                  onClick={this.handleClosed}
                >
                  <ClosedIcon />
                </IconButton>
              </Grid>
            </Grid>
          </AppBar>
        ) : null}
      </React.Fragment>
    );
  }
}
