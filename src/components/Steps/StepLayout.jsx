import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import StepContent from './StepContent';
import AppMenuBar from '../AppMenuBar';
import { connect } from 'react-redux';

class StepLayout extends Component {
  render() {
    return (
      <Grid>
        <AppMenuBar />
        <StepContent />
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(StepLayout);

// ingredientsRequired={step.ingredients}
// stepId={step.Id}
// title={step.title}
// alertTime={step.alertTime}
// activeTime={step.activeTime}
// instructions={step.instructions}
// optionalImage={step.optionalImage}
// isPrepStep={step.isPrepStep}
