import React, { Component } from 'react';
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Icon,
} from '@material-ui/core';

import stepImg from '../../resources/images/recipes/sample/sampleStep1.jpg';

class StepContent extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={7}>
            <img src={stepImg} />
          </Grid>

          <Grid item xs />
        </Grid>
      </React.Fragment>
    );
  }
}

export default StepContent;
