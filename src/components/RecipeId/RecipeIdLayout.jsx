import React, { Component } from 'react';
import RecipeIdContent from './RecipeIdContent';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import { appBlue } from '../../resources/colors';
import { Link } from 'react-router-dom';
import AppMenuBar from '../AppMenuBar';
import fetchRecipeById from '../../redux/recipeAction.js';
import { Button } from '@material-ui/core';

class RecipeIdLayout extends Component {
  componentWillMount() {
    this.props.fetchRecipe('1');
  }

  render() {
    return (
      <React.Fragment>
        {this.props.fetching ? (
          <div
            id='loadingWheel'
            style={{ position: 'absolute', padding: '37.5vw' }}>
            <ReactLoading
              type={'spin'}
              color={appBlue}
              height={'25vw'}
              width={'25vw'}
            />
          </div>
        ) : (
          <React.Fragment>
            <AppMenuBar />
            <RecipeIdContent />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipe: recipeId => dispatch(fetchRecipeById(recipeId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeIdLayout);
