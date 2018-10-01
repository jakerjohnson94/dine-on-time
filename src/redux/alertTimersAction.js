export const ADD_ALERT_TIMER = 'ADD_ALERT_TIMER';
export const REMOVE_ALL_ALERT_TIMERS = 'REMOVE_ALL_ALERT_TIMERS';
export const addAlertTimer = (alertTime, stepName) => {
  return {
    type: ADD_ALERT_TIMER,
    alertTime: alertTime,
    stepName: stepName,
  };
};

export const removeAllAlertTimers = () => {
  return {
    type: REMOVE_ALL_ALERT_TIMERS,
  };
};
