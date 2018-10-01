import React, { Component } from 'react';
//middleware
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
//user components
import RootLayout from './components/Root/RootLayout';
import RecipeIdLayout from './components/RecipeId/RecipeIdLayout';
import StepLayout from './components/Steps/StepLayout';
import CompletedLayout from './components/Completed/CompletedLayout';
import QRScannerLayout from './components/QRScanner/QRScannerLayout';

import ErrorPage from './components/Error/ErrorPage';
//user css
import './App.css';
//color pallete colors
// import { appBlue, fontGreyPrimary, fontGreySecondary } from './resources/colors';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={RootLayout} />
        <Route exact path="/scanner" component={QRScannerLayout} />
        <Route exact path="/recipe" component={ this.props.recipe.title ? RecipeIdLayout : ErrorPage } />
        <Route path="/recipe/:id"  component={ this.props.recipe.title ? RecipeIdLayout : ErrorPage } />
        <Route path="/steps" component={ this.props.recipe.title ? StepLayout : ErrorPage } />
        <Route path="/completed" component={ this.props.recipe.title ? CompletedLayout : ErrorPage } />
        <Route component={ErrorPage} />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
  };
};

export default connect( mapStateToProps, undefined)(App);
