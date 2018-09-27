import React, { Component } from 'react';
import RecipeIdContent from './RecipeIdContent';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import { appBlue } from '../../resources/colors';
import AppMenuBar from '../AppMenuBar';
import fetchRecipeById, { fetchRecipeByURLParam } from '../../redux/recipeAction.js';

class RecipeIdLayout extends Component {
  componentDidMount = () => {
    if( this.props.match.params.id && !this.props.recipe ) {
      this.props.fetchRecipeByParam( this.props.match.params.id )
    }
  }

  render() {

    return (
      <React.Fragment>
        {this.props.fetching ? (
          <div
            id="loadingWheel"
            style={{ position: 'absolute', padding: '37.5vw' }}
          >
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
    ...state
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
