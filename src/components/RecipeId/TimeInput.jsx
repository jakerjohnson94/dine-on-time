import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { appBlue, fontGreyPrimary, fontGreySecondary } from '../../resources/colors.js';
import { eatingInputTimeAction } from '../../redux/eatingInputTimeAction.js';
import { connect } from 'react-redux';
import { getFormattedTime, getTotalTimeFromSteps } from '../../resources/helperFunctions';
import ClickToStartCooking from './ClickToStartCooking.jsx';

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
    fontSize: '1.2em',
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
    isDisplayingDialog: false,
  };

  getDefaultTime = () => {
    const stepTime = getTotalTimeFromSteps(this.props.recipe.steps) * 60000;
    const now = Date.now();
    const time = new Date(now + stepTime);
    return `${time.getHours()}:${time.getMinutes()}`;
  };

  handleTimeChange = event => {
    event.preventDefault();
    this.setState({ startTime: event.target.value });
  };

  buttonOnClick = e => {
    e.preventDefault();
    this.props.sendInputTimetoStore(this.state.startTime);
    this.setState({ isDisplayingDialog: true });
  };

  render() {
    return (
      <React.Fragment>
        <Paper style={style.paper}>
          <Typography style={style.title} variant="display1">
            When Would You Like To Eat?
          </Typography>
          <form style={style.form}>
            <TextField
              style={style.input}
              onChange={this.handleTimeChange}
              id="time"
              type="time"
              defaultValue={this.getDefaultTime()}
            />
          </form>
          <Button style={{ color: appBlue }} onClick={this.buttonOnClick}>
            GO
          </Button>
        </Paper>
        {this.state.isDisplayingDialog ? (
          <ClickToStartCooking openDialog={this.state.isDisplayingDialog} />
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
  };
};

// Send entered time to redux store
const mapDispatchToProps = dispatch => {
  return {
    sendInputTimetoStore: inputTime => dispatch(eatingInputTimeAction(inputTime)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeInput);
