//loop through active times of all steps and add them to get total time
export const getTotalTimeFromSteps = steps => {
return steps.reduce((a,b)=> a + b.activeTime, 0)
};
