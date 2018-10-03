import React, { Component } from 'react';
// css components
import AnimateWhileLoading from 'react-page-loading';
import {Typography} from '@material-ui/core'
//local compontens
import AppMenuBar from '../AppMenuBar';
import RootContent from './RootContent';
import CannotFindQR from './CannotFindQR'
// icons

// local images

//local css
import '../../App.css';
import { appBlue } from '../../resources/colors';
//color pallette import
// import { appBlue, fontGreyPrimary, fontGreySecondary } from '../resources/colors';
//app style
const style = {
  content: {}
};
class RootLayout extends Component {
  render() {
    return (
      <AnimateWhileLoading loader={'bar'} color={appBlue} size={8}>
        <AppMenuBar />
        <RootContent style={style.content} />
      </AnimateWhileLoading>
    );
  }
}

export default RootLayout;
