import React, { Component } from 'react';
import CompletedContent from './CompletedContent';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import { appBlue } from '../../resources/colors';
import { Link } from 'react-router-dom';
import AppMenuBar from '../AppMenuBar';

class CompletedLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <React.Fragment>
          <AppMenuBar />
          <CompletedContent />
        </React.Fragment>
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
