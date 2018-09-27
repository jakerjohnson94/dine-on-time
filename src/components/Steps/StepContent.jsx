import React, { Component } from 'react';
import { connect } from 'react-redux';
import StepActiveTimer from './StepActiveTimer/StepActiveTimer';
import history from '../../history';
import { Typography, Grid, Card, CardMedia, CardContent } from '@material-ui/core';
import { appGreyCard } from '../../resources/colors';
import { setActiveStep } from '../../redux/activeStepAction';
import RecipeTimelineStepper from './RecipeTimelineStepper/RecipeTimelineStepper.jsx';
const style = {
  instructions: {
    fontSize: '1em',
  },
  title: {},
  stepImage: {
    height: '30vh',
  },
  ingredientListCard: {},
  singleIngredientCard: {
    border: '3px solid grey',
    borderRadius: '10%',
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
    if (this.props.steps[this.props.activeStep + 1])
      this.props.setActiveStep(this.props.activeStep + 1);
    else {
      history.push('/completed');
      this.props.setActiveStep(0);
    }
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
                    <Typography variant="subheading" style={style.ingredientsTitle}>
                      Ingredients:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Card style={style.ingredientListCard}>
                      <CardContent>
                        <Grid container spacing={8} alignItems="center" justify="space-around">
                          {step.ingredientsRequired.map(ing => (
                            <Grid key={ing.name} item xs>
                              <Card elevation={0} style={style.singleIngredientCard}>
                                <Typography component="p">{ing.name}</Typography>
                              </Card>
                            </Grid>
                          ))}
                        </Grid>
                      </CardContent>
                    </Card>
                    <Grid item xs={12} style={style.progressTimer}>
                      <StepActiveTimer next={this.timerFn} max={step.activeTime} />
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
    setActiveStep: activeStep => dispatch(setActiveStep(activeStep)),
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
