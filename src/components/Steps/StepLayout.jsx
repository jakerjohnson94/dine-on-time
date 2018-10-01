import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import StepContent from './StepContent';
import AppMenuBar from '../AppMenuBar';
import { connect } from 'react-redux';
import AlertTimer from './AlertTimer/AlertTimer';
import { setActiveStepIndex, setPreviousStepIndex } from '../../redux/activeStepAction';

class StepLayout extends Component {
  componentDidMount() {
    this.props.setActiveStepIndex(this.props.activeStep);
  }

  render() {
    return (
      <Grid>
        <AppMenuBar />
        <Grid container style={{ height: '100%', width: '100%' }}>
          <Grid item xs={12}>
            <StepContent step={this.props.steps[this.props.activeStep]} />
          </Grid>
          <Grid item xs={12}>
            {this.props.alertTimers.map((timer, index) => (
              <div key={timer.stepName}>
                <AlertTimer title={timer.stepName} minutes={timer.alertTime / 60} />
              </div>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setActiveStepIndex: activeStep => dispatch(setActiveStepIndex(activeStep)),
    setPreviousStepIndex: activeStep => dispatch(setPreviousStepIndex(activeStep)),
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
