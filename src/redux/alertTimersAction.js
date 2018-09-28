export const ADD_ALERT_TIMER = 'ADD_ALERT_TIMER';

export const addAlertTimer = (alertTime, stepName) => {
  return {
    type: ADD_ALERT_TIMER,
    alertTime: alertTime,
    stepName: stepName,
  };
};
