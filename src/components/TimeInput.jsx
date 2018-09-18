import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class TimeInput extends Component {
  state = {
    startTime: '17:30'
  };

  handleTimeChange = event => {
    event.preventDefault();
    this.setState({ startTime: event.target.value });
  };

  buttonOnClick = e => {
    this.props.hoistTime(this.state.startTime);
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <TextField
            onChange={this.handleTimeChange}
            id="time"
            type="time"
            defaultValue="17:30"
          />
        </form>
        <Button variant="contained" onClick={this.buttonOnClick}>
          Submit
        </Button>
      </React.Fragment>
    );
  }
}

export default TimeInput;
