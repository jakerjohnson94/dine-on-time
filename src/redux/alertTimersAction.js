export const ADD_ALERT_TIMER = 'ADD_ALERT_TIMER';
export const CLEAR_ALERT_TIMERS = 'CLEAR_ALERT_TIMERS';

export const addAlertTimer = (alertTime, stepName) => {
  return {
    type: ADD_ALERT_TIMER,
    alertTime: alertTime,
    stepName: stepName,
  };
};
export const clearAlertTimers = () => {
  return {
    type: CLEAR_ALERT_TIMERS,
  };
};
