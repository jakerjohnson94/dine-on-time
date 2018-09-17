import React, { Component } from 'react';
import {
  Typography,
  Grid,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Icon,
} from '@material-ui/core';

import chikpeasImg from '../../resources/images/ingredients/chikpeas.png';
import eggImg from '../../resources/images/ingredients/egg.png';
import fetaImg from '../../resources/images/ingredients/feta.png';

import garlicImg from '../../resources/images/ingredients/garlic.png';
import gingerImg from '../../resources/images/ingredients/ginger.png';
import ketchupImg from '../../resources/images/ingredients/ketchup.png';
import nutsImg from '../../resources/images/ingredients/nuts.png';
import onionImg from '../../resources/images/ingredients/onion.png';
import powder2Img from '../../resources/images/ingredients/powder2.png';
import spice1Img from '../../resources/images/ingredients/spice1.png';
import spinachImg from '../../resources/images/ingredients/spinach.png';
import tomatoesImg from '../../resources/images/ingredients/tomatoes.png';
import recipeImg from '../../resources/images/sample.jpg';
import { appBlue, fontGreyPrimary, fontGreySecondary } from '../../resources/colors';

const style = {
  header: {
    textAlign: 'center',
    color: appBlue,
  },
  recipeImage: {
    height: '27vh',
  },

  recipeName: {
    textAlign: 'center',
    paddingTop: '1em',
  },
  recipeDescription: {
    fontSize: '1.2em',
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
    marginTop: '3em',
  },
  infoListTitle: {
    marginBottom: '.2em',
    color: 'black',
    textAlign: 'center',
  },
  infoListInfo: {
    marginTop: '0',
    color: fontGreySecondary,
    textAlign: 'center',
  },
  infoListIcon: {
    textAlign: 'center',
  },
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
                  image={this.props.recipeImg || recipeImg}
                  title="Recipe"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography style={style.recipeName} gutterBottom variant="headline">
                  {this.props.recipeName || 'Moroccan-Style Couscous Bowls'}
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <CardActionArea style={{ pointerEvents: 'none' }}>
                  <CardContent style={{ padding: '.7em' }}>
                    <Typography style={style.recipeDescription} component="p">
                      {this.props.description ||
                        'In this dish, fluffy couscous is topped with a hearty vegetable medley, which gets bold flavor from a blend of smoked paprika, cayenne pepper, cinnamon, and more.'}
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
                          <p style={style.infoListInfo}>20 mins</p>
                        </Grid>
                        <Grid item xs={4}>
                          <p style={style.infoListInfo}>2</p>
                        </Grid>
                        <Grid item xs={4}>
                          <p style={style.infoListInfo}>Est. 850 cals </p>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Grid>

              <Grid item xs>
                <CardActionArea style={{ pointerEvents: 'none' }}>
                  <CardContent style={{ padding: '.3em' }}>
                    <Grid container>
                      <Grid style={style.centeredIngredient} item xs={6}>
                        <img style={style.ingredientImg} src={this.props.ingImg1 || chikpeasImg} />
                      </Grid>
                      <Grid style={style.centeredIngredient} item xs={6}>
                        <img style={style.ingredientImg} src={this.props.ingImg2 || eggImg} />
                      </Grid>

                      <Grid style={style.centeredIngredient} item xs={6}>
                        <p style={style.ingQty}>{'1 15oz can '}</p>
                        <p style={style.ingName}> {'Chikpeas'}</p>
                      </Grid>

                      <Grid style={style.centeredIngredient} item xs={6}>
                        <p style={style.ingQty}>{'2 '}</p>
                        <p style={style.ingName}>{'Pasture-Raised Eggs '}</p>
                      </Grid>

                      <Grid style={style.centeredIngredient} item xs={6}>
                        <img style={style.ingredientImg} src={this.props.ingImg3 || fetaImg} />
                      </Grid>
                      <Grid style={style.centeredIngredient} item xs={6}>
                        <img style={style.ingredientImg} src={this.props.ingImg4 || garlicImg} />
                      </Grid>

                      <Grid style={style.centeredIngredient} item xs={6}>
                        <p style={style.ingQty}>{'1 1/2 oz'}</p>
                        <p style={style.ingName}>{'Feta Cheese'}</p>
                      </Grid>
                      <Grid style={style.centeredIngredient} item xs={6}>
                        <p style={style.ingQty}>{'2 cloves '}</p>
                        <p style={style.ingName}>{'Garlic'}</p>
                      </Grid>

                      <Grid style={style.centeredIngredient} item xs={6}>
                        <img style={style.ingredientImg} src={gingerImg} />
                      </Grid>
                      <Grid style={style.centeredIngredient} item xs={6}>
                        <img style={style.ingredientImg} src={ketchupImg} />
                      </Grid>

                      <Grid style={style.centeredIngredient} item xs={6}>
                        <p style={style.ingQty}>{'1 1-Inch piece '}</p>
                        <p style={style.ingName}>{'Ginger'}</p>
                      </Grid>
                      <Grid style={style.centeredIngredient} item xs={6}>
                        <p style={style.ingQty}>{'1 15-Ounce Can '}</p>
                        <p style={style.ingName}>{'Crushed Tomatoes'}</p>
                      </Grid>

                      <Grid style={style.centeredIngredient} item xs={6}>
                        <img style={style.ingredientImg} src={this.props.ingImg7 || nutsImg} />
                      </Grid>
                      <Grid style={style.centeredIngredient} item xs={6}>
                        <img style={style.ingredientImg} src={this.props.ingImg8 || onionImg} />
                      </Grid>

                      <Grid style={style.centeredIngredient} item xs={6}>
                        <p style={style.ingQty}>{'3 Tbsps '}</p>
                        <p style={style.ingName}>{'Golden Raisins'}</p>
                      </Grid>
                      <Grid style={style.centeredIngredient} item xs={6}>
                        <p style={style.ingQty}>{'1 '}</p>
                        <span style={style.ingName}>{'Yellow Onion'}</span>
                      </Grid>
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

export default recipeIdContent;
