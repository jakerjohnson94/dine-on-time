import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  render() {
    const step = this.props.step;

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

const mapStateToProps = state => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(StepContent);
