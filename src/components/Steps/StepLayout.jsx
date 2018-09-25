import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import StepContent from './StepContent';
import AppMenuBar from '../AppMenuBar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StepLayout extends Component {
  state = {
    step: {},
    stepIndex: 0,
  };
  constructor(props) {
    super(props);
  }
  render() {
    let handlePath = pathname => {
      let id = this.props.router.match.params.id;
      this.state.stepIndex = this.props.steps.findIndex(
        step => parseInt(step.stepId) === parseInt(id)
      );
      this.state.step = this.props.steps[this.state.stepIndex];
    };
    handlePath(this.props.router.location.pathname);
    console.log(this.state.step);
    let nextStepParam;
    if (
      this.props.steps[this.state.stepIndex + 1] &&
      this.props.steps[this.state.stepIndex + 1].stepId
    ) {
      nextStepParam = '/steps/' + (this.state.stepIndex + 2);
    } else {
      nextStepParam = '/steps/1';
    }
    return (
      <Grid>
        <AppMenuBar />

        <StepContent step={this.state.step} />
        <Button component={Link} to={nextStepParam}>
          Next{' '}
        </Button>
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
