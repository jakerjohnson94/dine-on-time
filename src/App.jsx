import React, { Component } from 'react';
//middleware
import { Switch, Route } from 'react-router-dom';
//user components
import RootLayout from './components/mobile/RootLayout';
import QRScannerLayout from './components/mobile/QRScannerLayout';

import ErrorPage from './components/mobile/ErrorPage';
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
        <Route exact path="/error" component={ErrorPage} />
      </Switch>
    );
  }
}

export default App;
