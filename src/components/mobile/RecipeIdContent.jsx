import React, { Component } from 'react';
import {
  Typography,
  Grid,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
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
const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const style = {
  header: {
    textAlign: 'center',
  },
  recipeImage: {
    height: '27vh',
  },
  description: {
    fontSize: '1em',
  },
  recipeName: {
    textAlign: 'center',
    paddingTop: '1em',
  },
  ingredientImg: {
    height: '4.1em',
  },
  centeredIngredient: {
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
                  {this.props.recipeName || 'Recipe Name'}
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <CardActionArea>
                  <CardContent style={{ padding: '.5em' }}>
                    <Typography style={style.description} component="p">
                      {this.props.description || loremIpsum}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Grid>

              <Grid item xs>
                <CardActionArea>
                  <CardContent style={{ padding: '.3em' }}>
                    <Grid container>
                      <Grid style={style.centeredIngredient} item xs={6}>
                        <img style={style.ingredientImg} src={chikpeasImg} />
                      </Grid>
                      <Grid style={style.centeredIngredient} item xs={6}>
                        <img style={style.ingredientImg} src={eggImg} />
                      </Grid>

                      <Grid style={style.centeredIngredient} item xs={6}>
                        <p>Chikpeas: 1</p>
                      </Grid>

                      <Grid style={style.centeredIngredient} item xs={6}>
                        <p>Egg: 1</p>
                      </Grid>

                      <Grid style={style.centeredIngredient} item xs={6}>
                        <img style={style.ingredientImg} src={fetaImg} />
                      </Grid>
                      <Grid style={style.centeredIngredient} item xs={6}>
                        <img style={style.ingredientImg} src={garlicImg} />
                      </Grid>

                      <Grid style={style.centeredIngredient} item xs={6}>
                        <p>Feta: 1 block</p>
                      </Grid>
                      <Grid style={style.centeredIngredient} item xs={6}>
                        <p>Garlic: 1 clove</p>
                      </Grid>

                      <Grid style={style.centeredIngredient} item xs={6}>
                        <img style={style.ingredientImg} src={gingerImg} />
                      </Grid>
                      <Grid style={style.centeredIngredient} item xs={6}>
                        <img style={style.ingredientImg} src={ketchupImg} />
                      </Grid>

                      <Grid style={style.centeredIngredient} item xs={6}>
                        <p>Ginger: 1/2tsp</p>
                      </Grid>
                      <Grid style={style.centeredIngredient} item xs={6}>
                        <p>Ketchup: 1/2tsp</p>
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
