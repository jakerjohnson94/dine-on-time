import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import StepContent from './StepContent';
import AppMenuBar from '../AppMenuBar';
import { connect } from 'react-redux';
import AlertTimer from './AlertTimer/AlertTimer';
import { setActiveStepIndex, setPreviousStepIndex } from '../../redux/activeStepAction';
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
class StepLayout extends Component {
  componentDidMount() {
    this.props.setActiveStepIndex(this.props.activeStep);
  }
  componentWillUnmount() {}

  render() {
    const alertTimers = this.props.alertTimers.filter(onlyUnique);
    return (
      <Grid>
        <AppMenuBar />
        {alertTimers.map(timer => (
          <AlertTimer
            title={timer.alertMessage || timer.stepName}
            key={timer.alertMessage}
            minutes={timer.alertTime / 10}
          />
        ))}
        <Grid container style={{ height: '100%', width: '100%' }}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={12} />
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
