import React, { Component } from 'react';
import RecipeIdContent from './RecipeIdContent';
import { connect } from 'react-redux';
import { appBlue } from '../../resources/colors';
import AppMenuBar from '../AppMenuBar';
import fetchRecipeById, { fetchRecipeByURLParam } from '../../redux/recipeAction.js';
import AnimateWhileLoading from 'react-page-loading';

class RecipeIdLayout extends Component {
  componentDidMount = () => {
    if (this.props.match.params.id && !this.props.recipe) {
      this.props.fetchRecipeByParam(this.props.match.params.id);
    }
  };

  render() {
    return (
      <AnimateWhileLoading loader={'bar'} color={appBlue} size={8}>
        <AppMenuBar />
        <RecipeIdContent />
      </AnimateWhileLoading>
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
    fetchRecipeByParam: recipeId => dispatch(fetchRecipeByURLParam(recipeId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeIdLayout);
