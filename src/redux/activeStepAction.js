export const SET_ACTIVE_STEP = 'ACTIVE_STEP';

export const setActiveStep = activeStep => {
  return {
    type: SET_ACTIVE_STEP,
    payload: activeStep,
  };
};
