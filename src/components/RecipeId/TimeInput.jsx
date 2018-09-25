import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { appBlue, fontGreyPrimary, fontGreySecondary } from '../../resources/colors.js';
import { eatingInputTimeAction } from '../../redux/eatingInputTimeAction.js';
import { connect } from 'react-redux';
import history from '../../history';

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
  };

  handleTimeChange = event => {
    event.preventDefault();
    this.setState({ startTime: event.target.value });
  };

  buttonOnClick = e => {
    e.preventDefault();
    this.props.sendInputTimetoStore(this.state.startTime);
    history.push('/steps');
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
              defaultValue="17:30"
            />
          </form>
          <Button style={{ color: appBlue }} onClick={this.buttonOnClick}>
            Tell Me What to Do
          </Button>
        </Paper>
      </React.Fragment>
    );
  }
}

// Send entered time to redux store
const mapDispatchToProps = dispatch => {
  return {
    sendInputTimetoStore: inputTime => dispatch(eatingInputTimeAction(inputTime)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TimeInput);
