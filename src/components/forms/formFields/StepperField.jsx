import { Stepper, Step, StepLabel } from '@mui/material';

const StepperField = (props) => {
  const { activeStep, steps } = props;

  return (
    <Stepper activeStep={activeStep}>
      {steps.map((label) => {
        return (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  )
}

export default StepperField