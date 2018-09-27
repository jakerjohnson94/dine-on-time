import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Icon,
  Divider,
} from '@material-ui/core';
import ReactLoading from 'react-loading';
import TimeInput from './TimeInput';

import { appBlue, fontGreyPrimary, fontGreySecondary } from '../../resources/colors';

const style = {
  header: {
    textAlign: 'center',
    color: appBlue,
  },
  recipeImage: {
    height: '40vh',
  },
  titleCard: {
    width: '100%',
    marginBottom: '.5em',
  },

  recipeName: {
    textAlign: 'center',
    fontSize: '1.7em',
    paddingTop: '.5em',
    color: appBlue,
  },
  recipeDescription: {
    fontSize: '1.1em',
  },
  recipeSubtitle: {
    color: fontGreyPrimary,
    textAlign: 'center',
    paddingBottom: '.2em',
  },
  ingredientImg: {
    height: '5em',
    marginBottom: '.0',
  },
  centeredIngredient: {
    textAlign: 'center',
  },
  ingName: {
    color: fontGreySecondary,
    marginTop: '0',
    marginBottom: '.2em',
    fontSize: '1.3em',
  },
  ingQty: {
    marginTop: '0',
    marginBottom: '.3em',
    fontSize: '1.3em',
  },
  recipeInfoList: {
    marginTop: '2em',
    marginBottom: '1.5em',
  },
  infoListTitle: {
    marginBottom: '.2em',
    fontSize: '.8em',

    color: 'black',
    textAlign: 'center',
  },
  infoListInfo: {
    marginTop: '0',
    color: fontGreySecondary,
    textAlign: 'center',
    fontSize: '1em',
  },
  infoListIcon: {
    textAlign: 'center',
    fontSize: '2em',
  },
  timer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

// separate ingredient data to be mapped over for Grid Format
const formatIngredientList = steps => {
  const result = [];
  const isOdd = steps.length % 2 !== 0;
  let remainder = isOdd ? steps.splice(steps.length - 1, 1) : null;
  for (let i = 0; i < steps.length; i += 2) {
    if (steps[i + 1] !== undefined) result.push(steps.slice(i, i + 2));
  }
  if (remainder) result.push(remainder);
  return result;
};

class recipeIdContent extends Component {
  render() {
    return (
      <Grid alignContent="center" alignItems="center" justify="center" container>
        <Grid item xs={12}>
          <Card>
            <Grid container>
              <Grid item xs={12}>
                <CardMedia
                  style={style.recipeImage}
                  image={this.props.recipe.img || null}
                  title={this.props.recipe.title}
                />
              </Grid>
              <Card style={style.titleCard}>
                <Grid item xs={12}>
                  <Typography style={style.recipeName} variant="headline">
                    {this.props.recipe.title || 'RECIPE NOT FOUND'}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography style={style.recipeSubtitle} gutterBottom variant="subheading">
                    {this.props.recipe.subtitle || null}
                  </Typography>
                </Grid>
              </Card>
              <Grid item xs={7}>
                <CardContent>
                  <Typography style={style.recipeDescription} component="p">
                    {this.props.recipe.description || '-'}
                  </Typography>
                  <Grid item style={style.recipeInfoList} xs={12}>
                    <Grid container justify="space-between">
                      <Grid style={style.infoListIcon} item xs={4}>
                        <Icon>alarm_on</Icon>
                      </Grid>
                      <Grid style={style.infoListIcon} item xs={4}>
                        <Icon>restaurant</Icon>
                      </Grid>
                      <Grid style={style.infoListIcon} item xs={4}>
                        <Icon>local_hospital</Icon>
                      </Grid>

                      <Grid item xs={4}>
                        <p style={style.infoListTitle}>Time: </p>
                      </Grid>
                      <Grid item xs={4}>
                        <p style={style.infoListTitle}>Servings: </p>
                      </Grid>
                      <Grid item xs={4}>
                        <p style={style.infoListTitle}>Nutrition: </p>
                      </Grid>

                      <Grid item xs={4}>
                        <p style={style.infoListInfo}>
                          {this.props.recipe.totalPrepTime + this.props.recipe.totalCookTime} mins
                        </p>
                      </Grid>
                      <Grid item xs={4}>
                        <p style={style.infoListInfo}>{this.props.recipe.servings}</p>
                      </Grid>
                      <Grid item xs={4}>
                        <p style={style.infoListInfo}>{this.props.recipe.calories} cals </p>
                      </Grid>
                    </Grid>

                    <Grid item xs={12}>
                      <div style={style.timer}>
                        <TimeInput />
                      </div>
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>

              <Grid item xs>
                <CardActionArea style={{ pointerEvents: 'none' }}>
                  <CardContent style={{ padding: '.3em' }}>
                    <Grid container>
                      {formatIngredientList(this.props.ingredients).map(ing => (
                        <React.Fragment key={ing[0].name}>
                          <Grid
                            style={style.centeredIngredient}
                            item
                            xs={ing[1] !== undefined ? 6 : 12}
                          >
                            <img style={style.ingredientImg} key={ing[0].name} src={ing[0].img} />
                          </Grid>
                          {ing[1] !== undefined ? (
                            <Grid style={style.centeredIngredient} item xs={6}>
                              <img
                                style={style.ingredientImg}
                                key={ing[1].img}
                                src={ing[1].img || null}
                              />
                            </Grid>
                          ) : null}

                          {/* {ingredient names} */}
                          <Grid
                            style={style.centeredIngredient}
                            item
                            xs={ing[1] !== undefined ? 6 : 12}
                          >
                            <p style={style.ingQty} key={ing[0].quantity}>
                              {ing[0].quantity}
                            </p>
                            <p style={style.ingName} key={ing[0].name}>
                              {ing[0].name}
                            </p>
                          </Grid>
                          {ing[1] !== undefined ? (
                            <Grid style={style.centeredIngredient} item xs={6}>
                              <p style={style.ingQty} key={ing[1].quantity}>
                                {ing[1].quantity}
                              </p>
                              <p style={style.ingName} key={ing[1].name}>
                                {ing[1].name}
                              </p>
                            </Grid>
                          ) : null}
                        </React.Fragment>
                      ))}
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    fetching: state.fetching,
  };
};

export default connect(mapStateToProps)(recipeIdContent);
