import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { appBlue, fontGreyPrimary, fontGreySecondary } from '../resources/colors.js';

const style = {
  input: {
    textAlign: 'center',
    fontColor: fontGreySecondary,
    marginBottom: '.5em',
    alignSelf: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontColor: fontGreyPrimary,
    marginTop: '.5em',
    marginBottom: '.2em',
    fontSize: '.9em',
    fontWeight: 'bold',
  },
  paper: {
    textAlign: 'center',
    marginTop: '.5em',
    padding: '.5em',
  },
};
class TimeInput extends Component {
  state = {
    startTime: '17:30',
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
        <Paper style={style.paper}>
          <Typography style={style.title} variant="display1">
            What Time Would You Like To Eat?
          </Typography>
          <form style={style.form}>
            <TextField
              style={style.input}
              onChange={this.handleTimeChange}
              id="time"
              type="time"
              defaultValue="17:30"
            />
          </form>
          <Button style={{ color: appBlue }} onClick={this.buttonOnClick}>
            Start Cooking
          </Button>
        </Paper>
      </React.Fragment>
    );
  }
}

export default TimeInput;
