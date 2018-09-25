import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import StepContent from './StepContent';
import AppMenuBar from '../AppMenuBar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../../history';

class StepLayout extends Component {
  state = {
    activeStep: 0,
  };

  handleClick = () => {
    this.props.steps[this.state.activeStep + 1]
      ? this.setState({ activeStep: this.state.activeStep + 1 })
      : history.push('/completed');
  };
  render() {
    return (
      <Grid>
        <AppMenuBar />

        <StepContent step={this.props.steps[this.state.activeStep]} />
        <Button onClick={this.handleClick}>Next</Button>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    steps: state.recipe.steps,
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
