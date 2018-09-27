import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import StepContent from './StepContent';
import AppMenuBar from '../AppMenuBar';
import { connect } from 'react-redux';

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
        <Grid container style={{ height: '100%', width: '100%' }}>
          <Grid item xs={12}>
            <StepContent step={this.props.steps[this.props.activeStep]} />
          </Grid>
          <Grid item xs={12} />
        </Grid>
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
