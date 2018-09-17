import React, { Component } from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';

import AppMenuBar from './AppMenuBar';
import { appBlue, fontGreyPrimary } from '../../resources/colors';
const style = {
  subheading: {
    fontSize: '1em',
    color: fontGreyPrimary,
  },
  title: {
    fontSize: '1.5em',
    color: 'black',
    paddingBottom: '.5em',
  },
  button: {
    color: appBlue,
  },
  card: {
    margin: '1em',
  },
};
class ErrorPage extends Component {
  render() {
    return (
      <React.Fragment>
        <AppMenuBar />
        <Card style={style.card}>
          <Card>
            <CardContent>
              <Typography style={style.title} variant="title">
                We Can't Find That Page
              </Typography>
              <Typography variant="subheading" style={style.subheading}>
                Check that you are connected to the internet, and that the page you're looking for
                exists. If the problem persists, email Bob and tell him to fix it.
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardActions>
              <Button size="small" style={style.button}>
                Go Back
              </Button>
            </CardActions>
          </Card>
        </Card>
      </React.Fragment>
    );
  }
}

export default ErrorPage;
