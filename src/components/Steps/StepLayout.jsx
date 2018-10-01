import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import StepContent from './StepContent';
import AppMenuBar from '../AppMenuBar';
import { connect } from 'react-redux';
import AlertTimer from './AlertTimer/AlertTimer';
import { setActiveStepIndex, setPreviousStepIndex } from '../../redux/activeStepAction';
import { removeAllAlertTimers } from '../../redux/alertTimersAction';

class StepLayout extends Component {
  componentDidMount() {
    this.props.setActiveStepIndex(this.props.activeStep);
  }
  componentWillUnmount() {
    this.props.resetAllAlertTimers();
    this.props.setActiveStepIndex(0);
  }

  render() {
    return (
      <Grid>
        <AppMenuBar />
        <Grid container style={{ height: '100%', width: '100%' }}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={12}>
                {this.props.alertTimers.map((timer, index) => (
                  <div key={timer.stepName}>
                    <AlertTimer title={timer.stepName} minutes={timer.alertTime / 60} />
                  </div>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <StepContent step={this.props.steps[this.props.activeStep]} />
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
    resetAllAlertTimers: () => dispatch(removeAllAlertTimers()),
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
