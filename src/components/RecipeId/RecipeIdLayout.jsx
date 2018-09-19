import React, { Component } from 'react';
import RecipeIdContent from './RecipeIdContent';
import { connect } from 'react-redux';
import AppMenuBar from '../AppMenuBar';
import fetchRecipeById from '../../redux/recipeAction.js';
class RecipeIdLayout extends Component {
  componentWillMount() {
    this.props.fetchRecipe('1');
    console.log(this.props);
  }

  render() {
    return (
      <React.Fragment>
        <AppMenuBar />
        <RecipeIdContent />
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
