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
} from '@material-ui/core';
import TimeInput from '../TimeInput';

import chikpeasImg from '../../resources/images/recipes/sample/ingredients/chikpeas.png';
import eggImg from '../../resources/images/recipes/sample/ingredients/egg.png';
import fetaImg from '../../resources/images/recipes/sample/ingredients/feta.png';

import garlicImg from '../../resources/images/recipes/sample/ingredients/garlic.png';
import gingerImg from '../../resources/images/recipes/sample/ingredients/ginger.png';
import ketchupImg from '../../resources/images/recipes/sample/ingredients/ketchup.png';
import nutsImg from '../../resources/images/recipes/sample/ingredients/nuts.png';
import onionImg from '../../resources/images/recipes/sample/ingredients/onion.png';
// import powder2Img from '../../resources/images/recipes/sample/ingredients/powder2.png';
// import spice1Img from '../../resources/images/recipes/sample/ingredients/spice1.png';
// import spinachImg from '../../resources/images/recipes/sample/ingredients/spinach.png';
// import tomatoesImg from '../../resources/images/recipes/sample/ingredients/tomatoes.png';
import recipeImg from '../../resources/images/recipes/sample/sample.jpg';
import { appBlue, fontGreyPrimary, fontGreySecondary } from '../../resources/colors';
import fetchRecipeById from '../../redux/recipeAction.js';
const style = {
  header: {
    textAlign: 'center',
    color: appBlue,
  },
  recipeImage: {
    height: '25vh',
  },

  recipeName: {
    textAlign: 'center',
    paddingTop: '.7em',
  },
  recipeDescription: {
    fontSize: '.8em',
  },
  ingredientImg: {
    height: '4.1em',
    marginBottom: '.0',
  },
  centeredIngredient: {
    textAlign: 'center',
  },
  ingName: {
    color: fontGreySecondary,
    marginTop: '0',
    marginBottom: '.2em',
  },
  ingQty: {
    marginTop: '0',
    marginBottom: '.3em',
  },
  recipeInfoList: {
    marginTop: '2em',
  },
  infoListTitle: {
    marginBottom: '.2em',
    fontSize: '.7em',
    color: 'black',
    textAlign: 'center',
  },
  infoListInfo: {
    marginTop: '0',
    color: fontGreySecondary,
    textAlign: 'center',
    fontSize: '.7em',
  },
  infoListIcon: {
    textAlign: 'center',
  },
  timer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

class recipeIdContent extends Component {
  render() {
    const handleIngredientFormatting = steps => {
      const result = [];
      const isOdd = steps.length % 2 !== 0;
      let remainder = isOdd ? steps.splice(steps.length - 1, 1) : null;
      for (let i = 0; i < steps.length; i += 2) {
        if (steps[i + 1] !== undefined) result.push(steps.slice(i, i + 2));
      }
      if (remainder) result.push(remainder);
      return result;
    };
    console.log(this.props);
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

              <Grid item xs={12}>
                <Typography style={style.recipeName} gutterBottom variant="headline">
                  {this.props.recipe.title || 'RECIPE NOT FOUND'}
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <CardContent>
                  <Typography style={style.recipeDescription} component="p">
                    {this.props.recipe.description || '-'}
                  </Typography>
                  <Grid item style={style.recipeInfoList} xs={12}>
                    <Grid container justify="space-around">
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
                        <p style={style.infoListInfo}>
                          Est. {this.props.recipe.estimatedCalories} cals{' '}
                        </p>
                      </Grid>
                    </Grid>

                    <Grid item xs={12}>
                      <div style={style.timer}>
                        <TimeInput hoistTime={time => this.setState({ startTime: time })} />
                      </div>
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>

              <Grid item xs>
                <CardActionArea style={{ pointerEvents: 'none' }}>
                  <CardContent style={{ padding: '.3em' }}>
                    <Grid container>
                      {/* ingredient images */}
                      <Grid style={style.centeredIngredient} item xs={6}>
                        <img style={style.ingredientImg} src={this.props.ingImg1 || chikpeasImg} />
                      </Grid>
                      <Grid style={style.centeredIngredient} item xs={6}>
                        <img style={style.ingredientImg} src={this.props.ingImg2 || eggImg} />
                      </Grid>

                      {/* {ingredient names} */}
                      <Grid style={style.centeredIngredient} item xs={6}>
                        <p style={style.ingQty}>{'1 15oz can '}</p>
                        <p style={style.ingName}> {'Chikpeas'}</p>
                      </Grid>
                      <Grid style={style.centeredIngredient} item xs={6}>
                        <p style={style.ingQty}>{'2 '}</p>
                        <p style={style.ingName}>{'Pasture-Raised Eggs '}</p>
                      </Grid>

                      {this.props.ingredients.map(ing => (
                        <div>{ing.name}</div>
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
  };
};

export default connect(mapStateToProps)(recipeIdContent);

// {this.handleIngredientFormatting(this.props.recipe.ingredients).map(
//   ingredient => (
//     <React.Fragment>
//       <Grid style={style.centeredIngredient} item xs={6}>
//         <img
//           style={style.ingredientImg}
//           src={ingredient[0].img || chikpeasImg}
//         />
//       </Grid>

//       <Grid style={style.centeredIngredient} item xs={6}>
//         <img style={style.ingredientImg} src={ingredient[1].img || eggImg} />
//       </Grid>

//       {/* {ingredient names} */}
//       <Grid style={style.centeredIngredient} item xs={6}>
//         <p style={style.ingQty}>{ingredient[0].quantity}</p>
//         <p style={style.ingName}> {ingredient[0].name}</p>
//       </Grid>
//       <Grid style={style.centeredIngredient} item xs={6}>
//         <p style={style.ingQty}>{ingredient[1].quantity || null}</p>
//         <p style={style.ingName}>{ingredient[1].name || null}</p>
//       </Grid>
//     </React.Fragment>
//   )
// )}
