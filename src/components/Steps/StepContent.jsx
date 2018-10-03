import React, { Component } from 'react';
import { connect } from 'react-redux';
import StepActiveTimer from './StepActiveTimer/StepActiveTimer';
import history from '../../history';
import { Typography, Grid, Card, CardMedia, CardContent, Chip } from '@material-ui/core';
import { setActiveStepIndex, setPreviousStepIndex } from '../../redux/activeStepAction';
import RecipeTimelineStepper from './RecipeTimelineStepper.jsx';
import { addAlertTimer } from '../../redux/alertTimersAction';
import { appBlue } from '../../resources/colors';

const style = {
  instructions: {
    fontSize: '1em',
  },
  title: {},
  stepImage: {
    height: '30vh',
  },
  ingredientListCard: {
    textAlign: 'center',
  },
  singleIngredientCard: {
    border: '3px solid grey',
    borderRadius: '6px',
    textAlign: 'center',
    padding: '.3em',
  },
  ingredientsTitle: {
    textAlign: 'center',
    marginTop: '.5em',
  },
  progressTimer: {
    marginTop: '1em',
  },
};

class StepContent extends Component {
  timerFn = () => {
    if (this.props.previousStep && this.props.steps[this.props.previousStep].alertTime) {
      this.props.addAlertTimer(
        this.props.steps[this.props.previousStep].alertTime,
        this.props.steps[this.props.previousStep].title
      );
    }
    if (this.props.steps[this.props.activeStep + 1]) {
      this.props.setActiveStepIndex(this.props.activeStep + 1);
    } else {
      history.push('/completed');
      this.props.setActiveStepIndex(0);
    }
    if (this.props.steps[this.props.activeStep - 1])
      this.props.setPreviousStepIndex(this.props.activeStep - 1);
  };

  render() {
    const step = this.props.steps[this.props.activeStep];

    return (
      <React.Fragment>
        <Grid key={step.stepId} container justify="center" alignItems="center">
          <Grid item xs={12} key={step.stepId}>
            <Card>
              <CardMedia
                style={style.stepImage}
                image={step.optionalImage}
                src={step.optionalImage}
                title={step.title}
              />
              <CardContent>
                <Grid container justify="center" alignItems="center">
                  <Grid item xs={12}>
                    <RecipeTimelineStepper />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="title" style={style.title}>
                      {step.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography component="p" style={style.instructions}>
                      {step.instructions}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="title" style={style.ingredientsTitle}>
                      Ingredients:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Card style={style.ingredientListCard}>
                      <CardContent style={{ padding: '.8em' }}>
                        {step.ingredientsRequired.map(ing => (
                          <Chip
                            style={{ color: appBlue, margin: '.25em' }}
                            key={ing.name}
                            label={ing.name}
                          />
                        ))}
                      </CardContent>
                    </Card>
                    <Grid item xs={12} style={style.progressTimer}>
                      <StepActiveTimer next={this.timerFn} max={step.activeTime / 60} />
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setActiveStepIndex: activeStep => dispatch(setActiveStepIndex(activeStep)),
    setPreviousStepIndex: activeStep => dispatch(setPreviousStepIndex(activeStep)),
    addAlertTimer: (alertTimer, stepName) => dispatch(addAlertTimer(alertTimer, stepName)),
  };
};

const mapStateToProps = state => {
  return {
    ...state,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepContent);
