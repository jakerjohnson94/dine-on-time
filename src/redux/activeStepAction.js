export const SET_ACTIVE_STEP = 'ACTIVE_STEP';
export const SET_PREVIOUS_STEP = 'SET_PREVIOUS_STEP';
export const setActiveStepIndex = activeStep => {
  return {
    type: SET_ACTIVE_STEP,
    payload: activeStep,
  };
};
export const setPreviousStepIndex = previousStep => {
  return {
    type: SET_PREVIOUS_STEP,
    payload: previousStep,
  };
};
