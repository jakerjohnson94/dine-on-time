import React from 'react';
import { connect } from 'react-redux';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { appBlue } from '../../resources/colors';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: appBlue,
    },
  },
});

const style = {
  stepper: {
    padding: '0',
  },
};

class RecipeTimelineStepper extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Stepper style={style.stepper} activeStep={this.props.activeStep} alternativeLabel>
          {this.props.steps.map(step => {
            return (
              <Step key={step.stepId}>
                <StepLabel />
              </Step>
            );
          })}
        </Stepper>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(RecipeTimelineStepper);
