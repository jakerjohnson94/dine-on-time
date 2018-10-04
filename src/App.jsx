import React, { Component } from 'react';
//middleware
import { Switch, Route } from 'react-router-dom';
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
      <React.Fragment>
        <link rel="manifest" href="/manifest.json" />
        <Switch>
          <Route exact path="/" component={RootLayout} />
          <Route exact path="/scanner" component={QRScannerLayout} />
          <Route exact path="/recipe" component={RecipeIdLayout} />
          <Route path="/recipe/:id"  component={RecipeIdLayout} />
          <Route path="/steps" component={StepLayout} />
          <Route path="/completed" component={CompletedLayout} />
          <Route component={ErrorPage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
