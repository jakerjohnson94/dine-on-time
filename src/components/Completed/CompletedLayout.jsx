import React, { Component } from 'react';
import CompletedContent from './CompletedContent';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import AppMenuBar from '../AppMenuBar';
import { clearAlertTimers } from '../../redux/alertTimersAction';

class CompletedLayout extends Component {
  componentWillUnmount() {
    this.props.clearAlertTimers();
  }
  render() {
    return (
      <React.Fragment>
        <AppMenuBar />
        <Grid container>
          <Grid item xs={12}>
            <CompletedContent />
          </Grid>
        </Grid>
      </React.Fragment>
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
const mapStateToProps = state => {
  return {
    ...state,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompletedLayout);
