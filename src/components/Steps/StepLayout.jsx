import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import StepContent from './StepContent';
import Axios from 'axios';

const API = 'https://cryptic-beach-93122.herokuapp.com';

class StepLayout extends Component {
  state = {};

  render() {
    let steps = this.state.steps || [];
    return (
      <Grid>
        {steps.map(step => {
          <StepContent />;
        })}
      </Grid>
    );
  }
}

export default StepLayout;

// ingredientsRequired={step.ingredients}
// stepId={step.Id}
// title={step.title}
// alertTime={step.alertTime}
// activeTime={step.activeTime}
// instructions={step.instructions}
// optionalImage={step.optionalImage}
// isPrepStep={step.isPrepStep}
