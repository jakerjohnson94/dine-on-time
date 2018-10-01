import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Avatar,
  Grid,
} from '@material-ui/core';

import AppMenuBar from '../AppMenuBar';
import { appBlue, fontGreyPrimary } from '../../resources/colors';
import bobImg from '../../resources/images/Bob.jpeg';
const style = {
  subheading: {
    fontSize: '1em',
    color: fontGreyPrimary,
  },
  title: {
    fontSize: '1.5em',
    color: 'black',
    paddingBottom: '1em',
  },
  button: {
    color: appBlue,
  },
  card: {
    margin: '1em',
  },
  avatar: {
    width: '6em',
    height: '6.5em',
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
              <Grid container spacing={8} alignItems="flex-end">
                <Grid item xs={12} sm="auto">
                  <Avatar alt="Bob" src={bobImg} style={style.avatar} />
                </Grid>
                <Grid item xs={12} sm="auto">
                  <Typography variant="title" style={style.title}>
                    Chef Bob Can't Find That Page
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="subheading" style={style.subheading}>
                Don't feel bad, Chef Bob has problems finding lots of things.
                <br />
                Check that the page exists and that you are connected to the internet. If the
                problem persists, contact us on{' '}
                <a
                  style={{ textDecoration: 'none' }}
                  href="https://github.com/jakerjohnson94/dine-on-time"
                >
                  Github
                </a>
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardActions>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button size="small" style={style.button}>
                  Go Back
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Card>
      </React.Fragment>
    );
  }
}

export default ErrorPage;
