//loop through active times of all steps and add them to get total time
export const getTotalTimeFromSteps = steps => {
  return steps.reduce((a, b) => a + b.activeTime, 0);
};

export const getFormattedTime = time => {
  const date = new Date(time);
  const minutes = date.getMinutes();
  let hours = date.getHours();
  if (hours > 12) hours = hours - 12;
  if (hours < 10) hours = '0' + hours;
  return `${hours}:${minutes}`;
};
