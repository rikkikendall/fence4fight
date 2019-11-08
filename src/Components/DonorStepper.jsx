import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Favorite } from '@material-ui/icons';

function getSteps() {
  return [' The Top Donor ', ' Second Highest Donor ', ' Third Highest Donor '];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return ` The top donor for each team will receive a Duke Baseball or Softball signed by the pitching staff. `;
    case 1:
      return ' The second highest donor will get an official team hat. ';
    case 2:
      return ` The third highest will receive an official team t-shirt. `;
    default:
      return 'Unknown step';
  }
}

class DonorStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div>
        <Divider />
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>
                <Typography variant="display1"> <Favorite /> {label} <Favorite /> </Typography>
              </StepLabel>
              <StepContent>
                <Typography variant="h5">{getStepContent(index)}</Typography>
                <br />
                <div>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </div>
    );
  }
}

export default DonorStepper;

export {
  DonorStepper
};
