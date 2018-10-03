import React, { Component } from 'react';
// css components
import AnimateWhileLoading from 'react-page-loading';
import { Typography, Grid, Card, CardMedia } from '@material-ui/core';
//local compontens
import AppMenuBar from '../AppMenuBar';
import RootContent from './RootContent';

import CannotFindQR from './CannotFindQR';
import { clearAlertTimers } from '../../redux/alertTimersAction';
import { connect } from 'react-redux';
import infoImg1 from '../../resources/images/root/infoImg1.svg';

// icons

// local images

//local css
import '../../App.css';
import { appBlue, fontGreySecondary } from '../../resources/colors';
//color pallette import
// import { appBlue, fontGreyPrimary, fontGreySecondary } from '../resources/colors';
//app style
const style = {
  content: {
    height: '100%',
    position: 'relative',
  },
  centerContent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  appParagraph: {
    fontStyle: 'italic',
    color: fontGreySecondary,
    textAlign: 'center',
    fontSize: '1em',
    marginBottom: '1em',
  },
};
class RootLayout extends Component {
  componentDidMount() {
    this.props.clearAlertTimers();
  }
  render() {
    return (
      <AnimateWhileLoading loader={'bar'} color={appBlue} size={8}>
        <div style={style.content}>
          <AppMenuBar />
          <RootContent />
        </div>
        <Grid container style={style.centerContent}>
          <Grid style={style.centerContent} item xs={12}>
            <Card>
              <CardMedia style={{ height: '30em' }} image={infoImg1} title="InfoGraphic" />
              <Typography style={style.appParagraph} variant="body1">
                Dine On Time was created to be used in association with meal-kit delivery services
                like Blue Apron, scan your QR code or input the recipe ID to get step by step
                instructions with timers and alerts. Don't dine alone,{' '}
                <span style={{ fontWeight: 'bold' }}>Dine On Time!</span>
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </AnimateWhileLoading>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearAlertTimers: () => {
      dispatch(clearAlertTimers());
    },
  };
};
export default connect(
  null,
  mapDispatchToProps
)(RootLayout);
