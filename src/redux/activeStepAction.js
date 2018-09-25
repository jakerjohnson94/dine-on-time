export const ACTIVE_STEP = 'ACTIVE_STEP';

export const placeActiveStepInStore = activeStep => {
  return {
    type: ACTIVE_STEP,
    payload: activeStep,
  };
};
