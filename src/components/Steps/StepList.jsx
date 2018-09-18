import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { DefaultStepComponent } from './DefaultStepComponent';

class StepList extends Component {
  state = {};

  componentWillMount() {
    fetch('http://localhost:3000/recipe/1')
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data
        });
      });
  }
  render() {
    let steps = this.state.data.steps;
    return (
      <Grid>
        {steps.map(step => {
          <DefaultStepComponent
            ingredientsRequired={step.ingredients}
            stepId={step.Id}
            title={step.title}
            alertTime={step.alertTime}
            activeTime={step.activeTime}
            instructions={step.instructions}
            optionalImage={step.optionalImage}
            isPrepStep={step.isPrepStep}
          />;
        })}
      </Grid>
    );
  }
}

export default StepList;
