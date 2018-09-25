import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timer from './Timer';
import history from '../../history';
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Paper,
  Icon,
} from '@material-ui/core';
import { appGreyCard } from '../../resources/colors';
import { placeActiveStepInStore, resetActiveStep } from '../../redux/activeStepAction';
const style = {
  instructions: {},
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
};
class StepContent extends Component {
  timerFn = () => {
    console.log(this.props);
    if (this.props.steps[this.props.activeStep + 1])
      this.props.addActiveStep(this.props.activeStep + 1);
    else {
      history.push('/completed');
      this.props.resetActiveStep();
    }
  };
  render() {
    const step = this.props.steps[this.props.activeStep];

    return (
      <React.Fragment>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} key={step.stepId}>
            <Card>
              <CardMedia style={style.stepImage} image={step.optionalImage} title={step.title} />
              <CardContent>
                <Grid container justify="center" alignItems="center">
                  <Grid item xs={12}>
                    <Typography variant="title" stylpe={style.title}>
                      <Typography component="span"> Step {step.stepId}:</Typography> {step.title}
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
                    <Grid item xs={12}>
                      <Timer next={this.timerFn} minutes={step.activeTime / 60} />
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
    resetActiveStep: () => dispatch(resetActiveStep()),
    addActiveStep: activeStep => dispatch(placeActiveStepInStore(activeStep)),
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
