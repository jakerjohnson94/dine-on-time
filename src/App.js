import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Icon} from 'react-materialize'

class App extends Component {
  render() {
    return (
   <Button waves='light'>
    <Icon>thumb_up</Icon>
  </Button>
    );
  }
}

export default App;
