import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typography, Grid, Card, CardMedia, CardContent } from '@material-ui/core';
import { appBlue, fontGreyPrimary } from '../../resources/colors';

const style = {
  instructions: {
    fontSize: '1em',
  },
  title: {
    textAlign: 'center',
    marginBottom: '.4em',
  },
  stepImage: {
    height: '30vh',
  },

  winePairingsTitle: {},
  wineImg: {
    width: '3em',
    marginBottom: '.5em',
  },
  wineName: {
    fontSize: '1em',
    fontWeight: 'bold',
    fontColor: appBlue,
  },
  wineStyle: {
    fontColor: fontGreyPrimary,
  },
  actionContainer: {
    marginTop: '1em',
  },
};

class CompletedContent extends Component {
  render() {
    const recipe = this.props.recipe;
    const winePairings = this.props.winePairings;
    return (
      <React.Fragment>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <Card>
              <CardMedia style={style.stepImage} image={recipe.img} />
              <CardContent>
                <Grid container justify="center" alignItems="center">
                  <Grid item xs={12}>
                    <Typography variant="title" style={style.title}>
                      Serve and Enjoy!
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subheading" style={style.winePairingsTitle}>
                      We Recommend The Following Wine Pairings with this Dish:
                    </Typography>
                  </Grid>

                  {winePairings.map(wine => (
                    <React.Fragment key={wine.name}>
                      <Grid item xs={2}>
                        <img alt='Recommended wine paring' style={style.wineImg} src={wine.img} />
                      </Grid>
                      <Grid item xs={4}>
                        <Grid container>
                          <Grid item xs={12}>
                            <Typography component="p" style={style.wineName}>
                              {wine.name}
                            </Typography>
                          </Grid>

                          <Grid item xs={12}>
                            <Typography component="p" style={style.wineStyle}>
                              {wine.style}
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography component="p" style={style.wineYear}>
                              {wine.year}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </React.Fragment>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid container style={style.actionContainer}>
            <Grid item xs={12}>
              <Typography component="p">
                Enjoyed This App? <Link to="https://www.facebook.com">Like Us On Facebook</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    winePairings: state.recipe.winePairings,
  };
};

export default connect(mapStateToProps)(CompletedContent);
// export default CompletedContent;
