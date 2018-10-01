import React, { Component } from 'react';
import CompletedContent from './CompletedContent';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import AppMenuBar from '../AppMenuBar';

class CompletedLayout extends Component {
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

const mapStateToProps = state => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(CompletedLayout);
