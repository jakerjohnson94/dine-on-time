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
    height: '30vh',
  },
  description: {
    fontSize: '1em',
  },
  recipeName: {
    textAlign: 'center',
  },
  ingredientImg: {
    height: '6em',
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
                  <CardContent>
                    <Typography style={style.description} component="p">
                      {this.props.description || loremIpsum}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Grid>

              <Grid item xs>
                <CardActionArea>
                  <CardContent>
                    <Grid container>
                      <Grid xs>
                        <img style={style.ingredientImg} src={chikpeasImg} />
                      </Grid>
                      <Grid xs>
                        <p>Chikpeas: 1</p>
                      </Grid>

                      <Grid xs>
                        <img style={style.ingredientImg} src={eggImg} />
                      </Grid>
                      <Grid xs>
                        <p>Egg: 1</p>
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

    {
      /* <React.Fragment>
        <Grid alignContent="center" alignItems="center" justify="center" container>
          <Grid item xs={12}>
            <Typography style={style.header} variant="display2">
              {this.props.recipeName || 'Recipe Name'}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <div style={style.recipeImg} />
          </Grid>
          <Grid item xs={12}>
            <Paper />
          </Grid>
        </Grid>
      </React.Fragment>
    ); */
    }
  }
}

export default recipeIdContent;
