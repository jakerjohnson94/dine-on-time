import React, { Component } from 'react';
import Axios from 'axios';

import TimeInput from './TimeInput'
import AppMenuBar from './AppMenuBar';
import RecipeIdContent from './RecipeIdContent';

// Develop on localhost, change at deployment;
const API_HOST = 'http://localhost:3000';

class RecipeIdLayout extends Component {
  state = {
    startTime: null,
    recipe: null,
    recipeUrl: API_HOST + '/recipe/'  
  }

  getRecipeFromAPI = () => {
    Axios.get(  )
  }

  render() {
    return (
      <React.Fragment>
        <AppMenuBar />
        <RecipeIdContent />
        <TimeInput hoistTime={ time => this.setState({ startTime: time })} />
      </React.Fragment>
    );
  }
}

export default RecipeIdLayout;
