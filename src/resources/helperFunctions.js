//loop through active times of all steps and add them to get total time
export const getTotalTimeFromSteps = steps => {
  let result = 0;
  for (let step of steps) {
    result += step.activeTime;
  }
  return result;
};
