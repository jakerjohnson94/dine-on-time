import React, { Component } from 'react';

import RootLayout from './components/RootLayout.jsx';
import './App.css';

// import { appBlue, fontGreyPrimary, fontGreySecondary } from './resources/colors';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <RootLayout />
      </React.Fragment>
    );
  }
}

export default App;
