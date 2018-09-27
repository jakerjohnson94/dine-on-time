import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import React, { Component } from 'react';
import './StepActiveTimer.css';
export default class StepActiveTimer extends Component {
  state = {
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
    this.isCancelled = true;
  };

  render() {
    return <ProgressBar max={this.state.max} now={this.state.seconds} />;
  }
}
