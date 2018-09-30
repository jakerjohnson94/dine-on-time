export const ADD_ALERT_TIMER = 'ADD_ALERT_TIMER';
export const REMOVE_ALERT_TIMER = 'REMOVE_ALERT_TIMER';

export const addAlertTimer = (alertTime, stepName) => {
  return {
    type: ADD_ALERT_TIMER,
    alertTime: alertTime,
    stepName: stepName,
  };
};

export const removeAlertTimer = timerIndex => {
  return {
    type: REMOVE_ALERT_TIMER,
    timerIndex: timerIndex,
  };
};
