import React, { Component } from 'react';
// css components

//local compontens
import AppMenuBar from '../AppMenuBar';
import RootContent from './RootContent';
// icons

// local images

//local css
import '../../App.css';
//color pallette import
// import { appBlue, fontGreyPrimary, fontGreySecondary } from '../resources/colors';
//app style
const style = {
  content: {},
};
class RootLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <AppMenuBar />
        <RootContent style={style.content} />
      </React.Fragment>
    );
  }
}

export default RootLayout;
