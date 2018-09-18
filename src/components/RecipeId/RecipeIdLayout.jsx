import React, { Component } from 'react';
import RecipeIdContent from './RecipeIdContent';

import AppMenuBar from '../AppMenuBar';
class RecipeIdLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <AppMenuBar />
        <RecipeIdContent />
      </React.Fragment>
    );
  }
}

export default RecipeIdLayout;
