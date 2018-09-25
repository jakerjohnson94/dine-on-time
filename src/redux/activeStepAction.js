export const ACTIVE_STEP = 'ACTIVE_STEP';
export const RESET_ACTIVE_STEP = 'RESET_ACTIVE_STEP';
export const placeActiveStepInStore = activeStep => {
  return {
    type: ACTIVE_STEP,
    payload: activeStep,
  };
};

export const resetActiveStep = () => {
  return {
    type: RESET_ACTIVE_STEP,
  };
};
