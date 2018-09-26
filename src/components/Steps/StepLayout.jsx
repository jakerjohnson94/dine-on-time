import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import StepContent from './StepContent';
import AppMenuBar from '../AppMenuBar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../../history';
import { setActiveStep } from '../../redux/activeStepAction';

class StepLayout extends Component {
  handleClick = () => {
    if (this.props.steps[this.props.activeStep + 1])
      this.props.setActiveStep(this.props.activeStep + 1);
    else {
      history.push('/completed');
    }
  };

  componentDidMount() {
    this.props.setActiveStep(this.props.activeStep);
  }

  render() {
    return (
      <Grid>
        <AppMenuBar />
        <StepContent step={this.props.steps[this.props.activeStep]} />
      </Grid>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setActiveStep: activeStep => dispatch(setActiveStep(activeStep)),
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
