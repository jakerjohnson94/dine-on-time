import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import StepContent from './StepContent';
import AppMenuBar from '../AppMenuBar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../../history';
import { placeActiveStepInStore } from '../../redux/activeStepAction';

class StepLayout extends Component {
  handleClick = () => {
    this.props.steps[this.props.activeStep + 1]
      ? this.props.addActiveStep(this.props.activeStep + 1)
      : history.push('/completed');
  };

  componentDidMount() {
    this.props.addActiveStep(this.props.activeStep);
  }

  render() {
    return (
      <Grid>
        <AppMenuBar />
        <StepContent step={this.props.steps[this.props.activeStep]} />

        <Button onClick={this.handleClick}>Next</Button>
      </Grid>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addActiveStep: activeStep => dispatch(placeActiveStepInStore(activeStep)),
  };
};

const mapStateToProps = state => {
  return {
    ...state,
    steps: state.recipe.steps,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepLayout);
